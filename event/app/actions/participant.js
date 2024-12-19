'use server';

import { redirect } from 'next/navigation';
import { insertParticipant } from "@/db/db";

export async function createParticipant(id, _prevState, formData) {
    if (formData.get('webpage')) {
        return { message: `En icke giltig ansökan ${formData.get('webpage')}`, success: false };
    }
    
    const participant = {
        forename: formData.get('forename'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        phone: formData.get('phonenumber'),
        age: formData.get('age'),
        city: formData.get('city'),
        competition: formData.get('competition'),
        gender: formData.get('gender'),
        event_id: id
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

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env?.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Triathlon <events@traino.nu>',
                to: `${participant.email}`,
                subject: 'TRAINO Triathlon',
                html: `<strong><h1>Tack för ditt engagemang!<h1></strong><br><br><h2>Du har blivit registrerad som deltagare för TRAINO Triathlon som går av stapeln 16:e Augusti 2025.</h2>`,
            }),
        });

        redirect('/triathlon/confirmation');
    }
}