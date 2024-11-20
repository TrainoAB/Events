import Link from "next/link";
import SponsorCard from "@/app/components/SponsorCard";

import "./page.css";

export default function ManageSponsorsPage({ params }) {
    return (
        <main id="manage-sponsors-page" className="gap">
            <h1 className="manage-sponsors__title">Sponsorer: {params.id}</h1>

            <section className="sponsors max-width">
                {SPONSORS.map((sponsor, index) => (
                    <div className="sponsor-wrapper" key={index}>
                        <Link href="/admin/1/sponsors/edit">
                            <SponsorCard
                                image={sponsor.image}
                                title={sponsor.name}
                                description={sponsor.description}
                            />
                        </Link>
                        <button className="delete-btn">Radera</button>
                    </div>
                ))}
            </section>

            <Link href="/admin/1/sponsors/add" className="manage-sponsors__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}

const SPONSORS = [
    {
        name: "McDonald's",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
    {
        name: "Lamborghini",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
    {
        name: "Pizza Hut",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
    {
        name: "Tesla",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
];
