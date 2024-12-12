"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import WinnerCard from "@/app/components/WinnerCard";

import "./DisplayWinners.css";

export default function DisplayWinners({ competition }) {
    const [winners, setWinners] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        fetchWinners();
    }, []);

    const fetchWinners = async () => {
        const response = await fetch(`/api/winners?url=${pathname.split("/")[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const winners = await response.json();
            winners.sort((a, b) => a.result.localeCompare(b.result));
            const triathlon = winners
                .filter((winner) => winner.competition === "Triathlon")
                .slice(0, 3);
            const olympic = winners
                .filter((winner) => winner.competition === "Olympiskt Triathlon")
                .slice(0, 3);
            setWinners([...triathlon, ...olympic]);
        }
    };

    return (
        <>
            {winners.length > 0 ? (
                <ul className="display-winners max-width">
                    {winners
                        .filter((winner) => winner.competition === competition)
                        .map((winner, index) => (
                            <li key={index}>
                                <WinnerCard placement={index + 1} winner={winner} />
                            </li>
                        ))}
                </ul>
            ) : (
                <></>
            )}
        </>
    );
}
