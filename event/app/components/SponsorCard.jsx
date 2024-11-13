import Image from "next/image";

import "./SponsorCard.css";

export default function SponsorCard({ image, title, description }) {
    return (
        <article className="sponsor-card box-shadow b-radius">
            <figure className="sponsor-card__figure">
                <Image src={image} width={200} height={200} alt={`${title} sponsor image`} />
            </figure>
            <div className="sponsor-card-wrapper">
                <h3 className="sponsor-card__title">{title}</h3>
                <p className="sponsor-card__description">{description}</p>
            </div>
        </article>
    );
}
