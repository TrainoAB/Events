import "./page.css";

export default function Triathlon() {

    return (
        <>
            <main id="eventpage">
                <div className="video-container">
                    <h1>Traino Triathlon</h1>
                    <h2>16 Aug 2025, Stockholm</h2>
                    <p>
                        Traino anordnar sitt första event 2025. Ett helt Triathlon, placerat i Stockholm. Det kommer
                        även finnas ett mini Triathlon kallat Olympiska Triathlon.
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
