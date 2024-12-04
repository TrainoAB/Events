"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Modal } from "@/app/components/Modal";

import "./page.css";

export default function ManageDiscountsPage({ params }) {
    const [ rule, setRule ] = useState();
    const [ rules, setRules ] = useState([]);
    const [ modalText, setModalText ] = useState("Är du säker på att du vill ta bort regeln?");

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

    return (
        <main id="manage-rules-page" className="flex-col align-c">
            <h1 className="manage-rules-page__title">Regler</h1>
            <div className="rule-list flex-col">
                {rules ? rules.map((rule, index) => (
                    <div className="rule-wrapper" key={index}>
                        
                        <button className="delete-btn" onClick={() => handleDeleteClick(rule)}> Radera </button>
                    </div>
                )) : <></> }
            </div>

            <Modal title={modalText} handleConfirm={handleConfirm} />

            <Link href={`/admin/${params.id}/rules/add`} className="manage-rules__add-link">
                <button className="add-btn"></button>
            </Link>
        </main>
    );
}
