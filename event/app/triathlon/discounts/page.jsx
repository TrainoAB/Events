import DiscountCard from "@/app/components/DiscountCard";

import "./page.css";

const DISCOUNTS = [
    {
        title: "Radison hotell",
        description: "Få 20% rabatt på ett köp när du visar upp ett TRAINO kort.",
        discount: 20,
        expiration: "15-17 aug. 2025"
    },
    {
        title: "Stadshotellet",
        description: "Få 15% rabatt på ett köp när du visar upp ett TRAINO kort.",
        discount: 15,
        expiration: "10-12 sept. 2025"
    },
]

export default function DiscountsPage() {
    return (
        <main id="discountspage" className="max-width">
            <h1>Rabatter</h1>
            {DISCOUNTS.map(discount => (
                <DiscountCard discount={discount} key={discount.title} />
            ))}
        </main>
    );
}
