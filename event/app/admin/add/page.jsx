'use client';

import { useRouter } from "next/navigation";

import "./page.css";

export default function AddEventPage() {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    }

    return (
        <main id="add-event-page" className="flex-col align-c">
            <h1 className="add-event-page__title">Lägg till Event</h1>

            <form className="add-event-form">
                <div className="input-wrapper">
                    <label htmlFor="event">Event</label>
                    <input id="event" name="event" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="date">Datum</label>
                    <input id="date" name="date" type="date" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} />
                </div>

                <div className="add-event-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
