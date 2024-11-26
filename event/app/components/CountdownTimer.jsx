"use client";

import { useEffect, useRef, useState } from "react";

import "./CountdownTimer.css";

// Calculate the days, hrs, mins remaining until the event starts
const calcTimeRemaining = (date) => {
    // Get the time remaining in milliseconds
    const eventDate = new Date(date);
    const currentDate = new Date();
    const remainingMs = eventDate - currentDate;

    // If event has already started/happened
    if (remainingMs <= 0) {
        return { days: 0, hours: 0, minutes: 0 };
    }

    // Store amount of ms in each time unit
    const msMinute = 1000 * 60;
    const msHour = msMinute * 60;
    const msDay = msHour * 24;

    // Calculate days remaining
    const days = Math.floor(remainingMs / msDay);

    // Calculate hours remaining
    const hours = Math.floor((remainingMs % msDay) / msHour);

    // Calculate minutes remaining
    const minutes = Math.floor((remainingMs % msHour) / msMinute);

    return { days, hours, minutes };
};

export default function CountdownTimer({ dateInput }) {
    const [timeRemaining, setTimeRemaining] = useState(calcTimeRemaining(dateInput));

    // Create a ref to store the timeoutId
    const timeoutIdRef = useRef(null);

    // Update the timer once a minute
    useEffect(() => {
        const updateTimer = () => {
            // Update the time remaining
            setTimeRemaining(calcTimeRemaining(dateInput));

            // Calculate the amount of seconds left of the current minute
            const now = new Date();

            // Subtract elapsed ms from current minute, to avoid timer desync
            const msUntilNextMinute = (60 * 1000) - (now.getSeconds() * 1000 + now.getMilliseconds());

            // Store the timeout id and update the timer based on the delay until the next minute
            timeoutIdRef.current = setTimeout(updateTimer, msUntilNextMinute);
        };

        updateTimer();

        return () => clearTimeout(timeoutIdRef.current);
    }, [dateInput]);

    return (
        <div className="countdown-timer b-radius box-shadow flex-col align-c">
            <div className="timer-wrapper">
                <div className="countdown-time countdown-time--days">
                    <strong className="countdown-time__number">{timeRemaining.days}</strong>
                    <span className="countdown-time__type">Dagar</span>
                </div>
                <div className="countdown-time countdown-time--hours">
                    <strong className="countdown-time__number">{timeRemaining.hours}</strong>
                    <span className="countdown-time__type">Timmar</span>
                </div>
                <div className="countdown-time countdown-time--minutes">
                    <strong className="countdown-time__number">{timeRemaining.minutes}</strong>
                    <span className="countdown-time__type">Minuter</span>
                </div>
            </div>
            <p className="countdown-timer__text">Tid kvar tills eventet börjar</p>
        </div>
    );
}
