'use client';

import { useState } from "react";
import { usePathname } from 'next/navigation';
import ListToggle from "@/app/components/ListToggle";
import VideoGallery from "@/app/components/VideoGallery";
import WinnerCard from "@/app/components/WinnerCard";

import "./page.css";

export default function EventFinishedPage() {
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);
    const [ winners, setWinners ] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        fetchWinners();
    }, []);

    const fetchWinners = async () => {
        const response = await fetch(`/api/winners?url=${pathname.split('/')[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const winners = await response.json();
            winners.sort((a, b) => a.result.localeCompare(b.result));
            setWinners(winners);
        }
    }

    const createList = (competition) => {
        return (
            <ul className="winners-list max-width">
                { winners.filter(winner => winner.competition === competition)
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

            { isFirstTitleShown && winners.length > 0 ? createList("Triathlon") : createList("Olympiskt Triathlon") }

            <section className="event-video-gallery max-width">
                <h2 className="event-video-gallery__title heading-size">Ögonblick Från Eventet</h2>
                <VideoGallery videos={["/videobg.mp4", "/videobg.mp4", "/videobg.mp4", "/videobg.mp4"]} />
            </section>
        </main>
    );
}