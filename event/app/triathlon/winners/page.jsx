'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import ListToggle from "@/app/components/ListToggle";
import VideoGallery from "@/app/components/VideoGallery";

import "./page.css";

export default function WinnersPage() {
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);
    const [ winners, setWinners ] = useState([]);

    useEffect(() => {
        fetchWinners();
    }, []);

    const fetchWinners = async () => {
        const response = await fetch('/api/winners?id=1');
        if (response.status === 200) {
            const winners = await response.json();
            setWinners(winners);
        }
    }

    // Placement 0 is winner, placement 1 is silver, placement 2 is bronze
    const podiumName = (competition, placement) => {
        const winner = winners.filter(el => el.competition === competition)[placement];
        return winner ? winner.forename + " " + winner.surname[0] + "." : "";
    }

    const createList = (competition) => {
        return (
            <ul className="participants-list max-width">
                <li className="participants-list__heading box-shadow">
                    <h3>Tid</h3>
                    <div className="winners-wrapper">
                        <h3>Deltagare</h3> 
                        <h3>Stad</h3>
                    </div>
                </li>
                <li className="participants-list__heading mobile-heading box-shadow">
                    <h3>Vinnare</h3>
                </li>
                { winners.filter(winner => winner.competition === competition)
                    .map((winner, index) => 
                        <li className="participants-list__row box-shadow" key={index}>
                            <div className="list-row-wrapper">
                                <div className="participants-list__row mobile-row">Tid: </div> <p> { winner.finish_time} </p> 
                            </div>
                            
                            <div className="winners-wrapper">
                                <div className="list-row-wrapper">
                                    <div className="participants-list__row mobile-row">Deltagare: </div> <p> { winner.forename + ' ' + winner.surname } </p>
                                </div>
                                <div className="list-row-wrapper">
                                    <div className="participants-list__row mobile-row">Stad: </div> <p> { winner.city} </p>
                                </div>
                            </div>
                        </li>)
                }
            </ul>
        );
    }

    return (
        <main id="winnerspage" className="gap flex-col align-c">
            <h1 className="winners__title">Vinnare</h1>

            { winners.length > 0 ? <>
                <section className="winner-podium flex-col">
                    <h3 className="winner-podium__winner"> { isFirstTitleShown ? podiumName("Triathlon", 0) : podiumName("Olympiskt Triathlon", 0) } </h3>
                    <h3 className="winner-podium__second"> { isFirstTitleShown ? podiumName("Triathlon", 1) : podiumName("Olympiskt Triathlon", 1) } </h3>
                    <h3 className="winner-podium__third"> { isFirstTitleShown ? podiumName("Triathlon", 2) : podiumName("Olympiskt Triathlon", 2) } </h3>
                    <Image
                        className="winner-podium__image"
                        src='/winner-podium.png'
                        width={430}
                        height={242}
                        alt="Winner podium"
                    />
                </section>
            

            <ListToggle setIsFirstTitleShown={setIsFirstTitleShown} />

            { winners.length > 0 ? 
                <>
                    { isFirstTitleShown ? createList("Triathlon") : createList("Olympiskt Triathlon") }
                </>
            : <></> }

            <section className="event-video-gallery max-width flex-col align-c">
                <h2 className="event-video-gallery__title heading-size">Ögonblick Från Eventet</h2>
                <VideoGallery videos={["/videobg.mp4", "/videobg.mp4", "/videobg.mp4", "/videobg.mp4"]} />
            </section>

            </> : <></> }
        </main>
    );
}