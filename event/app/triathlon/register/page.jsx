'use client';

import { useRouter } from "next/navigation";
import { createParticipant } from "@/app/actions/participant";

import "./page.css";

export default function RegisterPage() {
    const router = useRouter();

    const handleSubmit = () => {
        router.push("/triathlon/participants");
    }

    return (
        <main id="registerpage" className="max-width gap flex-col align-c">
            <h1 className="register-title">Registrera</h1>
            <form className="register-form flex-col" action={createParticipant}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="forename">Förnamn</label>
                    <input id="forename" name="forename" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="surname">Efternamn</label>
                    <input id="surname" name="surname" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="age">Ålder</label>
                    <input id="age" name="age" type="text" required />
                </div>
                <div className="input-wrapper input-wrapper--radio">
                    <span className="gender-label">Kön</span>
                    <label className="radio-wrapper" htmlFor="man">
                        <input id="man" name="gender" type="radio" value="male" required />
                        <div className="radio-btn"></div>
                        <span className="radio-label">Man</span>
                    </label>
                    <label className="radio-wrapper" htmlFor="woman">
                        <input id="woman" name="gender" type="radio" value="female" />
                        <div className="radio-btn"></div>
                        <span>Kvinna</span>
                    </label>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="phonenumber">Telefonnummer</label>
                    <input id="phonenumber" name="phonenumber" type="tel" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="city">Stad</label>
                    <input id="city" name="city" type="text" required />
                </div>
                <div className="input-wrapper input-wrapper--radio">
                    <span className="gender-label">Tävling</span>
                    <label className="radio-wrapper" htmlFor="triathlon">
                        <input
                            id="triathlon"
                            name="competition"
                            type="radio"
                            value="Triathlon"
                            required
                        />
                        <div className="radio-btn"></div>
                        <span>Triathlon</span>
                    </label>
                    <label className="radio-wrapper" htmlFor="olympic-triathlon">
                        <input
                            id="olympic-triathlon"
                            name="competition"
                            type="radio"
                            value="Olympiskt Triathlon"
                        />
                        <div className="radio-btn"></div>
                        <span>Olympiskt Triathlon</span>
                    </label>
                </div>
                <button className="register-form__submit" onClick={handleSubmit}>
                    Registrera mig
                </button>
            </form>
        </main>
    );
}
