"use client";

import { useEffect, useState } from "react";
import { useTrainoContext } from "@/app/context/TrainoContext";
import Link from "next/link";
import SponsorCard from "@/app/components/SponsorCard";
import { Modal } from "@/app/components/Modal";

import "./page.css";

export default function ManageSponsorsPage({ params }) {
    const { DEBUG, BASE_URL } = useTrainoContext();

    const [sponsors, setSponsors] = useState([]);
    const [sponsor, setSponsor] = useState();
    const [modalText, setModalText] = useState("Är du säker på att du vill ta bort sponsoren?");

    // Open modal and set the corresponding sponsor to display details in modal
    const handleDeleteClick = (sponsor) => {
        setSponsor(sponsor);
        document.querySelector("#modal").showModal();
        setModalText(`Är du säker på att du vill ta bort sponsoren ${sponsor.name}?`);
    };

    // Delete a sponsor when confirm button is pressed
    const handleConfirm = () => {
        DEBUG && console.log(`delete ${sponsor}`);
        const deleteSponsor = async (id) => {
            try {
                await fetch(`${BASE_URL}/api/sponsors/${id}`, {
                    method: "DELETE",
                    body: JSON.stringify({
                        id,
                    }),
                });
                // Re-fetch sponsors to reflect new list
                fetchSponsors();
            } catch (error) {
                DEBUG && console.error(error);
            }
        };
        deleteSponsor(sponsor.id);
    };

    // Fetch and set sponsors
    const fetchSponsors = async () => {
        try {
            // Fetch sponsors for specific event id
            const res = await fetch(`${BASE_URL}/api/sponsors?id=${params.id}`);

            if (!res.ok) {
                throw new Error("Failed to fetch sponsors");
            }

            const sponsorsData = await res.json();

            // Overwrite sponsor url to allow for editing (only on admin page)
            sponsorsData.map(
                (sponsor) => (sponsor.url = `/admin/${sponsor.event_id}/sponsors/${sponsor.id}/edit`)
            );
            setSponsors(sponsorsData);

            DEBUG && console.log("Fetched sponsors:", sponsorsData);
        } catch (error) {
            DEBUG && console.error(error);
        }
    };

    // Get all sponsors for a specific event
    useEffect(() => {
        fetchSponsors();
    }, []);

    return (
        <main id="manage-sponsors-page" className="gap flex-col align-c">
            <h1 className="manage-sponsors__title">Sponsorer</h1>

            {sponsors.length > 0 ? (
                <section className="sponsors max-width flex-col">
                    {sponsors.map((sponsor, index) => (
                        <div className="sponsor-wrapper flex-col" key={index}>
                            <SponsorCard sponsor={sponsor} discounts={sponsor.discounts} />
                            <button
                                className="delete-btn"
                                onClick={() => handleDeleteClick(sponsor)}
                            >
                                Radera
                            </button>
                        </div>
                    ))}
                </section>
            ) : (
                <p>Inga sponsorer finns än för detta event.</p>
            )}

            <Modal title={modalText} handleConfirm={handleConfirm} />

            <Link href={`/admin/${params.id}/sponsors/add`} className="manage-sponsors__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}
