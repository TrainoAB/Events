"use client";

import { useEffect, useState } from "react";
import ListToggle from "@/app/components/ListToggle";

import "./page.css";

export default function ManageParticipantsPage({ params }) {
    const [listToggle, setListToggle] = useState(true);
    const [ participants, setParticipants ] = useState([]);

    useEffect(() => {
        fetchParticipants();
    }, []);

    const fetchParticipants = async () => {
        const response = await fetch(`/api/participants?id=${params.id}`);
        if (response.status === 200) {
            const participants = await response.json();
            setParticipants(participants);
        }
    };

    const handleSetList = () => {
        setListToggle(!listToggle);
    };

    const ParticipantsList = (participants) => {
        const { list } = participants;
        if (list.length === 0) {
            return <p>Ingen har registrerat intresse för tillfället.</p>;
        }

        return (
            <ul className="participants-list max-width">
                <li className="participants-list__headings b-radius">
                    <h3>Namn</h3>
                    <h3>Email</h3>
                    <h3>Telefon</h3>
                </li>
                {list.map((item) => (
                    <li className="participants-item b-radius" key={item.email}>
                        <div className="list-row-wrapper">
                            <div className="mobile-row">Namn: </div>
                            <p className="participants-item__name">{item.forename + ' ' + item.surname}</p>
                        </div>

                        <div className="participants-wrapper">
                            <div className="list-row-wrapper">
                                <div className="mobile-row"> Email: </div>
                                <p className="participants-item__email">{item.email}</p>
                            </div>
                            <div className="list-row-wrapper">
                                <div className="mobile-row">Telefon: </div>
                                <p className="participants-item__phone">{item.phone}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <main id="participants-page" className="flex-col align-c">
            <h1 className="participants-page__title">Deltagare</h1>

            <ListToggle setIsFirstTitleShown={handleSetList} />

            {listToggle && participants ? (
                <ParticipantsList list={participants.filter(participant => participant.competition === 'Triathlon')} />
            ) : (
                <ParticipantsList list={participants.filter(participant => participant.competition === 'Olympiskt Triathlon')} />
            )}
        </main>
    );
}
