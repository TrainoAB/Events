'use client';

import { useState } from "react";
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
                    <img src='/minus-icon.png' alt="hide content icon" className="accordion__image" /> : 
                    <img src='/plus-icon.png' alt="show content icon" className="accordion__image" /> 
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