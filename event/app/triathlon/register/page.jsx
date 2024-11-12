import "./page.css";

export default function RegisterPage() {
    return (
        <main id="registerpage">
            <h1>Registrera</h1>
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
                <div className="input-wrapper">
                    <span className="gender-label">Kön</span>
                    <div className="radio-wrapper">
                        <input id="man" name="gender" type="radio" value="man" />
                        <label htmlFor="man">Man</label>
                        <input id="woman" name="gender" type="radio" value="woman" />
                        <label htmlFor="woman">Kvinna</label>
                    </div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="phonenumber">Telefonnummer</label>
                    <input id="phonenumber" name="phonenumber" type="tel" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="city">Stad</label>
                    <input id="city" name="city" type="text" />
                </div>
                <div className="input-wrapper">
                    <span className="gender-label">Tävling</span>
                    <div className="radio-wrapper">
                        <input id="triathlon" name="competition" type="radio" value="triathlon" />
                        <label htmlFor="triathlon">Triathlon</label>
                        <input
                            id="olympic-triathlon"
                            name="competition"
                            type="radio"
                            value="olympic-triathlon"
                        />
                        <label htmlFor="olympic-triathlon">Olympiskt Triathlon</label>
                    </div>
                </div>
                <button className="register-form__submit" type="submit">
                    Registrera mig
                </button>
            </form>
        </main>
    );
}
