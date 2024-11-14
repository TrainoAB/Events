'use client';

import { useState } from "react";
import "./ListToggle.css";

/**
 * setIsFirstTitleShown is a function taking a boolean as a parameter. This function is
 * used to inform a parent about which title is toggled.
 */
export default function ListToggle({ title1 = "Triathlon", title2 = "Olympiskt triathlon", setIsFirstTitleShown }) {
    const [isShowFirst, setShowFirst] = useState(true);

    const handleToggle = () => {
        setIsFirstTitleShown(!isShowFirst);
        setShowFirst(!isShowFirst);
    };

    return (
        <section className="list-toggle max-width">
            <div className="list-toggle__titles">
                <button onClick={handleToggle}
                        disabled={isShowFirst}
                        className='list-toggle__title'>
                    {title1}
                </button>
                <button onClick={handleToggle} 
                        disabled={!isShowFirst}
                        className='list-toggle__title'>
                    {title2}
                </button>
            </div>
        </section>
    )
}
