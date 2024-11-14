'use client';

import { useState } from "react";
import Image from "next/image";
import ListToggle from "@/app/components/ListToggle";
import ImageGallery from "@/app/components/ImageGallery";
import "./page.css";

export default function WinnersPage() {
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);

    const winnersList = (competition) => {
        return WINNERS.filter(el => el.competition === competition);
    }

    const createList = (competition) => {
        return (
            <ul className="winners-list max-width">
                <li className="winners-list__heading box-shadow">
                    <h3>Tid</h3>
                    <div className="winners-wrapper">
                        <h3>Deltagare</h3> 
                        <h3>Stad</h3>
                    </div>
                </li>
                <li className="winners-list__heading--mobile box-shadow">
                    <h3>Vinnare</h3>
                </li>
                { winnersList(competition)
                    .map((el, index) => 
                        <li className="winners-list__row box-shadow" key={index}>
                            <p><div className="winners-list__row--mobile">Tid: </div>{ el.time}</p>
                            <div className="winners-wrapper">
                                <p><div className="winners-list__row--mobile">Deltagare: </div>{ el.name}</p> 
                                <p><div className="winners-list__row--mobile">Stad: </div>{ el.city}</p>
                            </div>
                        </li>)
                }
            </ul>
        );
    }

    return (
        <main id="winnerspage" className="gap">
            <h1 className="winners__title">Vinnare</h1>

            <section className="winner-podium">
                <h3 className="winner-podium__winner"> { isFirstTitleShown ? winnersList("triathlon")[0].name : winnersList("olympic")[0].name } </h3>
                <h3> { isFirstTitleShown ? winnersList("triathlon")[1].name : winnersList("olympic")[1].name } </h3>
                <h3 className="winner-podium__third"> { isFirstTitleShown ? winnersList("triathlon")[2].name : winnersList("olympic")[2].name } </h3>
                <Image
                    className="winner-podium__image"
                    src='/winner-podium.png'
                    width={430}
                    height={242}
                    alt="Winner podium"
                />
            </section>

            <ListToggle setIsFirstTitleShown={setIsFirstTitleShown} />

            { isFirstTitleShown ? createList("triathlon") : createList("olympic") }

            <section className="event-video-gallery max-width">
                <h2 className="event-video-gallery__title">Ögonblick Från Eventet</h2>
                <ImageGallery images={["video1", "video2", "video3", "video4"]} />      {/**Should be a Video-Gallery instead*/}
            </section>
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