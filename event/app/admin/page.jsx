'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import EventCard from "@/app/components/EventCard";
import { Modal } from "@/app/components/Modal";

import "./page.css";

export default function AdminPage() {
    const [ event, setEvent ] = useState();
    const [ events, setEvents ] = useState([]);
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort eventet?");

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const response = await fetch('/api/events');
        if (response.status === 200) {
            const events = await response.json();
            events.map(element => {
                element.url = `/admin/${element.id}/event`;             // Gör denna navigering på ett snyggare sätt
            });
            setEvents(events);
        }
    }

    const deleteEvent = async (id) => {
        await fetch('/api/event', {
            method:'DELETE',
            body:JSON.stringify({
                'id':id
            })
        });

        fetchEvents();
    }

    const handleDeleteClick = (event) => {
        setEvent(event);
        document.querySelector("#modal").showModal();
        setModalText(`Är du säker på att du vill ta bort eventet ${event.competition}?`);
    }

    const handleConfirm = () => {
        deleteEvent(event.id);
    }

    return (
        <main id="admin-page" className="max-width gap flex-col align-c">
            <h1 className="admin-page__title">Hantera Events</h1>
            <div className="events">
                {events ? events.map((event, i) => (
                    <div className="event-wrapper flex-col" key={i} >
                        <EventCard event={event} />
                        <button className="delete-btn" onClick={() => handleDeleteClick(event)}> Radera </button>
                    </div>
                )) : <></>
                }
            </div>

            <Modal title={modalText} handleConfirm={handleConfirm} />
            
            <Link href="/admin/add" className="admin-page__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}