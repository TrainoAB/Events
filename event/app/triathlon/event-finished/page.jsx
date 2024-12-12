'use client';

import { useState } from "react";
import ListToggle from "@/app/components/ListToggle";
import VideoGallery from "@/app/components/VideoGallery";
import DisplayWinners from "@/app/components/DisplayWinners";

import "./page.css";

export default function EventFinishedPage() {
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);

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

            { isFirstTitleShown ? <DisplayWinners competition={"Triathlon"} /> : <DisplayWinners competition={"Olympiskt Triathlon"} /> }

            <section className="event-video-gallery max-width">
                <h2 className="event-video-gallery__title heading-size">Ögonblick Från Eventet</h2>
                <VideoGallery videos={["/videobg.mp4", "/videobg.mp4", "/videobg.mp4", "/videobg.mp4"]} />
            </section>
        </main>
    );
}