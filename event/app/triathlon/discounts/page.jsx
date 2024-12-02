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
        const response = await fetch(`/api/discounts?url=${pathname.split('/')[1]}`);        // Change so that id is used instead
        if (response.status === 200) {
            const discounts = await response.json();
            setDiscounts(discounts);
        }
    }

    return (
        <main id="discountspage" className="max-width flex-col align-c">
            <h1>Rabatter</h1>
            {discounts ? discounts.map((discount, index) => (
                <DiscountCard discount={discount} target="_blank" key={index} />
            )) : <></> }
        </main>
    );
}
