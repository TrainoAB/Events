"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { updateFaq } from "@/app/actions/faq";

import "./page.css";

export default function EditFaqPage({ params }) {
    const router = useRouter();
    const [ faq, setFaq ] = useState();
    const [state, formAction] = useFormState(updateFaq.bind(null, params.faqid), { message: '' });

    useEffect(() => {
        fetchFaq();
    }, []);

    const fetchFaq = async () => {
        const response = await fetch(`/api/faq?id=${params.faqid}`);
        if (response.status === 200) {
            const faq = await response.json();
            setFaq(faq);
        }
    }

    const handleCancel = () => {
        router.push(`/admin/${params.id}/faqs`);
    }

    return (
        <main id="edit-faq-page" className="flex-col align-c">
            <h1 className="edit-faq-page__title">Redigera FAQ</h1>
            <h2 className="edit-faq-page__message">
                {state?.message}
            </h2>

            { faq ? <form className="edit-faq-form flex-col" action={formAction}>
                        <div className="input-wrapper">
                            <label htmlFor="question">Fråga</label>
                            <textarea id="question" name="question" type="text" rows={10} cols={100} defaultValue={faq.question} required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="answer">Svar</label>
                            <textarea id="answer" name="answer" type="text" rows={10} cols={100} defaultValue={faq.answer} required />
                        </div>

                <div className="edit-faq-form__buttons">
                    <button onClick={handleCancel} type="reset"> Avbryt </button>
                    <button> Spara </button>
                </div>
            </form> : <></> }
        </main>
    );
}
