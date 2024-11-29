'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import EventCard from "./components/EventCard";

import "./page.css";

export default function Home() {
    const [ events, setEvents ] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const response = await fetch('/api/event?all');
        if (response.status === 200) {
            const events = await response.json();
            setEvents(events);
        }
    }

    return (
        <main id="alleventspage" className="max-width flex-col align-c">
            <Image
                className="alleventspage__logo"
                src="/logo.svg"
                alt="Traino Logo"
                width={700}
                height={200}
                priority
            />

            <section className="alleventspage__events">
                {events ? events.map((event, index) => (
                    <EventCard event={event} key={index} />
                )) : <></>
                }
            </section>
        </main>
    );
}
