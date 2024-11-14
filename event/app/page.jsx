import Image from "next/image";
import "./page.css";
import EventCard from "./components/EventCard";

export default function Home() {

    // Temporary Events
    const EVENTS = [
        {url: "/triathlon", image: "https://picsum.photos/484/272", date: "16 Aug. 2024", competition: "Triathlon", description: "Stockholm. Även ett mini olympiskt triathlon."},
        {url: "#", image: "https://picsum.photos/484/272", date: "N/A", competition: "E-Sport Challenge", description: "Detta event planeras fortfarande."}
    ];

    return (
        <main id="alleventspage">
            <Image
                className="alleventspage__logo"
                src="/logo.svg"
                alt="Traino Logo"
                width={700}
                height={200}
                priority
            />

            <section className="alleventspage__events">
                { EVENTS.map(event => <EventCard event={event} />) }
            </section>
        </main>
    );
}
