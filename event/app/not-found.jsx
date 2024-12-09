'use client';

import Link from "next/link";

import "./not-found.css";

export default function NotFoundPage() {
    return (
        <main id="notfound-page" className="max-width gap flex-col align-c">
            <h1 className="notfound-page__title">Sidan kunde inte hittas</h1>
            <Link href="/triathlon" className="box-shadow link-btn">Tillbaka till Eventet</Link>
        </main>
    );
}