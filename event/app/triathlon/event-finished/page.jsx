'use client';

import { useState } from "react";
import ListToggle from "@/app/components/ListToggle";
import VideoGallery from "@/app/components/VideoGallery";
import WinnerCard from "@/app/components/WinnerCard";

import "./page.css";

export default function EventFinishedPage() {
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);

    const createList = (competition) => {
        return (
            <ul className="winners-list max-width">
                { WINNERS.filter(winner => winner.competition === competition)
                .map((winner, index) => 
                    <li key={index}>
                        <WinnerCard placement={index+1} winner={winner} />
                    </li>
                )}
            </ul>
        );
    }

    return (
        <main id="eventfinishedpage" className="gap flex-col align-c">
            <div className="video-container gap flex-col align-c">
                <h1 className="video-container__title">Traino Triathlon</h1>
                <h2 className="video-container__subtitle">Tävlingen Avslutad</h2>
                <div className="videocover"></div>
                <video muted autoPlay loop>
                    <source src="/videobg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <ListToggle setIsFirstTitleShown={setIsFirstTitleShown} />

            { isFirstTitleShown ? createList("Triathlon") : createList("Olympiskt Triathlon") }

            <section className="event-video-gallery max-width">
                <h2 className="event-video-gallery__title">Ögonblick Från Eventet</h2>
                <VideoGallery videos={["/videobg.mp4", "/videobg.mp4", "/videobg.mp4", "/videobg.mp4"]} />
            </section>
        </main>
    );
}

// Temporary Winners
const WINNERS = [
    {name: "Greger Artursson", time: "1:02:43", city: "Luleå", competition: "Olympiskt Triathlon"},
    {name: "Pelle Jöns", time: "1:02:51", city: "Stockholm", competition: "Triathlon"},
    {name: "Sonja Andersson", time: "1:02:59", city: "Växjö", competition: "Triathlon"},
    {name: "Arne Björnsson", time: "1:03:15", city: "Karlstad", competition: "Olympiskt Triathlon"},
    {name: "Karl Bengtsson", time: "1:03:56", city: "Halmstad", competition: "Triathlon"},
    {name: "Sara Viktorsson", time: "1:03:57", city: "Göteborg", competition: "Olympiskt Triathlon"}
];