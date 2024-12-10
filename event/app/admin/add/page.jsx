'use client';

import { useRouter } from "next/navigation";
import { createEvent } from "@/app/actions/event";

import "./page.css";

export default function AddEventPage() {
    const router = useRouter();

    const handleCancel = () => {
        router.push("/admin");
    }

    const handleConfirm = () => {
        router.push("/admin");
    }

    return (
        <main id="add-event-page" className="flex-col align-c">
            <h1 className="add-event-page__title">Lägg till Event</h1>

            <form className="add-event-form flex-col" action={createEvent}>
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
                    <input id="start_date" name="start_date" type="date" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="start_time">Tid när eventet startar</label>
                    <input id="start_time" name="start_time" type="time" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="max-participants">Max antal deltagare per tävling</label>
                    <input
                        id="max-participants"
                        name="max-participants"
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
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} required />
                </div>

                <div className="add-event-form__buttons">
                    <button type="reset" onClick={handleCancel}>Avbryt</button>
                    <button onClick={handleConfirm}> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
