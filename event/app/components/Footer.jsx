import Link from "next/link";

import "./Footer.css";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-container max-width">
                <section className="event-links link-wrapper">
                    <h3 className="event-links__title">Eventlänkar</h3>
                    <div className="event-links__wrapper">
                        <Link href="/triathlon">Start</Link>
                        <Link href="/triathlon/about">Om Eventet</Link>
                        <Link href="/triathlon/participants">Deltagare</Link>
                        <Link href="/triathlon/winners">Vinnare</Link>
                        <Link href="/triathlon/sponsors">Sponsorer</Link>
                        <Link href="/triathlon/faq">FAQ</Link>
                        <Link href="/triathlon/merch">Merch</Link>
                        <Link href="/triathlon/rules">Regler</Link>
                        <Link href="/triathlon/discounts">Rabatter</Link>
                        <Link href="/triathlon/register">Registrera Mig</Link>
                    </div>
                </section>
                <section className="organizer link-wrapper">
                    <h3>Organisatör</h3>
                    <Link href="#">Traino</Link>
                    <Link href="/">Alla Event</Link>
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
            <p className="copyright">&copy; Copyright Traino</p>
        </footer>
    );
}
