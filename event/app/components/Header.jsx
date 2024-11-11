"use client";

import { useState } from "react";
import Link from "next/link";
import "./Header.css";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleOpenMenu = () => {
        setShowMenu(true);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    return (
        <nav id="header">
            <div className="logo">Logo</div>
            <div className="icon-menu" onClick={handleOpenMenu}></div>
            <ul className={showMenu ? "showmenu" : ""}>
                <li>
                    <div className="btn-close" onClick={handleCloseMenu}></div>
                </li>
                <li>
                    <Link href="/triathlon">Start</Link>
                </li>
                <li>
                    <Link href="/triathlon/about">Om Eventet</Link>
                </li>
                <li>
                    <Link href="/triathlon/participants">Deltagare</Link>
                </li>
                <li>
                    <Link href="/triathlon/winners">Vinnare</Link>
                </li>
                <li>
                    <Link href="/triathlon/sponsors">Sponsorer</Link>
                </li>
                <li>
                    <Link href="/triathlon/faq">FAQ</Link>
                </li>
                <li>
                    <Link href="/triathlon/merch">Merch</Link>
                </li>
            </ul>
        </nav>
    );
}
