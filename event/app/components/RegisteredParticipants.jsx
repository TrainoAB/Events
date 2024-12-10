import Link from "next/link";

import "./RegisteredParticipants.css";

export default function RegisteredParticipants({ registered, total }) {
    // Ensure the amount of participants don't exceed the total allowed
    const participantCount = registered >= total ? total : registered;

    // Calculate and cap the percent for the width of the registered bar
    const percent = (registered / total) * 100;
    const cappedPercent = percent >= 100 ? 100 : percent;

    return (
        <article
            className={`
                registered-participants 
                b-radius 
                flex-col 
                align-c 
                ${participantCount >= total ? "border-glow" : ""}
                `}
        >
            <h2 className="registered-participants__title">Registrerade Deltagare</h2>
            <strong className="registered-participants__count">
                <span className="confirmed-participants">{participantCount}</span>
                {`/${total}`}
            </strong>
            <div className="registered-participants__bar-container b-radius">
                <div className="registered-participants__bar b-radius" style={{ width: `${cappedPercent}%` }}></div>
            </div>
            {participantCount < total ? (
                <Link className="link-btn" href={"triathlon/register"}>
                    Registrera mig
                </Link>
            ) : (
                <button className="disabled-btn" disabled>
                    Registrering stängd
                </button>
            )}
        </article>
    );
}
