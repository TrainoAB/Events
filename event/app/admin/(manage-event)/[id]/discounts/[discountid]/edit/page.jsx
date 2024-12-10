"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateDiscount } from "@/app/actions/discount";

import "./page.css";

export default function EditDiscountPage({ params }) {
    const [ discount, setDiscount ] = useState();
    const [state, formAction] = useFormState(updateDiscount.bind(null, params.discountid), { message: '', success: false });
    const router = useRouter();

    useEffect(() => {
        fetchDiscount();
    }, []);

    const fetchDiscount = async () => {
        const response = await fetch(`/api/discount?id=${params.discountid}`);
        if (response.status === 200) {
            const discount = await response.json();
            setDiscount(discount);
        }
    }

    const handleCancel = () => {
        router.push(`/admin/${params.id}/discounts`);
    }

    return (
        <main id="edit-discount-page" className="flex-col align-c">
            <h1 className="edit-discount-page__title">Redigera Rabatt</h1>
            { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
            </h2> : <></> }

            { discount ? <form className="edit-discount-form flex-col" action={formAction}>
                <div className="input-wrapper">
                    <label htmlFor="title">Rubrik</label>
                    <input id="title" name="title" type="text" defaultValue={discount.title} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="discount">Rabatt</label>
                    <input
                        id="discount"
                        name="discount"
                        type="number"
                        defaultValue={discount.discount}
                        step={1}
                        min={1}
                        max={100}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="link">Länk</label>
                    <input id="link" name="link" type="text" defaultValue={discount.url} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="valid_from">Datum när rabatten börjar gälla</label>
                    <input id="valid_from" name="valid_from" type="date" defaultValue={discount.valid_from} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="valid_to">Datum när rabatten slutar gälla</label>
                    <input id="valid_to" name="valid_to" type="date" defaultValue={discount.valid_to} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="description">Beskrivning</label>
                    <textarea id="description" name="description" rows={10} cols={100} defaultValue={discount.description} required />
                </div>

                <div className="edit-discount-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Spara </button>
                </div>
            </form> : <></> }
        </main>
    );
}
