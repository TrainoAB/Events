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
                    <label htmlFor="date">Datum</label>
                    <input id="date" name="date" type="date" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="time">Tid när eventet startar</label>
                    <input id="time" name="time" type="time" required />
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
