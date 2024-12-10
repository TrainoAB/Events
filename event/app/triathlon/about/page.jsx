"use client";

import { useState, useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createVolunteerApplication } from "@/app/actions/application";
import { useTrainoContext } from "@/app/context/TrainoContext";
import { formatDate } from "@/app/functions/functions";
import ImageGallery from "@/app/components/ImageGallery";

import "./page.css";

// Put real location images here, src in ImageGallery will also need to be updated when
// that happens
const LOCATION_IMAGES = ["../next.svg", "../next.svg", "../next.svg", "../next.svg"];

export default function AboutPage() {
    const [event, setEvent] = useState();
    const pathname = usePathname();
    const formRef = useRef();
    const [state, formAction] = useFormState(createVolunteerApplication.bind(null, event?.id), {
        message: "",
        success: false,
    });

    const { eventDate, setEventDate } = useTrainoContext();

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = async () => {
        const response = await fetch(`/api/event?url=${pathname.split("/")[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const event = await response.json();
            setEvent(event);
            const newEventDate = formatDate(event.date);
            setEventDate(newEventDate);
        }
    };

    return (
        <main id="aboutpage" className="max-width gap flex-col align-c">
            <div className="aboutpage-titles">
                <h1>Om Eventet</h1>
                {eventDate ? <h2>{eventDate}, Stockholm</h2> : null}
            </div>
            <section className="event-info">
                <p className="event-info__description">
                    TRAINO anordnar sitt första event som går av stapeln {eventDate ? eventDate : "..."}. Ett helt
                    Triathlon, placerat i Stockholm. Det kommer även att finnas ett mini Triathlon kallat Olympiska
                    Triathlon.
                </p>
                <figure className="event-info__figure">
                    <Image
                        src={"https://picsum.photos/430/242"}
                        width={430}
                        height={242}
                        alt="Karta som visar rutten för Triathlon tävlingen"
                        className="event-info__image"
                    />
                </figure>
            </section>
            <section className="event-image-gallery flex-col align-c">
                <h2 className="event-image-gallery__title heading-size">Platsbilder</h2>
                <ImageGallery images={LOCATION_IMAGES} />
            </section>
            <div className="traino-funnel flex-col align-c">
                <p className="traino-funnel__text">Nu när du vet mer om eventet kan du börja träna inför det!</p>
                <Link href="https://traino.nu/" className=" link-btn">
                    Träna
                </Link>
            </div>
            <section className="volunteer flex-col align-c">
                <h2 className="volunteer__title heading-size">Anmäl Dig Som Volontär</h2>
                {state?.message ? (
                    <h2 className={state?.success ? "message-success" : "message-failure"}>
                        {state?.message}
                        {state?.success ? formRef.current?.reset() : <></>}
                    </h2>
                ) : (
                    <></>
                )}
                {event ? (
                    <form className="volunteer-form flex-col align-c" ref={formRef} action={formAction}>
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
                        <button className="volunteer-form__submit " type="submit">
                            Anmäl mig
                        </button>
                    </form>
                ) : (
                    <></>
                )}
            </section>
        </main>
    );
}
