'use client';

import { useRef } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { createEvent } from "@/app/actions/event";

import "./page.css";

export default function AddEventPage() {
    const [state, formAction] = useFormState(createEvent, { message: '', success: false });
    const router = useRouter();
    const formRef = useRef();

    const handleCancel = () => {
        router.push("/admin");
    }

    return (
        <main id="add-event-page" className="flex-col align-c">
            <h1 className="add-event-page__title">Lägg till Event</h1>
            {state?.message ? (
                <h2 className={state?.success ? "message-success" : "message-failure"}>
                    {state?.message}
                    {state?.message ? formRef.current?.reset() : <></>}
                </h2>
            ) : (
                <></>
            )}

            <form className="add-event-form flex-col" ref={formRef} action={formAction}>
                <div className="input-wrapper">
                    <label htmlFor="event">Event</label>
                    <input id="event" name="event" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="url">Länk till eventets hemsida</label>
                    <input id="url" name="url" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="start_date">Datum när eventet hålls</label>
                    <input
                        id="start_date"
                        name="start_date"
                        type="date"
                        min={new Date().toLocaleDateString("sv-SE")}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="start_time">Tid när eventet startar</label>
                    <input id="start_time" name="start_time" type="time" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="max_participants">Max antal deltagare</label>
                    <input
                        id="max_participants"
                        name="max_participants"
                        type="number"
                        step={1}
                        min={1}
                        max={10000}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" required />
                </div>
                <div className="checkbox-wrapper">
                    <label htmlFor="hide">Dölj eventet för vanliga användare</label>
                    <input id="hide" name="hide" type="checkbox" defaultChecked={true} />
                </div>
                <div className="checkbox-wrapper">
                    <label htmlFor="dev_mode">
                        Förhindra användare att komma åt eventsidor (Dev mode)
                    </label>
                    <input id="dev_mode" name="dev_mode" type="checkbox" defaultChecked={true} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} required />
                </div>

                <div className="add-event-form__buttons">
                    <button type="reset" onClick={handleCancel}>
                        Avbryt
                    </button>
                    <button> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
