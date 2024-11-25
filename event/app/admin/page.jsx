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
    const [ event, setEvent ] = useState();
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort eventet?");

    const handleDeleteClick = (event) => {
        setEvent(event);
        document.querySelector("#modal").showModal();
        setModalText(`Är du säker på att du vill ta bort eventet ${event.competition}?`);
    }

    const handleConfirm = () => {
        console.log(`delete ${event.competition}`);
    }

    return (
        <main id="admin-page" className="max-width gap flex-col align-c">
            <h1 className="admin-page__title">Hantera Events</h1>
            <div className="events">
                {EVENTS.map((event, i) => (
                    <div className="event-wrapper flex-col" key={i} >
                        <EventCard event={event} />
                        <button className="delete-btn" onClick={() => handleDeleteClick(event)}> Radera </button>
                    </div>
                ))}
            </div>

            <Modal title={modalText} handleConfirm={handleConfirm} />
            
            <Link href="/admin/add" className="admin-page__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}