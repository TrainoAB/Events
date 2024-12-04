"use client";

import { useRouter } from "next/navigation";
import { createRule } from "@/app/actions/rule";

import "./page.css";

export default function AddRulePage({ params }) {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    }

    const handleConfirm = () => {
        router.push(`/admin/${params.id}/rules`);
    }

    return (
        <main id="add-rule-page" className="flex-col align-c">
            <h1 className="add-rule-page__title">Lägg till Regel</h1>

            <form className="add-rule-form flex-col" action={createRule.bind(null, params.id)}>
                <div className="input-wrapper">
                    <label htmlFor="rule">Regel</label>
                    <textarea id="rule" name="rule" type="text" rows={10} cols={100} required />
                </div>

                <div className="add-rule-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button onClick={handleConfirm}> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
