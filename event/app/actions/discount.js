'use server';

import { updateDiscountById, insertDiscount } from "@/db/db";

export async function createDiscount(id, prevState, formData) {
    const discount = {
        title: formData.get('title'),
        from: formData.get('from'),
        to: formData.get('to'),
        url: formData.get('link') || "#",
        description: formData.get('description'),
        discount: formData.get('discount'),
        eventId: id
    };

    // TODO: validate data

    const { error } = await insertDiscount(discount);
    if (error) {
        console.log(error);
        return { message: "Rabatten kunde inte skapas." };
    } else {
        console.log('Created discount ' + JSON.stringify(discount));
        return { message: "Rabatten skapades." };
    }
}

export async function updateDiscount(id, prevState, formData) {
    const discount = {
        title: formData.get('title'),
        from: formData.get('from'),
        to: formData.get('to'),
        url: formData.get('link') || "#",
        description: formData.get('description'),
        discount: formData.get('discount')
    };

    // TODO: validate data
    
    const { error } = await updateDiscountById(discount, id);
    if (error) {
        console.log(error);
        return { message: "Rabatten kunde inte uppdateras." };
    } else {
        console.log('Updated discount ' + JSON.stringify(discount));
        return { message: "Rabatten har uppdaterats." };
    }
}