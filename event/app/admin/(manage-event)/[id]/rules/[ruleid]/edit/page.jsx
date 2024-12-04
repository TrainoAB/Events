"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateRule } from "@/app/actions/rule";

import "./page.css";

export default function EditRulePage({ params }) {
    const router = useRouter();
    const [ rule, setRule ] = useState();

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
        router.back();
    }

    const handleConfirm = () => {
        router.push(`/admin/${params.id}/rules`);
    }

    return (
        <main id="edit-rule-page" className="flex-col align-c">
            <h1 className="edit-rule-page__title">Redigera Regel</h1>

            { rule ? <form className="edit-rule-form flex-col" action={updateRule.bind(null, rule.id)}>
                <div className="input-wrapper">
                    <label htmlFor="rule">Regel</label>
                    <textarea id="rule" name="rule" rows={10} cols={100} defaultValue={rule.rule} required />
                </div>

                <div className="edit-rule-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button onClick={handleConfirm}> Spara </button>
                </div>
            </form> : <></> }
        </main>
    );
}
