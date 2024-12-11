import Link from "next/link";

import "./TrainoFunnel.css";

export default function TrainoFunnel() {
    return (
        <section className="traino-funnel flex-col align-c">
            <h2>Sugen på att delta?</h2>
            <p className="traino-funnel__cta">
                Förbered inför eventet genom att träna. <br />
                Hitta din personliga tränare via TRAINO.
            </p>
            <Link className="link-btn" href="https://traino.nu/" target="_blank">
                Hitta tränare
            </Link>
        </section>
    );
}
