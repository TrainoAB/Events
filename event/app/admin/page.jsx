import Link from "next/link";
import EventCard from "../components/EventCard";

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
    return (
        <main id="admin-page" className="max-width gap">
            <h1 className="admin-page__title">Manage Events</h1>
            <div className="events">
                {EVENTS.map((event, i) => (
                    <div className="event-wrapper" key={i} >
                        <EventCard event={event} />
                        <button className="delete-btn">Radera</button>
                    </div>
                ))}
            </div>
            
            <Link href="/admin/add" className="admin-page__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}
