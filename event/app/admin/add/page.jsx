'use client';

import { useRef } from "react";
import { useRouter } from "next/navigation";

import "./page.css";

export default function AddEventPage() {
    const router = useRouter();
    const eventRef = useRef();
    const dateRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();

    const handleCancel = () => {
        router.push("/admin");
    }

    const handleSubmit = async () => {      // Is used instead of Server Action to keep test data changes alive
        await fetch('/api/event', {
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                'id': Math.floor(Math.random() * 100) + 3,      // shoule be generated in some other way
                'url': '#',
                'date': dateRef.current?.value,
                'description': descriptionRef.current?.value,
                'competition': eventRef.current?.value,
                'image': "https://picsum.photos/484/272"        // hard coded for testing purposes
            })
        });
    }

    return (
        <main id="add-event-page" className="flex-col align-c">
            <h1 className="add-event-page__title">Lägg till Event</h1>

            <form className="add-event-form flex-col">
                <div className="input-wrapper">
                    <label htmlFor="event">Event</label>
                    <input id="event" name="event" type="text" ref={eventRef} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="date">Datum</label>
                    <input id="date" name="date" type="date" ref={dateRef} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" ref={imageRef} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} ref={descriptionRef} required />
                </div>

                <div className="add-event-form__buttons">
                    <button type="reset" onClick={handleCancel}>Avbryt</button>
                    <button type="submit" onClick={handleSubmit}>Lägg till</button>
                </div>
            </form>
        </main>
    );
}
