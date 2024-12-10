import Link from "next/link";
import Image from "next/image";

import "./EventCard.css";

export default function EventCard({ event }) {
    return (
        <section className="event-card flex-col">
            <Link href={event.url}>
                <figure className="event-card__figure">
                    <Image className="event-card__image" src={event.image} width={484} height={272} alt="An event" />
                </figure>

                <div className="event-info">
                    <div className="event-card__headings">
                        <h2>{event.competition}</h2>
                        <h3 className="date">{event.start_date}</h3>
                    </div>

                    <p>{event.description}</p>
                </div>
            </Link>
        </section>
    );
}
