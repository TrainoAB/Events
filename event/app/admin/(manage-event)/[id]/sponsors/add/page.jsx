"use client";

import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { createSponsor } from "@/app/actions/sponsor";
import SubmitButton from "@/app/components/SubmitButton";

import "./page.css";

const initialActionState = {
    message: "",
    success: false,
};

export default function AddSponsorPage({ params }) {
    const [state, formAction] = useFormState(createSponsor.bind(null, params.id), initialActionState);
    const [showMessage, setShowMessage] = useState(false);
    const formRef = useRef(null);
    const router = useRouter();

    const message = state?.message;
    // Set classname based on success
    const computedMessage = state?.success ? "message-success" : "message-failure";

    const handleCancel = () => {
        router.back();
    };

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

    // Reset the form if adding was successful
    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
    }, [state]);

    return (
        <main id="add-sponsor-page" className="gap flex-col align-c">
            <h1 className="add-sponsor__title">Lägg till sponsor</h1>
            {showMessage && message && (
                <h2
                    className={`${computedMessage} ${
                        showMessage && state?.success ? "message-fade" : ""
                    }`}
                >
                    {message}
                </h2>
            )}
            <form className="add-sponsor-form flex-col" action={formAction} ref={formRef}>
                <div className="input-wrapper">
                    <label htmlFor="sponsor">Sponsor</label>
                    <input id="sponsor" name="sponsor" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="link">Länk</label>
                    <input id="link" name="link" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} required />
                </div>

                <div className="add-sponsor-form__buttons">
                    <button onClick={handleCancel} type="reset">
                        Avbryt
                    </button>
                    <SubmitButton message={{ pending: "Lägger till...", default: "Lägg till" }} />
                </div>
            </form>
        </main>
    );
}
