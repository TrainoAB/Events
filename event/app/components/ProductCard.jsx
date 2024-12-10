import Image from "next/image";

import "./ProductCard.css";

export default function ProductCard({ image, url }) {
    return (
        <section className="product-card flex-col">
            <a href={url} target="_blank" className="product-link ">
                <figure className="product-card__figure">
                    <Image src={image} width={272} height={484} alt={"Product photo"} />
                </figure>
                <div className="product-card__button">Gå till merch</div>
            </a>
        </section>
    );
}
