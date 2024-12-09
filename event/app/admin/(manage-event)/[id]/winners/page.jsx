"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Modal } from "@/app/components/Modal";

import "./page.css";

export default function ManageWinnersPage({ params }) {
    const [ winner, setWinner ] = useState();
    const [ winners, setWinners ] = useState([]);
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort vinnaren?");

    useEffect(() => {
        fetchWinners();
    }, []);

    const fetchWinners = async () => {
        const response = await fetch(`/api/winners?id=${params.id}`);     // Fetches all winners for specific event id
        if (response.status === 200) {
            const winners = await response.json();
            setWinners(winners);
        }
    }

    const deleteWinner = async (id) => {
        await fetch('/api/winner', {
            method:'DELETE',
            body:JSON.stringify({
                'id':id
            })
        });

        fetchWinners();
    }

    const handleDeleteClick = (winner) => {
        setWinner(winner);
        document.querySelector("#modal").showModal();
        setModalText(`Är du säker på att du vill ta bort vinnaren ${winner.forename} ${winner.surname}?`);
    }

    const handleConfirm = () => {
        deleteWinner(winner.id);
    };

    return (
        <main id="manage-winners-page" className="flex-col align-c">
            <h1 className="manage-winners-page__title">Vinnare</h1>
            <div className="winners-list flex-col">
                {winners?.length > 0 ? winners.map((winner, index) => (
                    <div className="winners-wrapper" key={index}>
                        <Link href={`/admin/${params.id}/winners/${winner.id}/edit`}>
                            <section className="participants-list__row box-shadow">

                                <div className="list-row-wrapper">
                                    <p className="list-row-wrapper__bold"> { winner.finish_time } </p> 
                                </div>
                                
                                <div className="winners-wrapper">
                                    <div className="list-row-wrapper">
                                        <p> { winner.forename } </p>
                                    </div>
                                    <div className="list-row-wrapper">
                                        <p> { winner.surname } </p>
                                    </div>
                                </div>

                                <div className="list-row-wrapper">
                                        <p> { winner.city } </p>
                                </div>

                                <div className="list-row-wrapper">
                                        <p className="list-row-wrapper__bold"> { winner.competition } </p>
                                </div>
                            </section>
                        </Link>
                        <button className="delete-btn" onClick={() => handleDeleteClick(winner)}> Radera </button>
                    </div>
                )) : (<p>Inga vinnare finns än för detta event.</p>) }
            </div>

            <Modal title={modalText} handleConfirm={handleConfirm} />

            <Link href={`/admin/${params.id}/winners/add`} className="manage-winners__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}
