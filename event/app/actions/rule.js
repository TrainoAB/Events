'use server';

import { updateRuleById, insertRule } from "@/db/db";

export async function createRule(id, formData) {
    const rule = {
        rule: formData.get('rule'),
        eventId: id
    };

    // TODO: validate data

    const { error } = await insertRule(rule);
    if (error) {
        console.log(error);
    } else {
        console.log('Created rule ' + JSON.stringify(rule));
    }
}

export async function updateRule(id, formData) {
    const rule = {
        rule: formData.get('rule')
    };

    // TODO: validate data
    
    const { error } = await updateRuleById(rule, id);
    if (error) {
        console.log(error);
    } else {
        console.log('Updated rule ' + JSON.stringify(rule));
    }
}