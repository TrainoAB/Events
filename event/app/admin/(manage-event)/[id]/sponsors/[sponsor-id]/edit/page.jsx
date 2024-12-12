"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { useTrainoContext } from "@/app/context/TrainoContext";
import { updateSponsor } from "@/app/actions/sponsor";
import SubmitButton from "@/app/components/SubmitButton";

import "./page.css";

const initialState = {
    eventId: 0,
    id: 0,
    name: "",
    image: "",
    url: "",
    description: "",
};

const initialActionState = {
    message: "",
    success: false,
};

export default function EditSponsorPage({ params }) {
    const { BASE_URL, DEBUG } = useTrainoContext();
    // Destructure the eventId and sponsorId
    const { id: eventId, "sponsor-id": sponsorId } = params;
    DEBUG && console.log("eventId:", eventId, "sponsorId:", sponsorId);

    const [sponsor, setSponsor] = useState(initialState);
    const [ discounts, setDiscounts ] = useState([]);
    const [ prioritized, setPrioritized ] = useState();
    const [state, formAction] = useFormState(
        updateSponsor.bind(null, sponsorId),
        initialActionState
    );
    const [showMessage, setShowMessage] = useState();
    const formRef = useRef(null);

    const router = useRouter();

    const message = state?.message;
    // Set classname based on success
    const computedMessage = state?.success ? "message-success" : "message-failure";

    // Fetch a sponsor when loading the edit page
    useEffect(() => {
        // Fetch sponsor based on the sponsorId
        const fetchSponsorById = async (sponsorId) => {
            try {
                const res = await fetch(`${BASE_URL}/api/sponsors/${sponsorId}`);

                if (!res.ok) {
                    throw new Error(
                        `Failed to fetch sponsor with id: ${sponsorId} for eventId: ${eventId}`
                    );
                }
                const sponsorData = await res.json();
                setPrioritized(sponsorData.prioritized);
                setSponsor(sponsorData);
            } catch (error) {
                DEBUG && console.error(error);
            }
        };
        fetchSponsorById(sponsorId);
    }, [eventId, sponsorId, state, prioritized]);

    // Display a message for 5s
    useEffect(() => {
        setShowMessage(true);

        const timeoutId = setTimeout(() => {
            // Only hide the message if adding was successful
            if (state?.success) {
                setShowMessage(false);
            }
        }, 5000);

        // Cleanup the timeout
        return () => clearTimeout(timeoutId);
    }, [state]);

    useEffect(() => {
        fetchDiscountsForSponsor();
    }, []);

    const fetchDiscountsForSponsor = async () => {
        const response = await fetch(`/api/discounts?sponsorid=${sponsorId}`);
        if (response.status === 200) {
            const discounts = await response.json();
            setDiscounts(discounts);
        }
    }

    const handleCancel = () => {
        router.back();
    };

    const handleCreateDiscount = () => {
        router.push(`/admin/${sponsor.eventId}/sponsors/${sponsor.id}/edit/add-discount`);
    }

    return (
        <main id="edit-sponsor-page" className="flex-col align-c">
            <h1 className="edit-sponsor__title">Redigera sponsor</h1>
            {showMessage && message && (
                <h2
                    className={`${computedMessage} ${
                        showMessage && state?.success ? "message-fade" : ""
                    }`}
                >
                    {message}
                </h2>
            )}
            <form className="edit-sponsor-form flex-col" action={formAction} ref={formRef}>
                <div className="input-wrapper">
                    <label htmlFor="sponsor">Sponsor</label>
                    <input
                        id="sponsor"
                        name="sponsor"
                        type="text"
                        defaultValue={sponsor.name}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        defaultValue={sponsor.image}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="link">Länk</label>
                    <input id="link" name="link" type="text" defaultValue={sponsor.url} required />
                </div>
                <div className="input-select-wrapper">
                    <label for="discount-select">Befintliga rabatter:</label>
                    <select name="discounts" id="discount-select">
                        { discounts ? discounts.map(discount => <option key={discount.id}>{discount.title}</option>) : <></>}
                    </select>
                </div>
                <button onClick={handleCreateDiscount}>
                        Lägg till rabatt
                    </button>
                { prioritized ? <div className="checkbox-wrapper">
                    <label htmlFor="prioritized">Ska sponsoren visas på förstasidan?</label>
                    <input id="prioritized" name="prioritized" type="checkbox" defaultChecked={true} />
                </div> : <></> }
                { !prioritized ? <div className="checkbox-wrapper">
                    <label htmlFor="prioritized">Ska sponsoren visas på förstasidan?</label>
                    <input id="prioritized" name="prioritized" type="checkbox" />
                </div> : <></> }
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={10}
                        cols={100}
                        defaultValue={sponsor.description}
                        required
                    />
                </div>

                <div className="edit-sponsor-form__buttons">
                    <button onClick={handleCancel} type="reset">
                        Avbryt
                    </button>
                    <SubmitButton message={{ pending: "Sparar...", default: "Spara" }} />
                </div>
            </form>
        </main>
    );
}
