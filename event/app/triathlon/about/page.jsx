import Image from "next/image";
import Link from "next/link";

import ImageGallery from "@/app/components/ImageGallery";

import "./page.css";

// Put real location images here, src in ImageGallery will also need to be updated when
// that happens
const LOCATION_IMAGES = ["../next.svg", "../next.svg", "../next.svg", "../next.svg"];

export default function AboutPage() {
    return (
        <main id="aboutpage" className="max-width gap">
            <div className="aboutpage-titles">
                <h1>Om Eventet</h1>
                <h2>16 Aug 2025, Stockholm</h2>
            </div>
            <section className="event-info">
                <p className="event-info__description">
                    Traino anordnar sitt första event som går av stapeln lördagen den 16:e augusti
                    2025. Ett helt Triathlon, placerat i Stockholm. Det kommer även att finnas ett
                    mini Triathlon kallat Olympiska Triathlon.
                </p>
                <figure className="event-info__figure">
                    <Image
                        src={"https://picsum.photos/430/242"}
                        width={430}
                        height={242}
                        alt="Karta som visar rutten för Triathlon tävlingen"
                        className="event-info__image"
                    />
                </figure>
            </section>
            <section className="event-image-gallery">
                <h2 className="event-image-gallery__title">Platsbilder</h2>
                <ImageGallery images={LOCATION_IMAGES} />
            </section>
            <div className="traino-funnel">
                <p className="traino-funnel__text">
                    Nu när du vet mer om eventet kan du börja träna inför det!
                </p>
                <Link href="https://traino.nu/" className="box-shadow link-btn">
                    Träna
                </Link>
            </div>
            <section className="volunteer">
                <h2 className="volunteer__title">Anmäl Dig Som Volontär</h2>
                <form className="volunteer-form">
                    <div className="input-wrapper">
                        <label htmlFor="volunteer-email">Email</label>
                        <input id="volunteer-email" name="volunteer-email" type="email" required />
                    </div>
                    <button className="volunteer-form__submit box-shadow" type="submit">
                        Anmäl mig
                    </button>
                </form>
            </section>
        </main>
    );
}
