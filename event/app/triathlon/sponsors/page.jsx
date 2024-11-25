import SponsorCard from "@/app/components/SponsorCard";

import "./page.css";

const SPONSORS = [
    {
        url: "https://nextjs.org/",
        name: "McDonald's",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
    {
        url: "https://www.google.com/",
        name: "Lamborghini",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
];

export default function SponsorsPage() {
    return (
        <main id="sponsorspage" className="max-width gap flex-col align-c">
            <section className="sponsors flex-col">
                <h1 className="sponsors__title">Sponsorer</h1>
                {SPONSORS.map((sponsor, index) => (
                    <SponsorCard sponsor={sponsor} target="_blank" key={index} />
                ))}
            </section>
            <section className="sponsor-event flex-col align-c">
                <h2 className="sponsor-event__title heading-size">Sponsra Eventet</h2>
                <p className="sponsor-event__cta">
                    Fyll i er kontaktinformation så kontaktar vi er.
                </p>
                <form className="sponsor-event__form">
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="phonenumber">Telefonnummer</label>
                        <input id="phonenumber" name="phonenumber" type="tel" />
                    </div>
                    <button className="sponsor-event__submit" type="submit">
                        Skicka
                    </button>
                </form>
            </section>
        </main>
    );
}
