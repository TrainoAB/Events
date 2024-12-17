"use client";

import { useState } from "react";
import Image from "next/image";
import plus from "../assets/plus-icon.svg";
import minus from "../assets/minus-icon.svg";

import "./Accordion.css";

export default function Accordion({ heading, text }) {
    const [isShowing, setIsShowing] = useState(false);

    const handleToggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div className="accordion" onClick={handleToggle}>
            <h2 className="accordion__heading">
                {isShowing ? (
                    <Image src={minus} className="accordion__image" width={32} height={32} alt="Hide content icon" />
                ) : (
                    <Image src={plus} className="accordion__image" width={32} height={32} alt="Show content icon" />
                )}
                {heading}
            </h2>
            <div className={isShowing ? "accordion-panel dropdown" : "accordion-panel"}>
                <p className="accordion__text">{text}</p>
            </div>
        </div>
    );
}
