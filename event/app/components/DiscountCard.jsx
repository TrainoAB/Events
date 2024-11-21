import Link from "next/link";

import "./DiscountCard.css";

export default function DiscountCard({ discount, target="_self" }) {
    return (
        <Link className="discount-card-link" href={discount.url} target={target}>
            <article className="discount-card box-shadow b-radius">
                <div className="discount-info-wrapper">
                    <h3 className="discount-card__title">{discount.title}</h3>
                    <p className="discount-card__description">{discount.description}</p>
                    <small className="discount-card__expiration">{`Gäller ${discount.expiration}`}</small>
                </div>
                <strong className="discount-card__percent"><span className="discount-card__percent--text">{`${discount.discount}%`}</span></strong>
            </article>
        </Link>
    );
}
