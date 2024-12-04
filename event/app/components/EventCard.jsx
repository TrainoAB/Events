import Link from "next/link";
import Image from "next/image";

import "./EventCard.css";

export default function EventCard({ event }) {
    return (
        <section className="event-card flex-col">
            <Link href={event.finished ? event.url + "/event-finished" : event.url}>
                <figure className="event-card__figure">
                    <Image
                        className="event-card__image"
                        src={event.image}
                        width={484}
                        height={272}
                        alt="An event"
                    />
                </figure>

                <div className="event-card__headings">
                    <h2> {event.competition} </h2>
                    <h2> {event.date} </h2>
                </div>

                <p> {event.description} </p>
            </Link>
        </section>
    );
}
