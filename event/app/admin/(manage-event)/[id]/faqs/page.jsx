"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Modal } from "@/app/components/Modal";
import Accordion from "@/app/components/Accordion";

import "./page.css";

export default function ManageFaqsPage({ params }) {
    const [ faq, setFaq ] = useState();
    const [ faqs, setFaqs ] = useState([]);
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort FAQn?");
    const router = useRouter();

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

    const handleEditClick = (faq) => {
        router.push(`/admin/${faq.event_id}/faqs/${faq.id}/edit`);
    }

    const handleConfirm = () => {
        deleteFaq(faq.id);
    };

    return (
        <main id="manage-faqs-page" className="flex-col align-c">
            <h1 className="manage-faqs-page__title">FAQ</h1>
            <div className="faq-list flex-col gap">
                {faqs?.length > 0 ? faqs.map((faq, index) => (
                    <div className="faq-wrapper" key={index}>
                        <Accordion heading={faq.question} text={faq.answer} />
                        <div className="faq-buttons">
                            <button className="delete-btn" onClick={() => handleDeleteClick(faq)}> Radera </button>
                            <button className="edit-btn" onClick={() => handleEditClick(faq)}> Redigera </button>
                        </div>
                    </div>
                )) : (
                    <p>Inga FAQs finns än för detta event.</p>
                )}
            </div>

            <Modal title={modalText} handleConfirm={handleConfirm} />

            <Link href={`/admin/${params.id}/faqs/add`} className="manage-faqs__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}
