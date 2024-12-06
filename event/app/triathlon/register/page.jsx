'use client';

import { useState, useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { usePathname } from 'next/navigation';
import { createParticipant } from "@/app/actions/participant";

import "./page.css";

export default function RegisterPage() {
    const [ participants, setParticipants ] = useState([]);
    const [ maxParticipants, setMaxParticipants ] = useState();
    const [state, formAction] = useFormState(createParticipant, { message: '', success: false });
    const formRef = useRef();
    const pathname = usePathname();

    useEffect(() => {
        fetchParticipants();
        fetchEvent();
    }, []);

    const fetchParticipants = async () => {
        const response = await fetch('/api/participants');
        if (response.status === 200) {
            const participants = await response.json();
            setParticipants(participants);
        }
    }

    const fetchEvent = async () => {
        const response = await fetch(`/api/event?url=${pathname.split('/')[1]}`);      //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const event = await response.json();
            setMaxParticipants(event.max);
        }
    }

    const isMaxParticipants = (competition) => {
        return participants.filter(el => el.competition === competition).length >= maxParticipants;
    }

    return (
        <main id="registerpage" className="max-width gap flex-col align-c">
            <h1 className="register-title">Registrera</h1>
            { state?.message ? <h2 className={state?.success ? "register-page__message-success" : "register-page__message-failure"}>
                {state?.message}
                {state?.message ? formRef.current?.reset() : <></>}
            </h2> : <></> }

            <form className="register-form flex-col" ref={formRef} action={formAction}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="forename">Förnamn</label>
                    <input id="forename" name="forename" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="surname">Efternamn</label>
                    <input id="surname" name="surname" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="age">Ålder</label>
                    <input id="age" name="age" type="text" required />
                </div>
                <div className="input-wrapper input-wrapper--radio">
                    <span className="gender-label">Kön</span>
                    <label className="radio-wrapper" htmlFor="man">
                        <input id="man" name="gender" type="radio" value="male" required />
                        <div className="radio-btn"></div>
                        <span className="radio-label">Man</span>
                    </label>
                    <label className="radio-wrapper" htmlFor="woman">
                        <input id="woman" name="gender" type="radio" value="female" />
                        <div className="radio-btn"></div>
                        <span>Kvinna</span>
                    </label>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="phonenumber">Telefonnummer</label>
                    <input id="phonenumber" name="phonenumber" type="tel" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="city">Stad</label>
                    <input id="city" name="city" type="text" required />
                </div>
                <div className="input-wrapper input-wrapper--radio">
                    <span className="gender-label">Tävling</span>
                    <label className={isMaxParticipants("Triathlon") ? "radio-wrapper disabled" : "radio-wrapper"} htmlFor="triathlon">
                        <input
                            id="triathlon"
                            name="competition"
                            type="radio"
                            value="Triathlon"
                            disabled={isMaxParticipants("Triathlon")}
                            required
                        />
                        <div className="radio-btn"></div>
                        <span>Triathlon</span>
                    </label>
                    <label className={isMaxParticipants("Olympiskt Triathlon") ? "radio-wrapper disabled" : "radio-wrapper"} htmlFor="olympic-triathlon">
                        <input
                            id="olympic-triathlon"
                            name="competition"
                            type="radio"
                            disabled={isMaxParticipants("Olympiskt Triathlon")}
                            value="Olympiskt Triathlon"
                        />
                        <div className="radio-btn"></div>
                        <span>Olympiskt Triathlon</span>
                    </label>
                </div>
                <button className="register-form__submit">
                    Registrera mig
                </button>
            </form>
        </main>
    );
}
