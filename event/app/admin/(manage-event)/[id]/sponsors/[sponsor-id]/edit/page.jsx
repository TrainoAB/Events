"use client";

import { useRouter } from "next/navigation";
import { useTrainoContext } from "@/app/context/TrainoContext";

import "./page.css";
import { useEffect, useState } from "react";
import { updateSponsor } from "@/app/actions/sponsor";

const initialState = {
    eventId: 0,
    id: 0,
    name: "",
    image: "",
    url: "",
    description: "",
};

export default function EditSponsorPage({ params }) {
    const { BASE_URL, DEBUG } = useTrainoContext();

    const [sponsor, setSponsor] = useState(initialState);

    // Destructure the eventId and sponsorId
    const { id: eventId, "sponsor-id": sponsorId } = params;
    DEBUG && console.log("eventId:", eventId, "sponsorId:", sponsorId);

    const router = useRouter();

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
                setSponsor(sponsorData);
            } catch (error) {
                DEBUG && console.error(error);
            }
        };
        fetchSponsorById(sponsorId);
    }, [eventId, sponsorId]);

    const handleCancel = () => {
        router.back();
    };

    return (
        <main id="edit-sponsor-page" className="flex-col align-c">
            <h1 className="edit-sponsor__title">Redigera sponsor</h1>

            <form className="edit-sponsor-form flex-col" action={updateSponsor.bind(null, sponsorId)}>
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
                    <button>Spara</button>
                </div>
            </form>
        </main>
    );
}
