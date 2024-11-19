import "./page.css";

export default function EditEventPage({ params }) {
    return (
        <main id="edit-event-page">
            <h1 className="edit-event-page__title">Redigera eventet {params.id}</h1>

            <form className="edit-event-form">
                <div className="input-wrapper">
                    <label htmlFor="event">Event</label>
                    <input id="event" name="event" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="date">Datum</label>
                    <input id="date" name="date" type="date" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="image">Bild (text länk)</label>
                    <input id="image" name="image" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} />
                </div>

                <button className="edit-event-form__submit">Spara</button>
            </form>
        </main>
    );
}
