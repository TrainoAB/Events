'use client';

import { useState } from "react";
import "./ListToggle.css";

export default function ListToggle({ title1, title2, setIsFirstTitleShown }) {
    const [isShowFirst, setShowFirst] = useState(true);

    const handleToggle = (event) => {
        const clickedTitle = event.target;

        if (clickedTitle.className.includes('title2') && !isShowFirst || clickedTitle.className.includes('title1') && isShowFirst) {
            return;   // If the clicked title is already active, do nothing
        }

        setIsFirstTitleShown(!isShowFirst);
        setShowFirst(!isShowFirst);
    };

    return (
        <section className="list-toggle max-width">
            <div className="list-toggle__titles">
                <h2 onClick={handleToggle} 
                    className={isShowFirst ? 'list-toggle__title1 list-toggle__title--active' : 'list-toggle__title1'}>
                    {title1}
                </h2>
                <h2 onClick={handleToggle} 
                    className={!isShowFirst ? 'list-toggle__title2 list-toggle__title--active' : 'list-toggle__title2'}>
                    {title2}
                </h2>
            </div>
        </section>
    )
}
