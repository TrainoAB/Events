'use client';

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import DiscountCard from "@/app/components/DiscountCard";

import "./page.css";

export default function DiscountsPage() {
    const [ discounts, setDiscounts ] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        fetchDiscounts();
    }, []);

    const fetchDiscounts = async () => {
        const response = await fetch(`/api/discounts?url=${pathname.split('/')[1]}`);      //TODO Change so that id is used instead of url
        if (response.status === 200) {
            const discounts = await response.json();
            discounts.sort((a, b) => a.valid_from.localeCompare(b.valid_from));
            setDiscounts(discounts);
        }
    }

    return (
        <main id="discountspage" className="max-width flex-col align-c">
            <h1>Rabatter</h1>
            <div className="discount-list flex-col">
                {discounts ? discounts.map((discount, index) => (
                    <DiscountCard discount={discount} target="_blank" key={index} />
                )) : <></> }
            </div>
        </main>
    );
}
