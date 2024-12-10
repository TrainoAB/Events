"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateWinner } from "@/app/actions/winner";

import "./page.css";

export default function EditWinnerPage({ params }) {
    const [ winner, setWinner ] = useState();
    const [state, formAction] = useFormState(updateWinner.bind(null, params.winnerid), { message: '', success: false });
    const router = useRouter();

    useEffect(() => {
        fetchWinner();
    }, []);

    const fetchWinner = async () => {
        const response = await fetch(`/api/winner?id=${params.winnerid}`);
        if (response.status === 200) {
            const winner = await response.json();
            setWinner(winner);
        }
    }

    const handleCancel = () => {
        router.push(`/admin/${params.id}/winners`);
    }

    const isDefault = (competition) => {
        return competition === winner.competition;
    }

    return (
        <main id="edit-winner-page" className="flex-col align-c">
            <h1 className="edit-winner-page__title">Redigera Vinnare</h1>
            { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
            </h2> : <></> }

            { winner ? <form className="edit-winner-form flex-col" action={formAction}>
            <div className="input-wrapper">
                    <label htmlFor="forename">Förnamn</label>
                    <input id="forename" name="forename" type="text" defaultValue={winner.forename} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="surname">Efternamn</label>
                    <input id="surname" name="surname" type="text" defaultValue={winner.surname} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="city">Stad</label>
                    <input id="city" name="city" type="text" defaultValue={winner.city} required />
                </div>
                <div className="input-wrapper input-wrapper--radio">
                    <span className="gender-label">Tävling</span>
                    <label className="radio-wrapper" htmlFor="triathlon">
                        <input
                            id="triathlon"
                            name="competition"
                            type="radio"
                            defaultChecked={isDefault("Triathlon")}
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
                            defaultChecked={isDefault("Olympiskt Triathlon")}
                            value="Olympiskt Triathlon"
                        />
                        <div className="radio-btn"></div>
                        <span>Olympiskt Triathlon</span>
                    </label>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="result">Resultat</label>
                    <input id="result" name="result" type="text" defaultValue={winner.result} required />
                </div>

                <div className="edit-winner-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Spara </button>
                </div>
            </form> : <></> }
        </main>
    );
}
