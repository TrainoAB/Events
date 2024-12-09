"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import EventCard from "@/app/components/EventCard";
import Footer from "@/app/components/Footer";

import "./page.css";

export default function Home() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const response = await fetch("/api/events");
        if (response.status === 200) {
            const events = await response.json();
            setEvents(events);
        }
    };

    const setFinishedUrl = (event) => {
        if (!event.url.includes("event-finished")) {
            event.url = event.finished ? event.url + "/event-finished" : event.url; // add event-finished to url if event is marked as finished
        }
        return event;
    };

    return (
        <>
            <main id="alleventspage" className="max-width flex-col align-c">
                <h1 className="logo">
                    <Image
                        className="alleventspage__logo"
                        src="/logo.svg"
                        alt="Traino Logo"
                        width={700}
                        height={200}
                        priority
                    />
                    Events
                </h1>
                <section className="alleventspage__events">
                    {events ? (
                        events.map((event, index) => <EventCard event={setFinishedUrl(event)} key={index} />)
                    ) : (
                        <></>
                    )}
                </section>
            </main>
            <Footer startPage="true" />
        </>
    );
}
