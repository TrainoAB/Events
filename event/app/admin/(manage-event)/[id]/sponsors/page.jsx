"use client";

import { useState } from "react";
import Link from "next/link";
import SponsorCard from "@/app/components/SponsorCard";
import { Modal } from "@/app/components/Modal";

import "./page.css";

export default function ManageSponsorsPage({ params }) {
    const [ sponsor, setSponsor ] = useState();
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort sponsoren?");

    const handleDeleteClick = (sponsor) => {
        setSponsor(sponsor);
        document.querySelector("#modal").showModal();
        setModalText(`Är du säker på att du vill ta bort sponsoren ${sponsor.name}?`);
    };

    const handleConfirm = () => {
        console.log(`delete ${sponsor.name}`);
    };

    return (
        <main id="manage-sponsors-page" className="gap flex-col align-c">
            <h1 className="manage-sponsors__title">Sponsorer: {params.id}</h1>

            <section className="sponsors max-width flex-col">
                {SPONSORS.map((sponsor, index) => (
                    <div className="sponsor-wrapper flex-col" key={index}>
                        <SponsorCard sponsor={sponsor} />
                        <button className="delete-btn" onClick={() => handleDeleteClick(sponsor)}>
                            Radera
                        </button>
                    </div>
                ))}
            </section>

            <Modal title={modalText} handleConfirm={handleConfirm} />

            <Link href="/admin/1/sponsors/add" className="manage-sponsors__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}

const SPONSORS = [
    {
        url: "sponsors/edit",
        name: "McDonald's",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
    {
        url: "sponsors/edit",
        name: "Lamborghini",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
    {
        url: "sponsors/edit",
        name: "Pizza Hut",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
    {
        url: "sponsors/edit",
        name: "Tesla",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus ex, omnis nulla similique itaque reprehenderit, ut nemo hic cupiditate molestias voluptatem necessitatibus quibusdam ea incidunt ipsum eveniet maiores adipisci assumenda numquam! Dolore quasi exercitationem saepe aperiam, id ut. Ullam alias obcaecati eum error dignissimos commodi excepturi qui nam cumque?",
        image: "https://picsum.photos/200",
    },
];
