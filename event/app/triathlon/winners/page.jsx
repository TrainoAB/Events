'use client';

import { useState } from "react";
import ListToggle from "@/app/components/ListToggle";
import "./page.css";

export default function WinnersPage() {
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);

    const winnersList = (competition) => {
        return WINNERS.filter(el => el.competition === competition);
    }

    const createList = (competition) => {
        return (
            <ul className="participants-list max-width">
                <li className="participants-list__heading box-shadow">
                    <h3 className="participants-list__heading-participants">Deltagare</h3> 
                    <h3 className="participants-list__heading-city">Stad</h3>
                </li>
                { winnersList(competition)
                    .map((el, index) => <li className="participants-list__row box-shadow" key={index}>
                                            <p className="participants-list__name">{el.name}</p> 
                                            <p className="participants-list__city">{el.city}</p>
                                        </li>)
                }
            </ul>
        );
    }

    return (
        <main id="winnerspage" className="gap">
            <h1 className="winners__title">Vinnare</h1>
            <ListToggle setIsFirstTitleShown={setIsFirstTitleShown} />

            { isFirstTitleShown ? createList("triathlon") : createList("olympic") }
        </main>
    );
}

    // Temporary Winners
    const WINNERS = [
        {name: "Greger Artursson", time: "1:02:43", city: "Luleå", competition: "olympic"},
        {name: "Pelle Jöns", time: "1:02:51", city: "Stockholm", competition: "triathlon"},
        {name: "Sonja Andersson", time: "1:02:59", city: "Växjö", competition: "triathlon"},
        {name: "Arne Björnsson", time: "1:03:15", city: "Karlstad", competition: "olympic"},
        {name: "Karl Bengtsson", time: "1:03:56", city: "Halmstad", competition: "triathlon"},
        {name: "Sara Viktorsson", time: "1:03:57", city: "Göteborg", competition: "olympic"},
        {name: "Jane Doe", time: "1:04:00", city: "Stockholm", competition: "triathlon"},
        {name: "John Doe", time: "1:04:01", city: "Uppsala", competition: "triathlon"},
        {name: "Göran Petterson", time: "1:04:23", city: "Malmö", competition: "olympic"},
        {name: "Lisa Tjäderstig", time: "1:04:41", city: "Jönköping", competition: "olympic"}
    ];