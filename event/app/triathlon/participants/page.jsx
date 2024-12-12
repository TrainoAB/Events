"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ListToggle from "@/app/components/ListToggle";
import TrainoFunnel from "@/app/components/TrainoFunnel";
import RegisteredParticipants from "@/app/components/RegisteredParticipants";

import "./page.css";

export default function ParticipantsPage() {
    const [nrParticipants, setNrParticipants] = useState();
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);
    const [participants, setParticipants] = useState([]);
    const [maxParticipants, setMaxParticipants] = useState();
    const pathname = usePathname();

    useEffect(() => {
        fetchEvent();
        fetchParticipants();
    }, [isFirstTitleShown]);

    const fetchParticipants = async () => {
        const response = await fetch(`/api/participants?url=${pathname.split("/")[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const participants = await response.json();
            setParticipants(participants);
            setNrParticipants(amountParticipants(participants));
        }
    };

    const fetchEvent = async () => {
        const response = await fetch(`/api/event?url=${pathname.split("/")[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const event = await response.json();
            setMaxParticipants(event.max_participants);
        }
    };

    const amountParticipants = (participants) => {
        return isFirstTitleShown
            ? participants.filter((el) => el.competition === "Triathlon").length
            : participants.filter((el) => el.competition === "Olympiskt Triathlon").length;
    };

    const participantList = (competition) => {
        return participants.filter((el) => el.competition === competition);
    };

    const firstLetterUppercase = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const createList = (competition) => {
        return (
            <ul className="participants-list max-width">
                <li className="participants-list__heading ">
                    <h3>Deltagare</h3>
                    <h3>Från</h3>
                </li>
                {participantList(competition).map((participant, index) => (
                    <li className="participants-list__row " key={index}>
                        <p className="participants-list__name">
                            {firstLetterUppercase(participant.forename)} {firstLetterUppercase(participant.surname)}{" "}
                        </p>
                        <p> {firstLetterUppercase(participant.city)} </p>
                    </li>
                ))}
            </ul>
        );
    };

    // MARK: Markup
    return (
        <main id="participantspage" className="gap flex-col align-c">
            <h1 className="participants__title">Deltagare</h1>

            <div className="info-container max-width gap flex-col align-c">
                    {maxParticipants ? (
                        <RegisteredParticipants registered={participants.length} total={maxParticipants * 2} />
                    ) : (
                        <></>
                    )}
            </div>

            <ListToggle setIsFirstTitleShown={setIsFirstTitleShown} />

            <h2 className="participants-numbers">
                <div className="participants__confirmed"> {nrParticipants} </div>
                <p className="participants__total">/{maxParticipants}</p>
            </h2>

            {participants && isFirstTitleShown ? createList("Triathlon") : createList("Olympiskt Triathlon")}

            <TrainoFunnel />
        </main>
    );
}
