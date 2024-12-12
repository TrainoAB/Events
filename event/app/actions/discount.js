'use server';

import { updateDiscountById, insertDiscount } from "@/db/db";

export async function createDiscount(id, sponsorId, _prevState, formData) {
    if (formData.get('valid_from').localeCompare(formData.get('valid_to')) > 0) {
        return { message: "Giltigheten måste börja tidigare än utgångsdatum", success: false };
    }
    
    const discount = {
        title: formData.get('title'),
        valid_from: formData.get('valid_from'),
        valid_to: formData.get('valid_to'),
        url: formData.get('link') || "#",
        description: formData.get('description'),
        sponsor_id: sponsorId,
        discount: formData.get('discount'),
        eventId: id
    };

    // TODO: validate data

    const { error } = await insertDiscount(discount);
    if (error) {
        console.log(error);
        return { message: "Rabatten kunde inte skapas.", success: false};
    } else {
        console.log('Created discount ' + JSON.stringify(discount));
        return { message: "Rabatten skapades.", success: true };
    }
}

export async function updateDiscount(id, _prevState, formData) {
    if (formData.get('valid_from').localeCompare(formData.get('valid_to')) > 0) {
        return { message: "Giltigheten måste börja tidigare än utgångsdatum", success: false };
    }

    const discount = {
        title: formData.get('title'),
        valid_from: formData.get('valid_from'),
        valid_to: formData.get('valid_to'),
        url: formData.get('link') || "#",
        description: formData.get('description'),
        discount: formData.get('discount')
    };

    // TODO: validate data
    
    const { error } = await updateDiscountById(discount, id);
    if (error) {
        console.log(error);
        return { message: "Rabatten kunde inte uppdateras.", success: false };
    } else {
        console.log('Updated discount ' + JSON.stringify(discount));
        return { message: "Rabatten har uppdaterats.", success: true };
    }
}