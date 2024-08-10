"use client";
import Link from "next/link";
import "./page.css";

export default function Triathalon() {
    return (
        <main id="eventpage">
            <nav>
                <div className="logo">Logo</div>
                <ul>
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
                <h1>Traino Triathalon</h1>
                <h2>16 Aug 2025, Stockholm</h2>
                <p>
                    Traino anordnar sitt första event 2025. Ett helt Triathalon, placerat i Stockholm helt gratis. Det
                    kommer även finnas ett mini Triathalon kallat Olympiska Triathalon.
                </p>
                <button>Registrera mig</button>
                <div className="videocover"></div>
                <video muted autoPlay loop>
                    <source src="/videobg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </main>
    );
}
