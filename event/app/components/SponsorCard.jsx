import Image from "next/image";
import Link from "next/link";

import "./SponsorCard.css";

export default function SponsorCard({ sponsor, discounts = [], target = "_self" }) {
    return (
        <Link className="sponsor-card-link" href={sponsor.url} target={target}>
            <article className="sponsor-card">
                <figure className="sponsor-card__figure">
                    <Image src={sponsor.image} width={200} height={200} alt={`${sponsor.name} sponsor image`} />
                </figure>
                <div className="sponsor-card-wrapper flex-col">
                    <h3 className="sponsor-card__title">{sponsor.name}</h3>
                    <p className="sponsor-card__description">{sponsor.description}</p>
                    <button className="button">Besök sponsor</button>
                    { discounts.length > 0 ? 
                        <div className="sponsor-card__discounts">
                            { discounts.map(discount => <h4 className="sponsor-card__discount" key={discount.id}>{discount.title + ' ' + discount.discount + '%'} </h4>) }
                        </div> : 
                        <></>
                    }
                </div>
            </article>
        </Link>
    );
}
