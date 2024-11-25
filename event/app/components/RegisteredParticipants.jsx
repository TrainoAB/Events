import Link from "next/link";

import "./RegisteredParticipants.css";

export default function RegisteredParticipants({ registered, total }) {
    const eventFull = registered === total ? "event-full" : "";

    return (
        <article className={`registered-participants b-radius box-shadow flex-col align-c ${eventFull}`}>
            <h2 className="registered-participants__title">Registrerade Deltagare</h2>
            <strong className="registered-participants__count">
                <span className="confirmed-participants">{registered}</span>
                {`/${total}`}
            </strong>
            <div className="registered-participants__bar-container b-radius">
                <div
                    className="registered-participants__bar b-radius"
                    style={{ width: `${registered}%` }}
                ></div>
            </div>
            <Link className="link-btn" href={"triathlon/register"}>
                Registrera mig
            </Link>
        </article>
    );
}
