'use server';

import { updateFaqById, insertFaq } from "@/db/db";

export async function createFaq(id, prevState, formData) {
    const faq = {
        question: formData.get('question'),
        answer: formData.get('answer'),
        eventId: id
    };

    // TODO: validate data

    const { error } = await insertFaq(faq);
    if (error) {
        console.log(error);
        return { message: "FAQn kunde inte skapas." };
    } else {
        console.log('Created faq ' + JSON.stringify(faq));
        return { message: "FAQn har blivit skapad." };
    }
}

export async function updateFaq(id, prevState, formData) {
    const faq = {
        question: formData.get('question'),
        answer: formData.get('answer')
    };

    // TODO: validate data
    
    const { error } = await updateFaqById(faq, id);
    if (error) {
        console.log(error);
        return { message: "FAQn kunde inte uppdateras." };
    } else {
        console.log('Updated faq ' + JSON.stringify(faq));
        return { message: "FAQn har blivit uppdaterad." };
    }
}