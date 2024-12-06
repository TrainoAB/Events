'use server';

import { insertParticipant } from "@/db/db";

export async function createParticipant(prevState, formData) {
    const participant = {
        forename: formData.get('forename'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        phone: formData.get('phonenumber'),
        age: formData.get('age'),
        city: formData.get('city'),
        competition: formData.get('competition'),
        gender: formData.get('gender')
    };

    // TODO: validate data

    const { error } = await insertParticipant(participant);
    if (error) {
        console.log(error);
        if (error.code == '23505') {
            return { message: `${participant.email} är redan anmäld till tävlingen`, success: false };
        }
        return { message: "Du kunde inte registreras som deltagare", success: false };
    } else {
        console.log('Created participant ' + JSON.stringify(participant));
        return { message: "Du har blivit registrerad som deltagare", success: true };
    }
}