import "./page.css";

export default function RegisterPage() {
    return (
        <main id="registerpage" className="max-width gap">
            <h1 className="register-title">Registrera</h1>
            <form className="register-form">
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="firstname">Förnamn</label>
                    <input id="firstname" name="firstname" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastname">Efternamn</label>
                    <input id="lastname" name="lastname" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="age">Ålder</label>
                    <input id="age" name="age" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--radio">
                    <span className="gender-label">Kön</span>
                    <label className="radio-wrapper" htmlFor="man">
                        <input id="man" name="gender" type="radio" value="man" />
                        <div className="radio-btn"></div>
                        <span className="radio-label">Man</span>
                    </label>
                    <label className="radio-wrapper" htmlFor="woman">
                        <input id="woman" name="gender" type="radio" value="woman" />
                        <div className="radio-btn"></div>
                        <span>Kvinna</span>
                    </label>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="phonenumber">Telefonnummer</label>
                    <input id="phonenumber" name="phonenumber" type="tel" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="city">Stad</label>
                    <input id="city" name="city" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--radio">
                    <span className="gender-label">Tävling</span>
                    <label className="radio-wrapper" htmlFor="triathlon">
                        <input id="triathlon" name="competition" type="radio" value="triathlon" />
                        <div className="radio-btn"></div>
                        <span>Triathlon</span>
                    </label>
                    <label className="radio-wrapper" htmlFor="olympic-triathlon">
                        <input
                            id="olympic-triathlon"
                            name="competition"
                            type="radio"
                            value="olympic-triathlon"
                        />
                        <div className="radio-btn"></div>
                        <span>Olympiskt Triathlon</span>
                    </label>
                </div>
                <button className="register-form__submit" type="submit">
                    Registrera mig
                </button>
            </form>
        </main>
    );
}
