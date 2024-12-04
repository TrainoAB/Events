'use client';

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import "./page.css";

export default function RulesPage() {
    const [ rules, setRules ] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        fetchRules();
    }, []);

    const fetchRules = async () => {
        const response = await fetch(`/api/rules?url=${pathname.split('/')[1]}`);      //TODO Change so that id is used instead of url
        if (response.status === 200) {
            const rules = await response.json();
            setRules(rules);
        }
    }

    const setRuleNumber = (index) => {
        if (index < 10) {
            return "0" + index;     // If rule number is less than 10, prefix the number with a 0
        }
        return index;
    }

    return (
        <main id="rulespage" className="gap flex-col align-c">
            <h1 className="rules__title">Regler</h1>

            { rules ? rules.map((rule, index) => 
                <section key={index} className="rule-wrapper max-width">
                    <div className="rule-number-wrapper">
                        <h2 className="rule__number"> {setRuleNumber(index + 1)} </h2>
                        <hr/>
                    </div>
                    <p className="rule__text"> {rule.rule} </p>
                </section>
            ) : <></> }
        </main>
    );
}