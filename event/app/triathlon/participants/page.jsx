import Link from "next/link";
import ListToggle from "@/app/components/ListToggle";

import "./page.css";

export default function ParticipantsPage() {
    
    // Temporary Participants
    const PARTICIPANTS = [
        {name: "Greger Artursson", city: "Luleå", competition: "triathlon"},
        {name: "Pelle Jöns", city: "Stockholm", competition: "olympic"},
        {name: "Sonja Andersson", city: "Växjö", competition: "triathlon"},
        {name: "Arne Björnsson", city: "Karlstad", competition: "olympic"},
        {name: "Karl Bengtsson", city: "Halmstad", competition: "triathlon"},
        {name: "Sara Viktorsson", city: "Göteborg", competition: "olympic"},
        {name: "Jane Doe", city: "Stockholm", competition: "triathlon"},
        {name: "John Doe", city: "Uppsala", competition: "triathlon"},
        {name: "Göran Petterson", city: "Malmö", competition: "olympic"},
        {name: "Lisa Tjäderstig", city: "Jönköping", competition: "olympic"}
    ];

    const createList = (competition) => {
        return (
            <section>
                <div className="participants-list__heading box-shadow">
                    <h3 className="participants-list__heading-participants">Deltagare</h3> 
                    <h3 className="participants-list__heading-city">Stad</h3>
                </div>
                { PARTICIPANTS
                .filter(el => el.competition === competition)
                .map(el => <div className="participants-list__row box-shadow">
                                <p className="participants-list__name">{el.name}</p> 
                                <p className="participants-list__city">{el.city}</p>
                            </div>)
                }
            </section>
        );
    }

    return (
        <main id="participantspage" className="gap">
            <h1 className="participants__title">Deltagare</h1>
            <h2 className="participants-numbers">
                <div className="participants__confirmed">{PARTICIPANTS.length}</div>
                /100
            </h2>
            <ListToggle 
                title1="Triathlon" 
                list1={createList("triathlon")} 
                title2="Olympiskt triathlon" 
                list2={createList("olympic")}
            />

            <div className="traino-funnel">
                <p className="traino-funnel__text">
                    Taggad på att träna efter du sett motståndet?
                </p>
                <Link href="https://traino.nu/" className="box-shadow link-btn">
                    Träna
                </Link>
            </div>
        </main>
    );
}
