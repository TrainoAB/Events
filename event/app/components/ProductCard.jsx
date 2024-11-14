import Image from "next/image";

import "./ProductCard.css";

export default function ProductCard({ image, url }) {
    return (
        <section className="product-card">
            <Image
                src={image}
                width={272}
                height={484}
            />
            <a href={url} target="_blank" className="product-card__button box-shadow">Gå till merch</a>
        </section>
    );
}
