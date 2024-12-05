'use server';

import { updateRuleById, insertRule } from "@/db/db";

export async function createRule(id, prevState, formData) {
    const rule = {
        rule: formData.get('rule'),
        eventId: id
    };

    // TODO: validate data

    const { error } = await insertRule(rule);
    if (error) {
        console.log(error);
        return { message: "Regeln kunde inte skapas." };
    } else {
        console.log('Created rule ' + JSON.stringify(rule));
        return { message: "Regeln har blivit skapad." };
    }
}

export async function updateRule(id, prevState, formData) {
    const rule = {
        rule: formData.get('rule')
    };

    // TODO: validate data
    
    const { error } = await updateRuleById(rule, id);
    if (error) {
        console.log(error);
        return { message: "Regeln kunde inte uppdateras." };
    } else {
        console.log('Updated rule ' + JSON.stringify(rule));
        return { message: "Regeln har blivit uppdaterad." };
    }
}