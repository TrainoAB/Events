"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { createFaq } from "@/app/actions/faq";

import "./page.css";

export default function AddFaqPage({ params }) {
    const [state, formAction] = useFormState(createFaq.bind(null, params.id), { message: '', success: false });
    const formRef = useRef();
    const router = useRouter();

    const handleCancel = () => {
        router.push(`/admin/${params.id}/faqs`);
    }

    return (
        <main id="add-faq-page" className="flex-col align-c">
            <h1 className="add-faq-page__title">Lägg till FAQ</h1>
            { state?.message ? <h2 className={state?.success ? "message-success" : "message-failure"}>
                {state?.message}
                {state?.message ? formRef.current?.reset() : <></>}
            </h2> : <></> }

            <form className="add-faq-form flex-col" ref={formRef} action={formAction}>
                <div className="input-wrapper">
                    <label htmlFor="question">Fråga</label>
                    <textarea id="question" name="question" type="text" rows={10} cols={100} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="answer">Svar</label>
                    <textarea id="answer" name="answer" type="text" rows={10} cols={100} required />
                </div>

                <div className="add-faq-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
