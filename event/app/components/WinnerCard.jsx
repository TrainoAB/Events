import "./WinnerCard.css";

export default function WinnerCard({ placement, winner }) {
    const winnerColor = (placement) => {
        switch (placement) {
            case 1:
                return "gold";
            case 2:
                return "silver";
            case 3:
                return "bronze";
            default:
                return "";
        }
    };

    return (
        <article id={`winnerCard${placement}`} className="winnerCard flex-col align-c">
            <div className="glare">
                <div className="glare__circle"></div>
                <div className="glare__line"></div>
                <div className="glare__line"></div>
            </div>
            <div className={`winnerCard-placement ${winnerColor(placement)}`}></div>
            <div className="winnerCard-name-wrapper">
                <h2>{winner.forename}</h2>
                <h2>{winner.surname}</h2>
            </div>
            <p className="winnerCard-city">{winner.city}</p>
            <p>{winner.result}</p>
            <p className="winnerCard-competition">{winner.competition}</p>
        </article>
    );
}
