import Image from "next/image";

import "./ProductCard.css";

export default function ProductCard({ image, url }) {
    return (
        <section className="product-card flex-col">
            <figure className="product-card__figure">
                <Image src={image} width={272} height={484} alt={"Product photo"} />
            </figure>
            <a href={url} target="_blank" className="product-card__button ">
                Gå till merch
            </a>
        </section>
    );
}
