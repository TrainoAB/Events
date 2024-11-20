'use client';

import { useRouter } from "next/navigation";

import "./page.css";

export default function AddDiscountPage() {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    }

    return (
        <main id="add-discount-page">
            <h1 className="add-discount-page__title">Lägg till Rabatt</h1>

            <form className="add-discount-form">
                <div className="input-wrapper">
                    <label htmlFor="title">Rubrik</label>
                    <input id="title" name="title" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="discount">Rabatt</label>
                    <input id="discount" name="discount" type="number" step={1} min={1} max={100} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="link">Länk</label>
                    <input id="link" name="link" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} />
                </div>

                <div className="add-discount-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
