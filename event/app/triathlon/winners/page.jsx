"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ListToggle from "@/app/components/ListToggle";
import VideoGallery from "@/app/components/VideoGallery";
import DisplayWinners from "@/app/components/DisplayWinners";

import "./page.css";

export default function WinnersPage() {
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);
    const [winners, setWinners] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        fetchWinners();
    }, []);

    const fetchWinners = async () => {
        const response = await fetch(`/api/winners?url=${pathname.split("/")[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const winners = await response.json();
            winners.sort((a, b) => a.result.localeCompare(b.result));
            setWinners(winners);
        }
    };

    const createList = (competition) => {
        return (
            <ul className="participants-list max-width">
                <li className="participants-list__heading">
                    <h3>Tid</h3>
                    <div className="winners-wrapper">
                        <h3>Deltagare</h3>
                        <h3>Från</h3>
                    </div>
                </li>
                <li className="participants-list__heading mobile-heading">
                    <h3>Vinnare</h3>
                </li>
                {winners
                    .filter((winner) => winner.competition === competition)
                    .map((winner, index) => (
                        <li className="participants-list__row" key={index}>
                            <div className="list-row-wrapper">
                                <div className="mobile-row">Tid: </div>{" "}
                                <p> {winner.result} </p>
                            </div>

                            <div className="winners-wrapper">
                                <div className="list-row-wrapper">
                                    <div className="mobile-row">
                                        Deltagare:{" "}
                                    </div>
                                    <span className="participants-list__name">
                                        {winner.forename + " " + winner.surname}
                                    </span>
                                </div>
                                <div className="list-row-wrapper">
                                    <div className="mobile-row">Från: </div>{" "}
                                    {winner.city}
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        );
    };

    return (
        <main id="winnerspage" className="gap flex-col align-c">
            <h1 className="winners__title">Vinnare</h1>

            {winners.length > 0 ? (
                <>
                    {isFirstTitleShown ? (
                        <DisplayWinners competition={"Triathlon"} />
                    ) : (
                        <DisplayWinners competition={"Olympiskt Triathlon"} />
                    )}

                    <ListToggle setIsFirstTitleShown={setIsFirstTitleShown} />

                    {winners.length > 0 ? (
                        <>
                            {isFirstTitleShown
                                ? createList("Triathlon")
                                : createList("Olympiskt Triathlon")}
                        </>
                    ) : (
                        <></>
                    )}

                    <section className="event-video-gallery max-width flex-col align-c">
                        <h2 className="event-video-gallery__title heading-size">
                            Ögonblick Från Eventet
                        </h2>
                        <VideoGallery
                            videos={[
                                "/videobg.mp4",
                                "/videobg.mp4",
                                "/videobg.mp4",
                                "/videobg.mp4",
                            ]}
                        />
                    </section>
                </>
            ) : (
                <></>
            )}
        </main>
    );
}
