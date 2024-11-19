import Link from "next/link";
import DiscountCard from "@/app/components/DiscountCard";

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
    return (
        <main id="manage-discounts-page">
            <h1 className="manage-discounts-page__title">{`Rabatter: ${params.id}`}</h1>
            <div className="discount-list">
                {DISCOUNTS.map((discount) => (
                    <div className="discount-wrapper" key={discount.title}>
                        <Link href="discounts/edit">
                            <DiscountCard discount={discount} />
                        </Link>
                        <button className="delete-discount-btn">Radera</button>
                    </div>
                ))}
            </div>
            <button className="add-discount-btn"></button>
        </main>
    );
}
