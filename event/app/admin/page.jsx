'use client';

import { useState } from "react";
import Link from "next/link";
import EventCard from "@/app/components/EventCard";
import { Modal } from "@/app/components/Modal";

import "./page.css";

const EVENTS = [
    {
        url: "/admin/1/event",
        image: "https://picsum.photos/484/272",
        date: "16 Aug. 2024",
        competition: "Triathlon",
        description: "Stockholm. Även ett mini olympiskt triathlon.",
    },
    {
        url: "#",
        image: "https://picsum.photos/484/272",
        date: "N/A",
        competition: "E-Sport Challenge",
        description: "Detta event planeras fortfarande.",
    },
];

export default function AdminPage() {
    const [ showModal, setShowModal ] = useState(false);
    const [ event, setEvent ] = useState();

    const handleDeleteClick = (event) => {
        setEvent(event);
        setShowModal(!showModal);
    }

    const handleDeleteEvent = () => {
        console.log(`delete ${event.competition}`);
    }

    const handleToggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <main id="admin-page" className="max-width gap">
            <h1 className="admin-page__title">Hantera Events</h1>

            <div className="events">
                {EVENTS.map((event, i) => (
                    <div className="event-wrapper" key={i} >
                        <EventCard event={event} />
                        <button className="delete-event-btn" onClick={() => handleDeleteClick(event)}> Radera </button>
                    </div>
                ))}
            </div>

            {showModal ? <Modal 
                            title={event.competition}
                            closeModal={handleToggleModal} 
                            confirm={handleDeleteEvent} 
                        /> : <></> 
            }
            
            <Link href="/admin/add" className="manage-sponsors__add-link">
                <button className="add-event-btn"></button>
            </Link>
        </main>
    );
}
