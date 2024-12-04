"use client";

import { useRouter } from "next/navigation";
import { createFaq } from "@/app/actions/faq";

import "./page.css";

export default function AddFaqPage({ params }) {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    }

    const handleConfirm = () => {
        router.push(`/admin/${params.id}/faqs`);
    }

    return (
        <main id="add-faq-page" className="flex-col align-c">
            <h1 className="add-faq-page__title">Lägg till FAQ</h1>

            <form className="add-faq-form flex-col" action={createFaq.bind(null, params.id)}>
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
                    <button onClick={handleConfirm}> Lägg till </button>
                </div>
            </form>
        </main>
    );
}
