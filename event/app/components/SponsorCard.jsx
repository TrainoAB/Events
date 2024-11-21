import Image from "next/image";
import Link from "next/link";

import "./SponsorCard.css";

export default function SponsorCard({ sponsor, external }) {
    return (
        <Link className="sponsor-card-link" href={sponsor.url} target={external ? "_blank" : ""}>
            <article className="sponsor-card box-shadow b-radius">
                <figure className="sponsor-card__figure">
                    <Image
                        src={sponsor.image}
                        width={200}
                        height={200}
                        alt={`${sponsor.name} sponsor image`}
                    />
                </figure>
                <div className="sponsor-card-wrapper">
                    <h3 className="sponsor-card__title">{sponsor.name}</h3>
                    <p className="sponsor-card__description">{sponsor.description}</p>
                </div>
            </article>
        </Link>
    );
}
