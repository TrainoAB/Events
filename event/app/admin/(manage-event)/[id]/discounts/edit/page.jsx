"use client";

import { useRouter } from "next/navigation";

import "./page.css";

export default function EditDiscountPage() {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    };

    return (
        <main id="edit-discount-page" className="flex-col align-c">
            <h1 className="edit-discount-page__title">Redigera Rabatt</h1>

            <form className="edit-discount-form flex-col">
                <div className="input-wrapper">
                    <label htmlFor="title">Rubrik</label>
                    <input id="title" name="title" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="discount">Rabatt</label>
                    <input
                        id="discount"
                        name="discount"
                        type="number"
                        step={1}
                        min={1}
                        max={100}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="link">Länk</label>
                    <input id="link" name="link" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} required />
                </div>

                <div className="edit-discount-form__buttons">
                    <button onClick={handleCancel} type="reset">
                        Avbryt
                    </button>
                    <button>Spara</button>
                </div>
            </form>
        </main>
    );
}
