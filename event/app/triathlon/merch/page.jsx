import ProductCard from "@/app/components/ProductCard";
import "./page.css";

export default function MerchPage() {

    // Temporary products
    const PRODUCTS = [
        {image: "/white-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-Color-by-TRAINO/165255437.WFLAH"},
        {image: "/black-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-White-by-TRAINO/165255464.IJ6L0"},
        {image: "/white-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-Color-by-TRAINO/165255437.WFLAH"},
        {image: "/black-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-White-by-TRAINO/165255464.IJ6L0"},
        {image: "/white-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-Color-by-TRAINO/165255437.WFLAH"},
        {image: "/black-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-White-by-TRAINO/165255464.IJ6L0"},
        {image: "/white-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-Color-by-TRAINO/165255437.WFLAH"},
        {image: "/black-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-White-by-TRAINO/165255464.IJ6L0"},
        {image: "/black-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-White-by-TRAINO/165255464.IJ6L0"},
        {image: "/white-tshirt.png", url: "https://www.redbubble.com/i/t-shirt/Traino-Logo-Small-Color-by-TRAINO/165255437.WFLAH"}
    ];

    return (
        <main id="merchpage" className="gap flex-col align-c">
            <h1 className="merch__title">Merch</h1>

            <section className="merch__gallery">
                {PRODUCTS.map((product, index) => 
                    <ProductCard image={product.image} url={product.url} key={index} />
                )}
            </section>

            <a href="http://traino.redbubble.com" target="_blank" className="link-btn box-shadow">Gå till butik</a>
        </main>
    );
}
