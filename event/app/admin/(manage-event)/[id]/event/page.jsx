"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateEvent } from "@/app/actions/event";

import "./page.css";

export default function EditEventPage({ params }) {
    const router = useRouter();
    const [ event, setEvent ] = useState();

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

    return (
        <main id="edit-event-page" className="flex-col align-c">
            <h1 className="edit-event-page__title">Redigera eventet {params.id}</h1>

            { event ? <form className="edit-event-form flex-col" action={updateEvent.bind(null, event.id)}>
                <div className="input-wrapper">
                    <label htmlFor="event">Event</label>
                    <input id="event" name="event" type="text" defaultValue={event.competition} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="date">Datum</label>
                    <input id="date" name="date" type="date" defaultValue={event.date} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" defaultValue={event.image} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} defaultValue={event.description} required />
                </div>

                <div className="edit-event-form__buttons">
                    <button type="reset" onClick={handleCancel}> Avbryt </button>
                    <button> Spara </button>
                </div>
            </form> : <></> }
        </main>
    );
}
