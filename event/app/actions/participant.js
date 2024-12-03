'use server';

import { insertParticipant } from "@/db/db";

export async function createParticipant(formData) {
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
    } else {
        console.log('Created participant ' + JSON.stringify(participant));
    }
}