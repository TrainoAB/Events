'use server';

import { updateDiscountById, insertDiscount } from "@/db/db";

export async function createDiscount(id, formData) {
    console.log('ID ' + id);
    const discount = {
        title: formData.get('title'),
        expiration: formData.get('expiration'),
        url: formData.get('link') || "#",
        description: formData.get('description'),
        discount: formData.get('discount'),
        eventId: id
    };

    // validate data

    const { error } = await insertDiscount(discount);
    if (error) {
        console.log(error);
    } else {
        console.log('Created discount ' + JSON.stringify(discount));
    }
}

export async function updateDiscount(id, formData) {
    const discount = {
        title: formData.get('title'),
        expiration: formData.get('expiration'),
        url: formData.get('link') || "#",
        description: formData.get('description'),
        discount: formData.get('discount')
    };

    // validate data
    
    const { error } = await updateDiscountById(discount, id);
    if (error) {
        console.log(error);
    } else {
        console.log('Updated discount ' + JSON.stringify(discount));
    }
}