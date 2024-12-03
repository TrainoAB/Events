'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import ListToggle from "@/app/components/ListToggle";

import "./page.css";

export default function ParticipantsPage() {
    const [ nrParticipants, setNrParticipants ] = useState();
    const [ isFirstTitleShown, setIsFirstTitleShown ] = useState(true);
    const [ participants, setParticipants ] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        fetchParticipants();
    }, [isFirstTitleShown]);

    const fetchParticipants = async () => {
        const response = await fetch(`/api/participants?url=${pathname.split('/')[1]}`);      //TODO Change so that id is used instead of url
        if (response.status === 200) {
            const participants = await response.json();
            setParticipants(participants);
            setNrParticipants(amountParticipants(participants));
        }
    }

    const amountParticipants = (participants) => {
        return isFirstTitleShown ? participants.filter(el => el.competition === "Triathlon").length : participants.filter(el => el.competition === "Olympiskt Triathlon").length;
    }

    const participantList = (competition) => {
        return participants.filter(el => el.competition === competition);
    }

    const firstLetterUppercase = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    const createList = (competition) => {
        return (
            <ul className="participants-list max-width">
                <li className="participants-list__heading box-shadow">
                    <h3>Deltagare</h3> 
                    <h3>Stad</h3>
                </li>
                { participantList(competition)
                    .map((participant, index) => 
                        <li className="participants-list__row box-shadow" key={index}>
                            <p className="participants-list__name"> {firstLetterUppercase(participant.forename)} { firstLetterUppercase(participant.surname)} </p> 
                            <p> {firstLetterUppercase(participant.city)} </p>
                        </li>)
                }
            </ul>
        );
    }

    return (
        <main id="participantspage" className="gap flex-col align-c">
            <h1 className="participants__title">Deltagare</h1>
            <h2 className="participants-numbers">
                <div className="participants__confirmed"> {nrParticipants} </div>
                <p className="participants__total">/100</p>
            </h2>
            
            <ListToggle setIsFirstTitleShown={setIsFirstTitleShown} />

            { participants && isFirstTitleShown ? createList("Triathlon") : createList("Olympiskt Triathlon") }

            <div className="traino-funnel flex-col align-c">
                <p className="traino-funnel__text">
                    Taggad på att träna efter du sett motståndet?
                </p>
                <Link href="https://traino.nu/" className="box-shadow link-btn">
                    Träna
                </Link>
            </div>
        </main>
    );
}