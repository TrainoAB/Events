"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

import "./page.css";

export default function EditEventPage({ params }) {
    const router = useRouter();
    const [ event, setEvent ] = useState();
    const eventRef = useRef();
    const dateRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = async () => {
        const response = await fetch(`/api/event?id=${params.id}`);
        if (response.status === 200) {
            const event = await response.json();
            setEvent(event);
        }
    }

    const handleCancel = () => {
        router.push("/admin");
    }

    const handleSubmit = async () => {      // Is used instead of Server Action to keep test-data changes alive
        await fetch('/api/event', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                'id': event.id,
                'url': event.url,       // have input field for editing url?
                'date': dateRef.current?.value,
                'description': descriptionRef.current?.value,
                'competition': eventRef.current?.value,
                'image': imageRef.current?.value
            })
        });
    }

    return (
        <main id="edit-event-page" className="flex-col align-c">
            <h1 className="edit-event-page__title">Redigera eventet {params.id}</h1>

            { event ? <form className="edit-event-form flex-col">
                <div className="input-wrapper">
                    <label htmlFor="event">Event</label>
                    <input id="event" name="event" type="text" ref={eventRef} defaultValue={event.competition} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="date">Datum</label>
                    <input id="date" name="date" type="date" ref={dateRef} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" ref={imageRef} defaultValue={event.image} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} ref={descriptionRef} defaultValue={event.description} required />
                </div>

                <div className="edit-event-form__buttons">
                    <button type="reset" onClick={handleCancel}> Avbryt </button>
                    <button type="submit" onClick={handleSubmit}> Spara </button>
                </div>
            </form> : <></> }
        </main>
    );
}
