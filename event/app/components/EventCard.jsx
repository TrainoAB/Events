import Link from "next/link";
import Image from "next/image";

import "./EventCard.css";

export default function EventCard({ event }) {
    return (
        <section className="event-card">
            <Link href={event.url}>
                <Image
                    className="event-card__image"
                    src={event.image}
                    width={484}
                    height={272}
                    alt="An event"
                />

                <div className="event-card__headings">
                    <h2> {event.competition} </h2>
                    <h2> {event.date} </h2>
                </div>
                
                <p> {event.description} </p>
            </Link>
        </section>
    );
}
