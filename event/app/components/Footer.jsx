"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./Footer.css";

export default function Footer({ startPage = false }) {
    const pathname = usePathname();
    const [finished, setFinished] = useState();
    const [maxParticipants, setMaxParticipants] = useState();
    const [participants, setParticipants] = useState();

    useEffect(() => {
        fetchEvent();
        fetchParticipants();
    }, []);

    const fetchEvent = async () => {
        const response = await fetch(`/api/event?url=${pathname.split("/")[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const event = await response.json();
            setFinished(event.finished);
            setMaxParticipants(event.max * 2);
        }
    };

    const fetchParticipants = async () => {
        const response = await fetch("/api/participants");
        if (response.status === 200) {
            const participants = await response.json();
            setParticipants(participants.length);
        }
    };

    return (
        <footer id="footer" className="flex-col align-c">
            <div className="footer-container max-width">
                {!startPage && (
                    <section className="event-links link-wrapper flex-col">
                        <h3 className="event-links__title">Eventlänkar</h3>
                        <div className="event-links__wrapper">
                            <Link href="/triathlon">Start</Link>
                            <Link href="/triathlon/about">Om Eventet</Link>
                            <Link href="/triathlon/participants">Deltagare</Link>

                            {finished ? <Link href="/triathlon/winners">Vinnare</Link> : <></>}

                            <Link href="/triathlon/sponsors">Sponsorer</Link>
                            <Link href="/triathlon/faq">FAQ</Link>
                            <Link href="/triathlon/merch">Merch</Link>
                            <Link href="/triathlon/rules">Regler</Link>
                            <Link href="/triathlon/discounts">Rabatter</Link>
                            {finished || participants >= maxParticipants ? (
                                <></>
                            ) : (
                                <Link href="/triathlon/register">Registrera Mig</Link>
                            )}
                        </div>
                    </section>
                )}
                <section className="organizer link-wrapper">
                    <h3>Organisatör</h3>
                    <Link href="https://traino.nu" target="_blank">
                        TRAINO
                    </Link>
                    {!startPage && <Link href="/">Alla Event</Link>}
                </section>
                <section className="socials">
                    <h3>Sociala Medier</h3>
                    <div className="socials__links-wrapper">
                        <Link
                            className="social-icon social-icon--youtube"
                            href="https://www.youtube.com/@trainoofficial"
                            target="_blank"
                        ></Link>
                        <Link
                            className="social-icon social-icon--instagram"
                            href="https://www.instagram.com/trainoofficial"
                            target="_blank"
                        ></Link>
                        <Link
                            className="social-icon social-icon--tiktok"
                            href="https://www.tiktok.com/@trainoofficial"
                            target="_blank"
                        ></Link>
                    </div>
                </section>
            </div>
            <p className="copyright">&copy; Copyright 2024 TRAINO</p>
        </footer>
    );
}
