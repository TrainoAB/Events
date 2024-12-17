"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { formatDate } from "@/app/functions/functions";
import { useTrainoContext } from "../context/TrainoContext";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "../components/CountdownTimer";
import ProductCard from "../components/ProductCard";
import RegisteredParticipants from "../components/RegisteredParticipants";
import TrainoFunnel from "../components/TrainoFunnel";

import "./page.css";

export default function TriathlonPage() {
    const [participants, setParticipants] = useState([]);
    const [event, setEvent] = useState();
    const [ sponsors, setSponsors ] = useState();
    const pathname = usePathname();

    const { eventDate, setEventDate } = useTrainoContext();

    useEffect(() => {
        fetchParticipants();
        fetchEvent();
        fetchSponsors();
    }, []);

    const fetchParticipants = async () => {
        const response = await fetch(`/api/participants?url=${pathname.split("/")[1]}`);
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
            const newEventDate = formatDate(event.start_date);
            setEventDate(newEventDate);
        }
    };

    const fetchSponsors = async () => {
        const response = await fetch(`/api/sponsors?url=${pathname.split("/")[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const sponsors = await response.json();
            setSponsors(sponsors.filter(sponsor => sponsor.prioritized === true));
        }
    }

    return (
        <>
            <main id="eventpage" className="gap flex-col align-c">
                <div className="video-container flex-col align-c">
                    <h1 className="video-container__title">Traino Triathlon</h1>

                    {
                        // TODO Participants are not separated by competition.
                    }
                    {event ? (
                        <>
                            <CountdownTimer dateInput={event.start_date + " " + event.start_time} />
                            <h2 className="video-container__subtitle">{eventDate}, Stockholm</h2>
                        </>
                    ) : (
                        <></>
                    )}

                    <div className="videocover"></div>
                    <video muted autoPlay loop>
                        <source src="/videobg.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="info-container max-width gap flex-col align-c">
                    {participants && event ? (
                        <RegisteredParticipants registered={participants.length} total={event.max_participants} registerLink={"triathlon/register"} />
                    ) : (
                        <></>
                    )}

                    <section className="event-about">
                        <div className="event-about__info-wrapper flex-col">
                            <h2 className="event-about__title heading-size">TRAINO Triathlon</h2>
                            <p className="event-about__text">
                                Är ett spännande triathlon-event baserat i hjärtat av Stockholm, Sverige. Tävlingen
                                erbjuder en utmaning för alla med ett huvudtriathlon samt ett olympiskt triathlon – en
                                något lättare variant för de som vill prova på sporten.{" "}
                            </p>
                            <p className="event-about__text">
                                Evenemanget syftar till att främja hälsa och välbefinnande bland det svenska folket och
                                lockar deltagare från alla nivåer. Missa inte chansen att delta i detta inspirerande
                                evenemang som kombinerar motion, gemenskap och Stockholms fantastiska natur!
                            </p>
                            <Link className="event-about__link link-btn" href={"triathlon/about"}>
                                Läs mer
                            </Link>
                        </div>
                        <figure className="event-about__figure">
                            <Image
                                src={"https://picsum.photos/1602/1206"}
                                width={1600}
                                height={1200}
                                alt="Bild över eventets plats"
                                className="event-about__image"
                            />
                        </figure>
                    </section>
                    <section className="event-sponsors flex-col align-c">
                        <h2 className="event-sponsors__title heading-size">Sponsorer</h2>
                        <figure className="event-sponsors__figure">
                            {sponsors ? sponsors.map((sponsor) => (
                                <Image
                                    className="event-sponsors__img"
                                    src={sponsor.image}
                                    width={200}
                                    height={200}
                                    alt="Sponsor image"
                                    key={sponsor.id}
                                />
                            )) : <></>}
                        </figure>
                    </section>
                    <TrainoFunnel />
                    <section className="featured-product flex-col align-c">
                        <div className="featured-product__wrapper">
                            <div className="product-card-wrapper">
                                <ProductCard
                                    image={"/white-tshirt.png"}
                                    url={
                                        "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-Color-by-TRAINO/165255437.WFLAH"
                                    }
                                />
                            </div>
                            <div className="merch-text-wrapper">
                                <h2 className="featured-product__title heading-size">
                                    Stöd TRAINO Triathlon med vår exklusiva merch!
                                </h2>
                                <p>
                                    Visa ditt engagemang för hälsa, sport och gemenskap genom att bära Traino Triathlons
                                    officiella merch! När du köper våra utvalda produkter sponsrar du inte bara eventet
                                    – du hjälper också till att göra det möjligt för fler att delta och uppleva glädjen
                                    i triathlon.
                                </p>
                                <p>
                                    En del av intäkterna går dessutom till välgörenhet för att stödja initiativ som
                                    främjar hälsa och aktiv livsstil i Sverige. Genom ditt stöd bidrar du till att göra
                                    skillnad både på och utanför banan.
                                </p>
                                <p>
                                    Köp din merch idag och hjälp Traino Triathlon att bli ännu bättre – tillsammans
                                    skapar vi något stort!
                                </p>
                                <Link className="link-btn" href={"http://traino.redbubble.com"} target="_blank">
                                    Visa fler produkter
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
