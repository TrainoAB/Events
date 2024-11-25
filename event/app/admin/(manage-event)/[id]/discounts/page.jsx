"use client";

import { useState } from "react";
import Link from "next/link";
import DiscountCard from "@/app/components/DiscountCard";
import { Modal } from "@/app/components/Modal";

import "./page.css";

const DISCOUNTS = [
    {
        url: "discounts/edit",
        title: "Radison hotell",
        description: "Få 20% rabatt på ett köp när du visar upp ett TRAINO kort.",
        discount: 20,
        expiration: "15-17 aug. 2025",
    },
    {
        url: "discounts/edit",
        title: "Stadshotellet",
        description: "Få 15% rabatt på ett köp när du visar upp ett TRAINO kort.",
        discount: 15,
        expiration: "10-12 sept. 2025",
    },
];

export default function ManageDiscountsPage({ params }) {
    const [ discount, setDiscount ] = useState();
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort rabatten?");

    const handleDeleteClick = (discount) => {
        setDiscount(discount);
        document.querySelector("#modal").showModal();
        setModalText(`Är du säker på att du vill ta bort rabatten ${discount.title}?`);
    }

    const handleConfirm = () => {
        console.log(`delete ${discount.title}`);
    };

    return (
        <main id="manage-discounts-page" className="flex-col align-c">
            <h1 className="manage-discounts-page__title">{`Rabatter: ${params.id}`}</h1>
            <div className="discount-list flex-col">
                {DISCOUNTS.map((discount, index) => (
                    <div className="discount-wrapper" key={index}>
                        <DiscountCard discount={discount} />
                        <button className="delete-btn" onClick={() => handleDeleteClick(discount)}>
                            {" "}
                            Radera{" "}
                        </button>
                    </div>
                ))}
            </div>

            <Modal title={modalText} handleConfirm={handleConfirm} />

            <Link href="/admin/1/discounts/add" className="manage-discounts__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}
