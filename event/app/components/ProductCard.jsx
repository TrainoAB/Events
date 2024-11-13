import "./ProductCard.css";

export default function ProductCard({ image, url }) {
    return (
        <section className="product-card">
            <img src={image} />
            <a href={url} target="_blank" className="product-card__button box-shadow">Gå till merch</a>
        </section>
    );
}
