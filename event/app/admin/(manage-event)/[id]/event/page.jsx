"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { updateEvent } from "@/app/actions/event";

import "./page.css";

export default function EditEventPage({ params }) {
    const router = useRouter();
    const [ event, setEvent ] = useState();
    const [state, formAction] = useFormState(updateEvent.bind(null, params.id), { message: '', success: false });

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
            <h1 className="edit-event-page__title">Redigera eventet</h1>
            { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
            </h2> : <></> }

            { event ? <form className="edit-event-form flex-col" action={formAction}>
                <div className="input-wrapper">
                    <label htmlFor="event">Event</label>
                    <input id="event" name="event" type="text" defaultValue={event.competition} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="url">Länk till eventets hemsida</label>
                    <input id="url" name="url" type="text" defaultValue={event.url} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="start_date">Datum när eventet hålls</label>
                    <input id="start_date" name="start_date" type="date" defaultValue={event.start_date} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="start_time">Tid när eventet startar</label>
                    <input id="start_time" name="start_time" type="time" defaultValue={event.start_time} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="max_participants">Max antal deltagare per tävling</label>
                    <input
                        id="max_participants"
                        name="max_participants"
                        type="number"
                        defaultValue={event.max_participants}
                        step={1}
                        min={1}
                        max={10000}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" defaultValue={event.image} required />
                </div>
                <div className="checkbox-wrapper">
                    <label htmlFor="finished">Markera eventet som avslutat</label>
                    <input id="finished" name="finished" type="checkbox" defaultChecked={event.finished} />
                </div>
                <div className="checkbox-wrapper">
                    <label htmlFor="hide">Dölj eventet för vanliga användare</label>
                    <input id="hide" name="hide" type="checkbox" defaultChecked={event.hide} />
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
