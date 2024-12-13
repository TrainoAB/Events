"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { updateRule } from "@/app/actions/rule";

import "./page.css";

export default function EditRulePage({ params }) {
    const router = useRouter();
    const [ rule, setRule ] = useState();
    const [state, formAction] = useFormState(updateRule.bind(null, params.ruleid), { message: '', success: false });

    useEffect(() => {
        fetchRule();
    }, []);

    const fetchRule = async () => {
        const response = await fetch(`/api/rule?id=${params.ruleid}`);
        if (response.status === 200) {
            const rule = await response.json();
            setRule(rule);
        }
    }

    const handleCancel = () => {
        router.push(`/admin/${params.id}/rules`);
    }

    return (
        <main id="edit-rule-page" className="flex-col align-c">
            <h1 className="edit-rule-page__title">Redigera Regel</h1>
            { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
            </h2> : <></> }

            { rule ? <form className="edit-rule-form flex-col" action={formAction}>
            <div className="input-wrapper">
                    <label htmlFor="topic">Ämne</label>
                    <input id="topic" name="topic" type="text" defaultValue={rule.topic} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="type">Typ av regel</label>
                    <input id="type" name="type" type="text" defaultValue={rule.type} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="rule">Regel</label>
                    <textarea id="rule" name="rule" rows={10} cols={100} defaultValue={rule.rule} required />
                </div>

                <div className="edit-rule-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Spara </button>
                </div>
            </form> : <></> }
        </main>
    );
}
