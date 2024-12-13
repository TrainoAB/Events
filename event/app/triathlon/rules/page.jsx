'use client';

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import "./page.css";

export default function RulesPage() {
    const [ rules, setRules ] = useState([]);
    const pathname = usePathname();
    const topics = new Map();
    const types = new Map();
    let lastTopic = "";

    useEffect(() => {
        fetchRules();
    }, []);

    const fetchRules = async () => {
        const response = await fetch(`/api/rules?url=${pathname.split('/')[1]}`);      //TODO Change so that id is used instead of url
        if (response.status === 200) {
            const resp = await response.json();
            setRules(sortTopicsAndTypes(resp));
        }
    }

    const sortTopicsAndTypes = (rules) => {
        for (const rule in rules) {
            const ruleTopic = rules[rule].topic;
            const ruleType = ruleTopic + '-' + rules[rule].type;
            const ruleText = rules[rule].rule;

            if (!topics.has(ruleTopic)) {
                topics.set(ruleTopic, [ruleType]);
                types.set(ruleType, [ruleText]);
            } else {
                if (!topics.get(ruleTopic).includes(ruleType)) {
                    topics.get(ruleTopic).push(ruleType);
                    types.set(ruleType, [ruleText]);
                } else {
                    if (!types.get(ruleType).includes(ruleText)) {
                        types.get(ruleType).push(ruleText);
                    }
                }
            }
        }
        return Array.from(types);
    }

    const setRuleNumber = (index) => {
        if (index < 10) {
            return "0" + index;     // If rule number is less than 10, prefix the number with a 0
        }
        return index;
    }

    const setTopicAndText = (rule, index) => {
        if (index === 0) {
            const topicAndText = rule.split("-");
            if (lastTopic !== topicAndText[0]) {
                lastTopic = topicAndText[0];
                return (<div key={index}>
                    <h1 className="rule-topic">{topicAndText[0]}</h1>
                    <h2 className="rule-type">{topicAndText[1]}</h2>
                </div>);
            }
            return (<h2 className="rule-type" key={index}>{topicAndText[1]}</h2>);
        }
      
        return (<>{rule.map((el, index) => 
            <section key={index} className="rule-wrapper max-width">
                <div className="rule-number-wrapper">
                    <h2 className="rule__number"> {setRuleNumber(index + 1)} </h2>
                    <hr/>
                    <p className="rule__text"> {el} </p>
                </div>
            </section>)}</>);
    }

    return (
        <main id="rulespage" className="gap flex-col align-c">
            <h1 className="rules__title">Triathlonregler</h1>

            <h2 className="rules__title-text">
                Här är en sammanfattning av vanliga regler och orsaker till diskvalifikation i triathlon, enligt 
                standardiserade tävlingsregler från organisationer som World Triathlon och Svenska Triathlonförbundet. 
                Reglerna kan variera lite beroende på arrangören, men här är de grundläggande:
            </h2>

            <section className="rules-list-wrapper">
                { rules ? rules.map(rule => 
                <>
                    {rule.map((el, index) => { return ( <>{setTopicAndText(el, index)}</>)})}
                </>
                ) : <></> }

            </section>
        </main>
    );
}