'use client';

import { useState } from "react";
import Link from "next/link";
import DiscountCard from "@/app/components/DiscountCard";
import { Modal } from "@/app/components/Modal";

import "./page.css";

const DISCOUNTS = [
    {
        title: "Radison hotell",
        description: "Få 20% rabatt på ett köp när du visar upp ett TRAINO kort.",
        discount: 20,
        expiration: "15-17 aug. 2025",
    },
    {
        title: "Stadshotellet",
        description: "Få 15% rabatt på ett köp när du visar upp ett TRAINO kort.",
        discount: 15,
        expiration: "10-12 sept. 2025",
    },
];

export default function ManageDiscountsPage({ params }) {
    const [ showModal, setShowModal ] = useState(false);
    const [ discount, setDiscount ] = useState();

    const handleDeleteClick = (discount) => {
        setDiscount(discount);
        setShowModal(!showModal);
    }

    const handleDeleteDiscount = () => {
        console.log(`delete ${discount.title}`);
    }

    const handleToggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <main id="manage-discounts-page">
            <h1 className="manage-discounts-page__title">{`Rabatter: ${params.id}`}</h1>
            <div className="discount-list">
                {DISCOUNTS.map((discount) => (
                    <div className="discount-wrapper" key={discount.title}>
                        <Link href="discounts/edit">
                            <DiscountCard discount={discount} />
                        </Link>
                        <button className="delete-btn" onClick={() => handleDeleteClick(discount)}> Radera </button>
                    </div>
                ))}
            </div>

            {showModal ? <Modal 
                            title={discount.title}
                            closeModal={handleToggleModal} 
                            confirm={handleDeleteDiscount} 
                        /> : <></> 
            }

            <Link href="/admin/1/discounts/add" className="manage-discounts__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}