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

    return (
        <main id="edit-winner-page" className="flex-col align-c">
            <h1 className="edit-winner-page__title">Redigera Vinnare</h1>
            { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
            </h2> : <></> }

            { winner ? <form className="edit-winner-form flex-col" action={formAction}>
                <h1 className="edit-winner-form__name">
                    { winner.forename } { winner.surname } från { winner.city }
                </h1>

                <div className="input-wrapper">
                    <label htmlFor="finish_time">Sluttiden</label>
                    <input id="finish_time" name="finish_time" type="time" defaultValue={winner.finish_time} required />
                </div>

                <div className="edit-winner-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Spara </button>
                </div>
            </form> : <></> }
        </main>
    );
}
