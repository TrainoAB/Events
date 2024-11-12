import "./page.css";

export default function RulesPage() {

    /**
     * Temporary rules
     */
    const RULES = ["Lorem ipsum dolor sit amet consectetur. Enim vitae nullam id tempor quis quis. Proin risus id hendrerit neque tristique. Aenean mus sagittis ornare sem morbi tellus. Ultrices ultrices tempus consectetur nulla morbi dui viverra. Commodo justo viverra neque tincidunt tincidunt pellentesque malesuada ac. Egestas ultricies adipiscing ac proin volutpat tincidunt ac.",
        "Lorem ipsum dolor sit amet consectetur. Enim vitae nullam id tempor quis quis. Proin risus id hendrerit neque tristique. Aenean mus sagittis ornare sem morbi tellus. Ultrices ultrices tempus consectetur nulla morbi dui viverra. Commodo justo viverra neque tincidunt tincidunt pellentesque malesuada ac. Egestas ultricies adipiscing ac proin volutpat tincidunt ac.",
        "Lorem ipsum dolor sit amet consectetur. Enim vitae nullam id tempor quis quis. Proin risus id hendrerit neque tristique. Aenean mus sagittis ornare sem morbi tellus. Ultrices ultrices tempus consectetur nulla morbi dui viverra. Commodo justo viverra neque tincidunt tincidunt pellentesque malesuada ac. Egestas ultricies adipiscing ac proin volutpat tincidunt ac.",
        "Lorem ipsum dolor sit amet consectetur. Nulla fames phasellus donec ullamcorper nam blandit tellus nullam. Nibh amet faucibus risus odio. At nunc morbi hendrerit ut urna arcu velit faucibus. Ornare dignissim sit nunc eget.",
        "Lorem ipsum dolor sit amet consectetur. Nulla fames phasellus donec ullamcorper nam blandit tellus nullam. Nibh amet faucibus risus odio. At nunc morbi hendrerit ut urna arcu velit faucibus. Ornare dignissim sit nunc eget.",
        "Lorem ipsum dolor sit amet consectetur. Nulla fames phasellus donec ullamcorper nam blandit tellus nullam. Nibh amet faucibus risus odio. At nunc morbi hendrerit ut urna arcu velit faucibus. Ornare dignissim sit nunc eget.",
        "Lorem ipsum dolor sit amet consectetur. Nulla fames phasellus donec ullamcorper nam blandit tellus nullam. Nibh amet faucibus risus odio. At nunc morbi hendrerit ut urna arcu velit faucibus. Ornare dignissim sit nunc eget.",
        "Lorem ipsum dolor sit amet consectetur. Nulla fames phasellus donec ullamcorper nam blandit tellus nullam. Nibh amet faucibus risus odio. At nunc morbi hendrerit ut urna arcu velit faucibus. Ornare dignissim sit nunc eget.",
        "Lorem ipsum dolor sit amet consectetur. Nulla fames phasellus donec ullamcorper nam blandit tellus nullam. Nibh amet faucibus risus odio. At nunc morbi hendrerit ut urna arcu velit faucibus. Ornare dignissim sit nunc eget.",
        "Lorem ipsum dolor sit amet consectetur. Nulla fames phasellus donec ullamcorper nam blandit tellus nullam. Nibh amet faucibus risus odio. At nunc morbi hendrerit ut urna arcu velit faucibus. Ornare dignissim sit nunc eget.",
        "Lorem ipsum dolor sit amet consectetur. Nulla fames phasellus donec ullamcorper nam blandit tellus nullam. Nibh amet faucibus risus odio. At nunc morbi hendrerit ut urna arcu velit faucibus. Ornare dignissim sit nunc eget."
    ];

    const setRuleNumber = (index) => {
        if (index < 10) {
            return "0" + index;     // If rule number is less than 10, prefix the number with a 0
        }
        return index;
    }

    return (
        <main id="rulespage" className="gap">
            <h1 className="rules__title">Regler</h1>

            {RULES.map((rule, index) => 
                <section key={index} className="rule-wrapper max-width">
                    <div className="rule-number-wrapper">
                        <h2 className="rule__number"> {setRuleNumber(index + 1)} </h2>
                        <hr/>
                    </div>
                    <p className="rule__text"> {rule} </p>
                </section>
            )}
        </main>
    );
}