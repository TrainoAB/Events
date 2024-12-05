"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Modal } from "@/app/components/Modal";

import "./page.css";

export default function ManageRulesPage({ params }) {
    const [ rule, setRule ] = useState();
    const [ rules, setRules ] = useState([]);
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort regeln?");
    const router = useRouter();

    useEffect(() => {
        fetchRules();
    }, []);

    const fetchRules = async () => {
        const response = await fetch(`/api/rules?id=${params.id}`);     // Fetches all rules for specific event id
        if (response.status === 200) {
            const rules = await response.json();
            setRules(rules);
        }
    }

    const deleteRule = async (id) => {
        await fetch('/api/rule', {
            method:'DELETE',
            body:JSON.stringify({
                'id':id
            })
        });

        fetchRules();
    }

    const handleDeleteClick = (rule) => {
        setRule(rule);
        document.querySelector("#modal").showModal();
        setModalText(`Är du säker på att du vill ta bort regeln?`);
    }

    const handleConfirm = () => {
        deleteRule(rule.id);
    };

    const setRuleNumber = (index) => {
        if (index < 10) {
            return "0" + index;     // If rule number is less than 10, prefix the number with a 0
        }
        return index;
    }

    const handleEditRule = (rule) => {
        router.push(`/admin/${rule.eventId}/rules/${rule.id}/edit`);
    }

    return (
        <main id="manage-rules-page" className="flex-col align-c">
            <h1 className="manage-rules-page__title">Regler</h1>
            <div className="rule-list flex-col">
                {rules?.length > 0 ? rules.map((rule, index) => (
                    <div className="rule-wrapper" key={index}>
                        <section className="rule-section-wrapper max-width" onClick={() => handleEditRule(rule)}>
                            <div className="rule-number-wrapper">
                                <h2 className="rule__number"> {setRuleNumber(index + 1)} </h2>
                                <hr/>
                            </div>
                            <p className="rule__text"> {rule.rule} </p>
                        </section>
                        <button className="delete-btn" onClick={() => handleDeleteClick(rule)}> Radera </button>
                    </div>
                )) : (
                    <p>Inga regler finns än för detta event.</p>
                )}
            </div>

            <Modal title={modalText} handleConfirm={handleConfirm} />

            <Link href={`/admin/${params.id}/rules/add`} className="manage-rules__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}
