"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DiscountCard from "@/app/components/DiscountCard";
import { Modal } from "@/app/components/Modal";

import "./page.css";

export default function ManageDiscountsPage({ params }) {
    const [ discount, setDiscount ] = useState();
    const [ discounts, setDiscounts ] = useState([]);
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort rabatten?");

    useEffect(() => {
        fetchDiscounts();
    }, []);

    const fetchDiscounts = async () => {
        const response = await fetch(`/api/discounts?id=${params.id}`);     // Fetches all discounts for specific event id
        if (response.status === 200) {
            const discounts = await response.json();
            discounts.map(element => {
                element.url = `/admin/${element.eventId}/discounts/${element.id}/edit`;             // Gör denna navigering på ett snyggare sätt
            });
            setDiscounts(discounts);
        }
    }

    const deleteDiscount = async (id) => {
        await fetch('/api/discount', {
            method:'DELETE',
            body:JSON.stringify({
                'id':id
            })
        });

        fetchDiscounts();
    }

    const handleDeleteClick = (discount) => {
        setDiscount(discount);
        document.querySelector("#modal").showModal();
        setModalText(`Är du säker på att du vill ta bort rabatten ${discount.title}?`);
    }

    const handleConfirm = () => {
        deleteDiscount(discount.id);
    };

    return (
        <main id="manage-discounts-page" className="flex-col align-c">
            <h1 className="manage-discounts-page__title">Rabatter</h1>
            <div className="discount-list flex-col">
                {discounts ? discounts.map((discount, index) => (
                    <div className="discount-wrapper" key={index}>
                        <DiscountCard discount={discount} />
                        <button className="delete-btn" onClick={() => handleDeleteClick(discount)}> Radera </button>
                    </div>
                )) : <></> }
            </div>

            <Modal title={modalText} handleConfirm={handleConfirm} />

            <Link href={`/admin/${params.id}/discounts/add`} className="manage-discounts__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}
