"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import "./Header.css";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();
    const [finished, setFinished] = useState();

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = async () => {
        const response = await fetch(`/api/event?url=${pathname.split("/")[1]}`); //TODO Retrieve the event ID some other way
        if (response.status === 200) {
            const event = await response.json();
            setFinished(event.finished);
        }
    };

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header id="header">
            <nav className="header-nav">
                <Link className="logo" href="/triathlon"></Link>

                <ul className={showMenu ? `header-list showmenu` : "header-list"} onClick={handleShowMenu}>
                    {finished ? (
                        <li
                            className={`${
                                pathname === "/triathlon/event-finished"
                                    ? "header-list__element active"
                                    : "header-list__element"
                            }`}
                        >
                            <Link href="/triathlon/event-finished">Start</Link>
                        </li>
                    ) : (
                        <li
                            className={`${
                                pathname === "/triathlon" ? "header-list__element active" : "header-list__element"
                            }`}
                        >
                            <Link href="/triathlon">Start</Link>
                        </li>
                    )}

                    <li
                        className={`${
                            pathname === "/triathlon/about" ? "header-list__element active" : "header-list__element"
                        }`}
                    >
                        <Link href="/triathlon/about">Om Eventet</Link>
                    </li>
                    <li
                        className={`${
                            pathname === "/triathlon/participants"
                                ? "header-list__element active"
                                : "header-list__element"
                        }`}
                    >
                        <Link href="/triathlon/participants">Deltagare</Link>
                    </li>
                    {finished ? (
                        <li
                            className={`${
                                pathname === "/triathlon/winners"
                                    ? "header-list__element active"
                                    : "header-list__element"
                            }`}
                        >
                            <Link href="/triathlon/winners">Vinnare</Link>
                        </li>
                    ) : (
                        <></>
                    )}
                    <li
                        className={`${
                            pathname === "/triathlon/sponsors" ? "header-list__element active" : "header-list__element"
                        }`}
                    >
                        <Link href="/triathlon/sponsors">Sponsorer</Link>
                    </li>
                    <li
                        className={`${
                            pathname === "/triathlon/discounts" ? "header-list__element active" : "header-list__element"
                        }`}
                    >
                        <Link href="/triathlon/discounts">Rabatter</Link>
                    </li>
                    <li
                        className={`${
                            pathname === "/triathlon/faq" ? "header-list__element active" : "header-list__element"
                        }`}
                    >
                        <Link href="/triathlon/faq">FAQ</Link>
                    </li>
                    <li
                        className={`${
                            pathname === "/triathlon/merch" ? "header-list__element active" : "header-list__element"
                        }`}
                    >
                        <Link href="/triathlon/merch">Merch</Link>
                    </li>
                </ul>

                <div id="hamburger" onClick={handleShowMenu}>
                    <Image
                        src={showMenu ? "/icon-x.svg" : "/icon-hamburger.svg"}
                        width={20}
                        height={20}
                        alt="Hamburger menu"
                    />
                </div>
            </nav>
        </header>
    );
}
