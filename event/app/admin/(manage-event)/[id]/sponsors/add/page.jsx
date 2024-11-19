import "./page.css";

export default function AddSponsorPage() {
    return (
        <main id="add-sponsor-page" className="gap">
            <h1 className="add-sponsor__title">Lägg till sponsor</h1>

            <form className="add-sponsor-form">
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

                <button className="add-sponsor-form__submit">Lägg till</button>
            </form>
        </main>
    );
}
