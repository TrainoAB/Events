"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./Footer.css";

export default function FooterMain() {
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
                <section className="organizer link-wrapper">
                    <h3>Organisatör</h3>
                    <Link href="https://traino.nu" target="_blank">
                        Traino
                    </Link>
                </section>
                <section className="socials">
                    <h3>Sociala Medier</h3>
                    <div className="socials__links-wrapper">
                        <Link className="social-icon social-icon--facebook" href="#"></Link>
                        <Link className="social-icon social-icon--instagram" href="#"></Link>
                        <Link className="social-icon social-icon--twitter-x" href="#"></Link>
                        <Link className="social-icon social-icon--linkedin" href="#"></Link>
                    </div>
                </section>
            </div>
            <p className="copyright">&copy; Copyright 2024 Traino</p>
        </footer>
    );
}
