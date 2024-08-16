"use client";
import { useState } from "react";
import Link from "next/link";

import "./page.css";

export default function Triathlon() {
    const [showMenu, setShowMenu] = useState(false);

    const handleOpenMenu = () => {
        setShowMenu(true);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    return (
        <>
            <main id="eventpage">
                <nav>
                    <div className="logo">Logo</div>
                    <div className="icon-menu" onClick={handleOpenMenu}></div>
                    <ul className={showMenu ? "showmenu" : ""}>
                        <li>
                            <div className="btn-close" onClick={handleCloseMenu}></div>
                        </li>
                        <li>
                            <Link href="#">Start</Link>
                        </li>
                        <li>
                            <Link href="#">Vart</Link>
                        </li>
                        <li>
                            <Link href="#">Deltagare</Link>
                        </li>
                        <li>
                            <Link href="#">Om Eventet</Link>
                        </li>
                        <li>
                            <Link href="#">Sponsorer</Link>
                        </li>
                    </ul>
                </nav>
                <div className="video-container">
                    <h1>Traino Triathlon</h1>
                    <h2>16 Aug 2025, Stockholm</h2>
                    <p>
                        Traino anordnar sitt första event 2025. Ett helt Triathlon, placerat i Stockholm helt gratis.
                        Det kommer även finnas ett mini Triathlon kallat Olympiska Triathlon.
                    </p>
                    <button>Registrera mig</button>
                    <div className="videocover"></div>
                    <video muted autoPlay loop>
                        <source src="/videobg.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </main>
        </>
    );
}
