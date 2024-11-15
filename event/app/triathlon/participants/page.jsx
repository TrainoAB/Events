'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import ListToggle from "@/app/components/ListToggle";
import "./page.css";

export default function ParticipantsPage() {
    const [nrParticipants, setNrParticipants] = useState();
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);

    useEffect(() => {
        setNrParticipants(isFirstTitleShown ? amountParticipants('triathlon') : amountParticipants('olympic'));
    });

    const amountParticipants = (competition) => {
        return participantList(competition).length;
    }

    const participantList = (competition) => {
        return PARTICIPANTS.filter(el => el.competition === competition);
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
                            <p className="participants-list__name"> {participant.name} </p> 
                            <p> {participant.city} </p>
                        </li>)
                }
            </ul>
        );
    }

    return (
        <main id="participantspage" className="gap">
            <h1 className="participants__title">Deltagare</h1>
            <h2 className="participants-numbers">
                <div className="participants__confirmed"> {nrParticipants} </div>
                <p className="participants__total">/100</p>
            </h2>
            <ListToggle setIsFirstTitleShown={setIsFirstTitleShown} />

            { isFirstTitleShown ? createList("triathlon") : createList("olympic") }

            <div className="traino-funnel">
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

// Temporary Participants
const PARTICIPANTS = [
    {name: "Greger Artursson", city: "Luleå", competition: "olympic"},
    {name: "Pelle Jöns", city: "Stockholm", competition: "olympic"},
    {name: "Sonja Andersson", city: "Växjö", competition: "triathlon"},
    {name: "Arne Björnsson", city: "Karlstad", competition: "olympic"},
    {name: "Karl Bengtsson", city: "Halmstad", competition: "triathlon"},
    {name: "Sara Viktorsson", city: "Göteborg", competition: "olympic"},
    {name: "Jane Doe", city: "Stockholm", competition: "triathlon"},
    {name: "John Doe", city: "Uppsala", competition: "triathlon"},
    {name: "Göran Petterson", city: "Malmö", competition: "olympic"},
    {name: "Lisa Tjäderstig", city: "Jönköping", competition: "olympic"}
];