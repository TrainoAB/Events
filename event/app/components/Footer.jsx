import Link from "next/link";
import "./Footer.css";

export default function Footer() {
    return (
        <footer id="footer">
            <section className="event-links link-wrapper">
                <h3>Eventlänkar</h3>
                <Link href="/triathlon/about">Om Eventet</Link>
                <Link href="/triathlon/participants">Deltagare</Link>
                <Link href="/triathlon/winners">Vinnare</Link>
                <Link href="/triathlon/sponsors">Sponsorer</Link>
                <Link href="/triathlon/faq">FAQ</Link>
                <Link href="/triathlon/merch">Merch</Link>
                <Link href="/triathlon/rules">Regler</Link>
                <Link href="/triathlon/discounts">Rabatter</Link>
                <Link href="/triathlon/register">Registrera Mig</Link>
            </section>
            <section className="organizer link-wrapper">
                <h3>Organisatör</h3>
                <Link href="#">Traino</Link>
                <Link href="/">Alla Event</Link>
            </section>
            <section className="socials">
                <h3>Sociala Medier</h3>
                <Link href="#">Facebook</Link>
                <Link href="#">Instagram</Link>
                <Link href="#">X</Link>
                <Link href="#">LinkedIn</Link>
            </section>
            <p className="copyright">&copy; Copyright Traino</p>
        </footer>
    );
}
