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
            const newEventDate = formatDate(event.start_date);
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

            <section className="event-why">
                <h2 className="heading-size">Varför gör vi TRAINO Triathlon?</h2>
                <p>
                    Vi tror på att träning är en väg till gemenskap, styrka och glädje. TRAINO Triathlon är skapat för att inspirera människor 
                    i alla nivåer – från nybörjare till erfarna atleter – att utmana sig själva, sätta mål och ha roligt tillsammans. Vi är också 
                    trötta på de höga anmälningsavgifter som ofta följer med liknande event. Därför strävar vi efter att hålla TRAINO Triathlon prisvärt, 
                    utan att kompromissa på kvalitet, för att fler ska kunna delta och känna sig inkluderade.
                </p>
                <h2>För vem?</h2>
                <p>
                    Det här eventet är för alla som älskar att röra på sig – oavsett om du är en erfaren triathlet eller någon som vill testa något nytt. 
                    Vi välkomnar deltagare från hela landet att vara med på en oförglömlig dag fylld av träning, inspiration och gemenskap.
                </p>
                <h2>Sponsrar vi välgörenhet?</h2>
                <p>
                    Ja, vi vill ge tillbaka! En del av intäkterna från TRAINO Triathlon kommer att gå till barn och ungdomars tillgång till idrott. 
                    Genom att delta bidrar du inte bara till din egen utveckling, utan också till en större sak.
                </p>
                <h2>Vad går pengarna till?</h2>
                <article>
                    Deltagaravgifterna hjälper oss att:
                    <ul className="event-why__list">
                        <li>Arrangera ett högkvalitativt och säkert event,</li>
                        <li>Täcka kostnader för tillstånd, utrustning och bemanning.</li>
                        <li><p>Stötta välgörenhetsorganisationer och lokala projekt som gör skillnad.</p></li>
                    </ul>
                </article>
                <p>
                    Vårt mål är att erbjuda ett tillgängligt och prisvärt event som fler kan delta i. Samtidigt säkerställer vi att varje krona 
                    används effektivt för att skapa en fantastisk upplevelse för dig och bidra till välgörenhet. Observera att anmälan är 
                    bindande och att vi inte erbjuder öppet köp.
                </p>
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
            { event && !event.finished ? <section className="volunteer flex-col align-c">
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
                            <label htmlFor="phonenumber">Telefonnummer (Måste vara siffror)</label>
                            <input id="phonenumber" name="phonenumber" type="tel" minLength={6} maxLength={12} pattern="[0-9]{6,12}" required />
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
            </section> : <></> }
        </main>
    );
}
