import Image from "next/image";

import "./SponsorCard.css";

export default function SponsorCard({ image, title, description }) {
    return (
        <article className="sponsor-card box-shadow b-radius">
            <Image src={image} width={100} height={100} alt={`${title} sponsor image`} />
            <h3 className="sponsor-card__title">{title}</h3>
            <p className="sponsor-card__description">{description}</p>
        </article>
    );
}
