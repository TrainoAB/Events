'use client';

import { useRouter } from "next/navigation";

import "./page.css";

export default function EditSponsorPage() {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    }

    return (
        <main id="edit-sponsor-page">
            <h1 className="edit-sponsor__title">Redigera sponsor</h1>

            <form className="edit-sponsor-form">
                <div className="input-wrapper">
                    <label htmlFor="sponsor">Sponsor</label>
                    <input id="sponsor" name="sponsor" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="link">Länk</label>
                    <input id="link" name="link" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} />
                </div>
                
                <div className="edit-sponsor-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Spara </button>
                </div>
            </form>
        </main>
    );
}
