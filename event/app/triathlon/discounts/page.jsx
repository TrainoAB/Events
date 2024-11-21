import DiscountCard from "@/app/components/DiscountCard";

import "./page.css";

const DISCOUNTS = [
    {
        url: "https://nextjs.org/",
        title: "Radison hotell",
        description: "Få 20% rabatt på ett köp när du visar upp ett TRAINO kort.",
        discount: 20,
        expiration: "15-17 aug. 2025",
    },
    {
        url: "https://www.google.com/",
        title: "Stadshotellet",
        description: "Få 15% rabatt på ett köp när du visar upp ett TRAINO kort.",
        discount: 15,
        expiration: "10-12 sept. 2025",
    },
];

export default function DiscountsPage() {
    return (
        <main id="discountspage" className="max-width">
            <h1>Rabatter</h1>
            {DISCOUNTS.map((discount, index) => (
                <DiscountCard discount={discount} target="_blank" key={index} />
            ))}
        </main>
    );
}
