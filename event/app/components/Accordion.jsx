'use client';

import { useState } from "react";
import "./Accordion.css";

export default function Accordion({ heading, text }) {
    const [isShowing, setIsShowing] = useState(false);

    const handleToggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <section className="accordion box-shadow max-width" onClick={handleToggle}>
            <h2 className="accordion__heading"> 
                { isShowing ? 
                    <img src='/minus-icon.png' alt="hide content icon" className="accordion__image" /> : 
                    <img src='/plus-icon.png' alt="show content icon" className="accordion__image" /> 
                } 
                {heading}
            </h2>
            { isShowing ? <p className="accordion__text"> {text} </p> : <></> }
        </section>    
    );
}
