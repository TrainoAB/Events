"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { createDiscount } from "@/app/actions/discount";

import "./page.css";

export default function AddDiscountPage({ params }) {
    const [state, formAction] = useFormState(createDiscount.bind(null, params.id), { message: '', success: false });
    const formRef = useRef();
    const router = useRouter();

    const handleCancel = () => {
        router.push(`/admin/${params.id}/discounts`);
    }

    return (
        <main id="add-discount-page" className="flex-col align-c">
            <h1 className="add-discount-page__title">Lägg till Rabatt</h1>
            { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
                {state?.message ? formRef.current?.reset() : <></>}
            </h2> : <></> }

            <form className="add-discount-form flex-col" ref={formRef} action={formAction}>
                <div className="input-wrapper">
                    <label htmlFor="title">Rubrik</label>
                    <input id="title" name="title" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="discount">Rabatt</label>
                    <input
                        id="discount"
                        name="discount"
                        type="number"
                        step={1}
                        min={1}
                        max={100}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="link">Länk</label>
                    <input id="link" name="link" type="text" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="valid_from">Datum när rabatten börjar gälla</label>
                    <input id="valid_from" name="valid_from" type="date" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="valid_to">Datum när rabatten slutar gälla</label>
                    <input id="valid_to" name="valid_to" type="date" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} required />
                </div>

                <div className="add-discount-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
