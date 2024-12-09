"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { createWinner } from "@/app/actions/winner";

import "./page.css";

export default function AddWinnerPage({ params }) {
    const [state, formAction] = useFormState(createWinner.bind(null, params.id), { message: '', success: false });
    const formRef = useRef();
    const router = useRouter();

    const handleCancel = () => {
        router.push(`/admin/${params.id}/winners`);
    }

    return (
        <main id="add-winner-page" className="flex-col align-c">
            <h1 className="add-winner-page__title">Lägg till Vinnare</h1>
            { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
                {state?.success ? formRef.current?.reset() : <></>}
            </h2> : <></> }

            <form className="add-winner-form flex-col" ref={formRef} action={formAction}>
                <div className="input-wrapper">
                    <label htmlFor="forename">Förnamn</label>
                    <input id="forename" name="forename" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="surname">Efternamn</label>
                    <input id="surname" name="surname" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="city">Stad</label>
                    <input id="city" name="city" type="text" required />
                </div>
                <div className="input-wrapper input-wrapper--radio">
                    <span className="gender-label">Tävling</span>
                    <label className="radio-wrapper" htmlFor="triathlon">
                        <input
                            id="triathlon"
                            name="competition"
                            type="radio"
                            value="Triathlon"
                            required
                        />
                        <div className="radio-btn"></div>
                        <span>Triathlon</span>
                    </label>
                    <label className="radio-wrapper" htmlFor="olympic-triathlon">
                        <input
                            id="olympic-triathlon"
                            name="competition"
                            type="radio"
                            value="Olympiskt Triathlon"
                        />
                        <div className="radio-btn"></div>
                        <span>Olympiskt Triathlon</span>
                    </label>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="finish_time">Sluttiden</label>
                    <input id="finish_time" name="finish_time" type="time" step={2} required />
                </div>

                <div className="add-winner-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
