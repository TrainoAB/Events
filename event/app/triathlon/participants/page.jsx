import "./page.css";

export default function ParticipantsPage() {

    const PRODUCTS = [
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

    return (
        <main id="participantspage" className="gap">
            <h1 className="participants__title">Deltagare</h1>


        </main>
    );
}
