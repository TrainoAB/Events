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
        <div id="winnerCard-wrapper">
            <section id="winnerCard" className="box-shadow flex-col align-c">
                <div className="winnerCard-placement-wrapper box-shadow">
                    <div className={`winnerCard-placement ${winnerColor(placement)}`}>
                        {placement}
                    </div>
                </div>
                <div className="winnerCard-name-wrapper box-shadow flex-col">
                    <h2>{winner.forename}</h2>
                    <h2>{winner.surname}</h2>
                </div>
                <h2>{winner.city}</h2>
                <h2 className="winnerCard-competition">{winner.competition}</h2>
            </section>
        </div>
    );
}
