import "./WinnerCard.css";

export default function WinnerCard({ placement, winner }) {

    const winnerColor = (placement) => {
        switch(placement) {
            case 1:
                return "gold";
            case 2:
                return "silver";
            case 3:
                return "bronze";
            default:
                return "";
        }
    }

    const firstName = (name) => {
        return name.split(' ')[0];
    }

    const lastName = (name) => {
        return name.split(' ')[1];
    }

    return (
        <div id="winnerCard-wrapper">
            <section id="winnerCard" className="box-shadow">
                <div className={`winnerCard-placement box-shadow ${winnerColor(placement)}`}> {placement} </div>
                <div className="winnerCard-name-wrapper">
                    <h2> {firstName(winner.name)} </h2>
                    <h2> {lastName(winner.name)} </h2>
                </div>
                <h2> {winner.city} </h2>
                <h2 className="winnerCard-competition"> {winner.competition} </h2>
            </section>
        </div>
    );
}
