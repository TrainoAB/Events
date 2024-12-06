"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { createRule } from "@/app/actions/rule";

import "./page.css";

export default function AddRulePage({ params }) {
    const [state, formAction] = useFormState(createRule.bind(null, params.id), { message: '', success: false });
    const formRef = useRef();
    const router = useRouter();

    const handleCancel = () => {
        router.push(`/admin/${params.id}/rules`);
    }

    return (
        <main id="add-rule-page" className="flex-col align-c">
            <h1 className="add-rule-page__title">Lägg till Regel</h1>
            { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
                {state?.message ? formRef.current?.reset() : <></>}
            </h2> : <></> }

            <form className="add-rule-form flex-col" ref={formRef} action={formAction}>
                <div className="input-wrapper">
                    <label htmlFor="rule">Regel</label>
                    <textarea id="rule" name="rule" type="text" rows={10} cols={100} required />
                </div>

                <div className="add-rule-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
