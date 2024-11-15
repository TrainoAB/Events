import "./CountdownTimer.css";

// TODO: Write code for counting down
export default function CountdownTimer() {
    return (
        <div className="countdown-timer b-radius box-shadow">
            <div className="timer-wrapper">
                <div className="countdown-time countdown-time--days">
                    <strong className="countdown-time__number">50</strong>
                    <span className="countdown-time__type">Dagar</span>
                </div>
                <div className="countdown-time countdown-time--hours">
                    <strong className="countdown-time__number">8</strong>
                    <span className="countdown-time__type">Timmar</span>
                </div>
                <div className="countdown-time countdown-time--minutes">
                    <strong className="countdown-time__number">23</strong>
                    <span className="countdown-time__type">Minuter</span>
                </div>
            </div>
            <p className="countdown-timer__text">Tid kvar tills eventet börjar</p>
        </div>
    );
}
