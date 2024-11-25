"use client";

import { useRouter } from "next/navigation";

import "./page.css";

export default function AddSponsorPage() {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    };

    return (
        <main id="add-sponsor-page" className="gap flex-col align-c">
            <h1 className="add-sponsor__title">Lägg till sponsor</h1>

            <form className="add-sponsor-form flex-col">
                <div className="input-wrapper">
                    <label htmlFor="sponsor">Sponsor</label>
                    <input id="sponsor" name="sponsor" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="link">Länk</label>
                    <input id="link" name="link" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} required />
                </div>

                <div className="add-sponsor-form__buttons">
                    <button onClick={handleCancel} type="reset">
                        Avbryt
                    </button>
                    <button>Lägg till</button>
                </div>
            </form>
        </main>
    );
}
