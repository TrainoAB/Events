'use client';

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Accordion from "@/app/components/Accordion";

import "./page.css";

export default function FAQPage() {
    const [ faqs, setFaqs ] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        const response = await fetch(`/api/faqs?url=${pathname.split('/')[1]}`);      //TODO Change so that id is used instead of url
        if (response.status === 200) {
            const faqs = await response.json();
            setFaqs(faqs);
        }
    }

    return (
        <main id="faqpage" className="gap flex-col align-c">
            <h1 className="faq__title">FAQ</h1>

            {faqs ? faqs.map((faq, index) => 
                <Accordion heading={faq.question} text={faq.answer} key={index} />
            ) : <></> }
        </main>
    );
}
