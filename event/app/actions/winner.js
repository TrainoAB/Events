'use server';

import { updateWinnerById, insertWinner } from "@/db/db";

export async function createWinner(id, prevState, formData) {
    const winner = {
        finish_time: formData.get('finish_time'),
        participant_id: formData.get('participant_id'),
        eventId: id
    };

    // TODO: validate data

    const { error } = await insertWinner(winner);
    if (error) {
        console.log(error);
        return { message: "Vinnaren kunde inte skapas.", success: false};
    } else {
        console.log('Created winner ' + JSON.stringify(winner));
        return { message: "Vinnaren skapades.", success: true };
    }
}

export async function updateWinner(id, prevState, formData) {
    const winner = {
        finish_time: formData.get('finish_time')
    };

    // TODO: validate data
    
    const { error } = await updateWinnerById(winner, id);
    if (error) {
        console.log(error);
        return { message: "Vinnaren kunde inte uppdateras.", success: false };
    } else {
        console.log('Updated winner ' + JSON.stringify(winner));
        return { message: "Vinnaren har uppdaterats.", success: true };
    }
}