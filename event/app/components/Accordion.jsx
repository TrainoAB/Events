'use client';

import { useState } from "react";
import Image from "next/image";

import "./Accordion.css";

export default function Accordion({ heading, text }) {
    const [isShowing, setIsShowing] = useState(false);

    const handleToggle = (event) => {
        setIsShowing(!isShowing);

        const panel = event.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };

    return (
        <section className="accordion box-shadow max-width">
            <h2 className="accordion__heading" onClick={handleToggle}> 
                { isShowing ? 
                    <Image 
                        src='/minus-icon.svg'
                        className="accordion__image"
                        width={32}
                        height={32}
                        alt="Hide content icon"
                    /> :
                    <Image 
                        src='/plus-icon.svg'
                        className="accordion__image"
                        width={32}
                        height={32}
                        alt="Show content icon"
                    /> 
                } 
                {heading}
            </h2>
            <div class="accordion-panel">
                <p className="accordion__text">
                    { text }
                </p>
            </div>
        </section>    
    );
}