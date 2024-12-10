"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "../components/CountdownTimer";
import ProductCard from "../components/ProductCard";
import RegisteredParticipants from "../components/RegisteredParticipants";

import "./page.css";

const SPONSORS = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
];

export default function TriathlonPage() {
    const [participants, setParticipants] = useState([]);
    const [event, setEvent] = useState();
    const pathname = usePathname();

    useEffect(() => {
        fetchParticipants();
        fetchEvent();
    }, []);

    const fetchParticipants = async () => {
        const response = await fetch("/api/participants");
        if (response.status === 200) {
            const participants = await response.json();
            setParticipants(participants);
        }
    };

    const fetchEvent = async () => {
        const response = await fetch(`/api/event?url=${pathname.split("/")[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const event = await response.json();
            setEvent(event);
        }
    };

    return (
        <>
            <main id="eventpage" className="gap flex-col align-c">
                <div className="video-container flex-col align-c">
                    <h1 className="video-container__title">Traino Triathlon</h1>

                    {
                        // TODO Participants are not separated by competition.
                    }
                    {event ? <CountdownTimer dateInput={event.date + " " + event.time} /> : <></>}
                    <h2 className="video-container__subtitle">16 Aug 2025, Stockholm</h2>
                    <div className="videocover"></div>
                    <video muted autoPlay loop>
                        <source src="/videobg.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="info-container max-width gap flex-col align-c">
                    {participants && event ? (
                        <RegisteredParticipants registered={participants.length} total={event.max * 2} />
                    ) : (
                        <></>
                    )}

                    <section className="event-about">
                        <h2 className="event-about__title heading-size">Om Eventet</h2>
                        <div className="event-about__info-wrapper flex-col">
                            <p className="event-about__text">
                                Traino anordnar sitt första event som går av stapeln lördagen den 16:e augusti 2025.
                            </p>
                            <Link className="event-about__link link-btn" href={"triathlon/about"}>
                                Läs mer
                            </Link>
                        </div>
                        <figure className="event-about__figure">
                            <Image
                                src={"https://picsum.photos/430/242"}
                                width={430}
                                height={242}
                                alt="Karta som visar rutten för Triathlon tävlingen"
                                className="event-about__image"
                            />
                        </figure>
                    </section>
                    <section className="event-sponsors flex-col align-c">
                        <h2 className="event-sponsors__title heading-size">Sponsorer</h2>
                        <figure className="event-sponsors__figure">
                            {SPONSORS.map((sponsor) => (
                                <Image
                                    className="event-sponsors__img"
                                    src={sponsor}
                                    width={200}
                                    height={200}
                                    alt="Sponsor image"
                                    key={sponsor}
                                />
                            ))}
                        </figure>
                    </section>
                    <section className="traino-funnel flex-col align-c">
                        <p className="traino-funnel__cta">Sugen på att delta? Förbered inför eventet.</p>
                        <Link className="link-btn" href={"https://traino.nu/"}>
                            Träna
                        </Link>
                    </section>
                    <section className="featured-product flex-col align-c">
                        <h2 className="featured-product__title heading-size">Utvald Produkt</h2>
                        <ProductCard
                            image={"/white-tshirt.png"}
                            url={
                                "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-Color-by-TRAINO/165255437.WFLAH"
                            }
                        />
                        <Link className="link-btn" href={"http://traino.redbubble.com"}>
                            Visa fler
                        </Link>
                    </section>
                </div>
            </main>
        </>
    );
}
