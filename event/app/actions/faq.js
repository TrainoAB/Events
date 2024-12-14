'use server';

import { updateFaqById, insertFaq } from "@/db/db";

export async function createFaq(id, _prevState, formData) {
    const faq = {
        question: formData.get('question'),
        answer: formData.get('answer'),
        event_id: id
    };

    // TODO: validate data

    const { error } = await insertFaq(faq);
    if (error) {
        console.log(error);
        return { message: "FAQn kunde inte skapas.", success: false };
    } else {
        console.log('Created faq ' + JSON.stringify(faq));
        return { message: "FAQn har blivit skapad.", success: true };
    }
}

export async function updateFaq(id, _prevState, formData) {
    const faq = {
        question: formData.get('question'),
        answer: formData.get('answer')
    };

    // TODO: validate data
    
    const { error } = await updateFaqById(faq, id);
    if (error) {
        console.log(error);
        return { message: "FAQn kunde inte uppdateras.", success: false };
    } else {
        console.log('Updated faq ' + JSON.stringify(faq));
        return { message: "FAQn har blivit uppdaterad.", success: true };
    }
}