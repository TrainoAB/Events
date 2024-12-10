'use client';

import { useState, useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { usePathname } from 'next/navigation';
import SponsorCard from "@/app/components/SponsorCard";
import { createSponsorApplication } from "@/app/actions/application";

import "./page.css";

export default function SponsorsPage() {
    const [ event, setEvent ] = useState();
    const [ sponsors, setSponsors ] = useState([]);
    const pathname = usePathname();
    const formRef = useRef();
    const [state, formAction] = useFormState(createSponsorApplication.bind(null, event?.id), { message: '', success: false });

    useEffect(() => {
        fetchEvent();
        fetchSponsors();
    }, []);

    const fetchEvent = async () => {
        const response = await fetch(`/api/event?url=${pathname.split('/')[1]}`);      //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const event = await response.json();
            setEvent(event);
        }
    }

    const fetchSponsors = async () => {
        const response = await fetch(`/api/sponsors?url=${pathname.split('/')[1]}`);
        if (response.status === 200) {
            const sponsors = await response.json();
            setSponsors(sponsors);
        }
    }

    return (
        <main id="sponsorspage" className="max-width gap flex-col align-c">
            <section className="sponsors flex-col">
                <h1 className="sponsors__title">Sponsorer</h1>
                {sponsors ? sponsors.map((sponsor, index) => (
                    <SponsorCard sponsor={sponsor} target="_blank" key={index} />
                )) : <></>}
            </section>
            <section className="sponsor-event flex-col align-c">
                <h2 className="sponsor-event__title heading-size">Sponsra Eventet</h2>
                <p className="sponsor-event__cta">
                    Fyll i er kontaktinformation så kontaktar vi er.
                </p>
                { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
                {state?.success ? formRef.current?.reset() : <></>}
            </h2> : <></> }
                { event ? <form className="sponsor-event__form" ref={formRef} action={formAction}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="phonenumber">Telefonnummer</label>
                        <input id="phonenumber" name="phonenumber" type="tel" required />
                    </div>
                    <div className="input-wrapper">
                        <input id="webpage" name="webpage" type="hidden" />
                    </div>
                    <button className="sponsor-event__submit" type="submit">
                        Skicka
                    </button>
                </form> : <></> }
            </section>
        </main>
    );
}
