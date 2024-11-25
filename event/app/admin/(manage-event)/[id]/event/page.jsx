"use client";

import { useRouter } from "next/navigation";

import "./page.css";

export default function EditEventPage({ params }) {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    };

    return (
        <main id="edit-event-page" className="flex-col align-c">
            <h1 className="edit-event-page__title">Redigera eventet {params.id}</h1>

            <form className="edit-event-form flex-col">
                <div className="input-wrapper">
                    <label htmlFor="event">Event</label>
                    <input id="event" name="event" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="date">Datum</label>
                    <input id="date" name="date" type="date" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} required />
                </div>

                <div className="edit-event-form__buttons">
                    <button onClick={handleCancel} type="reset">Avbryt</button>
                    <button>Spara</button>
                </div>
            </form>
        </main>
    );
}
