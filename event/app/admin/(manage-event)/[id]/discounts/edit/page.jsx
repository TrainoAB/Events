import "./page.css";

export default function EditDiscountPage() {
    return (
        <main id="edit-discount-page">
            <h1 className="edit-discount-page__title">Redigera Rabatt</h1>
            <form className="edit-discount-form">
                <div className="input-wrapper">
                    <label htmlFor="title">Rubkrik</label>
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
                <button className="edit-discount-form__submit">Spara</button>
            </form>
        </main>
    );
}
