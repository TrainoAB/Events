'use client';

import { useState } from "react";
import ListToggle from "@/app/components/ListToggle";
import ImageGallery from "@/app/components/ImageGallery";

import "./page.css";

export default function EventFinishedPage() {
    const [isFirstTitleShown, setIsFirstTitleShown] = useState(true);

    const createList = (competition) => {
        return (
            <h1> {competition} </h1>
        );
    }

    return (
        <main id="eventfinishedpage" className="gap">
            <div className="video-container gap">
                <h1 className="video-container__title">Traino Triathlon</h1>
                <h2 className="video-container__subtitle">Tävlingen Avslutad</h2>
                <div className="videocover"></div>
                <video muted autoPlay loop>
                    <source src="/videobg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <ListToggle setIsFirstTitleShown={setIsFirstTitleShown} />

            { isFirstTitleShown ? createList("triathlon") : createList("olympic") }

            <section className="event-video-gallery max-width">
                <h2 className="event-video-gallery__title">Ögonblick Från Eventet</h2>
                <ImageGallery images={["video1", "video2", "video3", "video4"]} />      {/**Should be a Video-Gallery instead*/}
            </section>
        </main>
    );
}
