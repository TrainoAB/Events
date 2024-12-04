"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Modal } from "@/app/components/Modal";

import "./page.css";

export default function ManageDiscountsPage({ params }) {
    const [ faq, setFaq ] = useState();
    const [ faqs, setFaqs ] = useState([]);
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort FAQn?");

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        const response = await fetch(`/api/faqs?id=${params.id}`);     // Fetches all faqs for specific event id
        if (response.status === 200) {
            const faqs = await response.json();
            setFaqs(faqs);
        }
    }

    const deleteFaq = async (id) => {
        await fetch('/api/faq', {
            method:'DELETE',
            body:JSON.stringify({
                'id':id
            })
        });

        fetchFaqs();
    }

    const handleDeleteClick = (faq) => {
        setFaq(faq);
        document.querySelector("#modal").showModal();
        setModalText(`Är du säker på att du vill ta bort FAQn?`);
    }

    const handleConfirm = () => {
        deleteFaq(faq.id);
    };

    return (
        <main id="manage-faqs-page" className="flex-col align-c">
            <h1 className="manage-faqs-page__title">FAQ</h1>
            <div className="faq-list flex-col">
                {faqs ? faqs.map((faq, index) => (
                    <div className="faq-wrapper">
                        { faq.question }
                        <button className="delete-btn" onClick={() => handleDeleteClick(faq)}> Radera </button>
                    </div>
                )) : <></> }
            </div>

            <Modal title={modalText} handleConfirm={handleConfirm} />

            <Link href={`/admin/${params.id}/faqs/add`} className="manage-faqs__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}
