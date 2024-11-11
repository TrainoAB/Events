import "./page.css";

export default function RulesPage() {

    const setRuleNumber = (index) => {
        if (index < 10) {
            return "0" + index;     // If rule number is less than 10, prefix the number with a 0
        }
        return index;
    }

    return (
        <main id="rulespage">
            <h1>Regler</h1>

            {getRules().map((rule, index) => 
            <section key={index} className="max-width">
                <h2> {setRuleNumber(index + 1)} </h2>
                <hr/>
                <p> {rule} </p>
            </section>)}
        </main>
    );
}

/**
 * Temporary rules
 */
const getRules = () => {
    return ["Lorem ipsum dolor sit amet consectetur. Enim vitae nullam id tempor quis quis. Proin risus id hendrerit neque tristique. Aenean mus sagittis ornare sem morbi tellus. Ultrices ultrices tempus consectetur nulla morbi dui viverra. Commodo justo viverra neque tincidunt tincidunt pellentesque malesuada ac. Egestas ultricies adipiscing ac proin volutpat tincidunt ac.",
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
}