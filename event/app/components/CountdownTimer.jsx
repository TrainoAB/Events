"use client";

import { useEffect, useRef, useState } from "react";

import "./CountdownTimer.css";

// Calculate the days, hrs, mins, secs remaining until the event starts
const calcTimeRemaining = (date) => {
    // Get the time remaining in milliseconds
    const eventDate = new Date(date);
    const currentDate = new Date();
    const remainingMs = eventDate - currentDate;

    // If event has already started/happened
    if (remainingMs <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Store amount of ms in each time unit
    const msSecond = 1000;
    const msMinute = msSecond * 60;
    const msHour = msMinute * 60;
    const msDay = msHour * 24;

    // Calculate days remaining
    const days = Math.floor(remainingMs / msDay);

    // Calculate hours remaining
    const hours = Math.floor((remainingMs % msDay) / msHour);

    // Calculate minutes remaining
    const minutes = Math.floor((remainingMs % msHour) / msMinute);

    // Calculate seconds remaining
    const seconds = Math.floor((remainingMs % msMinute) / msSecond);

    return { days, hours, minutes, seconds };
};

export default function CountdownTimer({ dateInput }) {
    const [timeRemaining, setTimeRemaining] = useState(calcTimeRemaining(dateInput));

    // Create a ref to store the intervalId
    const intervalIdRef = useRef(null);

    const isEventStarted =
        timeRemaining.days === 0 &&
        timeRemaining.hours === 0 &&
        timeRemaining.minutes === 0 &&
        timeRemaining.seconds === 0;

    useEffect(() => {
        // Update the timer
        const updateTimer = () => {
            setTimeRemaining(calcTimeRemaining(dateInput));
        };

        // Set timer to update once per second
        intervalIdRef.current = setInterval(updateTimer, 1000);

        // Ensure correct time shows right away
        updateTimer();

        // Cleanup the intervalId when unmounting or dateInput changes
        return () => clearInterval(intervalIdRef.current);
    }, [dateInput]);

    // Add zero(s) to the start of a number
    const zeroPaddingStart = (num, padding = 2) => {
        return num.toString().padStart(padding, "0");
    };

    // Check if the event has started
    if (isEventStarted) {
        return (
            <h2 className="countdown-timer b-radius box-shadow event-started border-glow">
                Eventet har startat
            </h2>
        );
    }

    return (
        <div className="countdown-timer b-radius box-shadow flex-col align-c">
            <div className="timer-wrapper">
                <div className="countdown-time countdown-time--days">
                    <strong className="countdown-time__number" suppressHydrationWarning>
                        {zeroPaddingStart(timeRemaining.days)}
                    </strong>
                    <span className="countdown-time__type">Dagar</span>
                </div>
                <div className="countdown-time countdown-time--hours">
                    <strong className="countdown-time__number" suppressHydrationWarning>
                        {zeroPaddingStart(timeRemaining.hours)}
                    </strong>
                    <span className="countdown-time__type">Timmar</span>
                </div>
                <div className="countdown-time countdown-time--minutes">
                    <strong className="countdown-time__number" suppressHydrationWarning>
                        {zeroPaddingStart(timeRemaining.minutes)}
                    </strong>
                    <span className="countdown-time__type">Minuter</span>
                </div>
                <div className="countdown-time countdown-time--seconds">
                    <strong className="countdown-time__number" suppressHydrationWarning>
                        {zeroPaddingStart(timeRemaining.seconds)}
                    </strong>
                    <span className="countdown-time__type">Sekunder</span>
                </div>
            </div>
            <p className="countdown-timer__text">Tid kvar tills eventet börjar</p>
        </div>
    );
}
