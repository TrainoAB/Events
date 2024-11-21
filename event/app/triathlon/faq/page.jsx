import Accordion from "@/app/components/Accordion";
import "./page.css";

export default function FAQPage() {
    
    // Temporary questions and answers
    const FAQ = [{question: "Hur går jag tillväga för att ...?", answer: "Du går till höger."},
        {question: "Får jag pengarna tillbaka?", answer: "Nej, inga återbetalningar sker."},
        {question: "Hur laddar man ner något?", answer: "Du går dit och sen trycker du där."},
        {question: "Finns det en möjlighet att göra detta?", answer: "Lorem ipsum dolor sit amet consectetur. Enim vitae nullam id tempor quis quis. Proin risus id hendrerit neque tristique. Aenean mus sagittis ornare sem morbi tellus. Ultrices ultrices tempus consectetur nulla morbi dui viverra. Commodo justo viverra neque tincidunt tincidunt pellentesque malesuada ac. Egestas ultricies adipiscing ac proin volutpat tincidunt ac."}
    ];

    return (
        <main id="faqpage" className="gap flex-col align-c">
            <h1 className="faq__title">FAQ</h1>

            {FAQ.map((faq, index) => 
                <Accordion heading={faq.question} text={faq.answer} key={index} />
            )}
        </main>
    );
}
