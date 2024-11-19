import "./page.css";

export default function EditSponsorPage({ params }) {
    return (
        <main id="edit-sponsor-page">
            <h1 className="edit-sponsor__title">Redigera sponsor {params.id}</h1>

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
                    <label htmlFor="link">Sponsorlänk</label>
                    <input id="link" name="link" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} />
                </div>
                
                <button className="edit-sponsor-form__submit">Spara</button>
            </form>
        </main>
    );
}
