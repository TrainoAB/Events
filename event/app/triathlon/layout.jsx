import { getEventByUrl } from "@/db/db";
import AuthLogin from "../components/AuthLogin";
import DevLoginForm from "../components/DevLoginForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DEBUG = process.env.NEXT_PUBLIC_DEBUG === "true";

export default async function EventLayout({ children }) {
    // NOTE: This will fetch info about one event based on the url specified in the database,
    // it will need to be updated for each event that is added to the project
    const { error, data: event } = await getEventByUrl("/triathlon");
    DEBUG && console.log("(triathlon/layout) dev_mode:", event.dev_mode);
    (DEBUG && error) && console.error("Error in triathlon/layout", error);

    return (
        <AuthLogin
            FormComponent={DevLoginForm}
            cookie={"password"}
            envPassword={"PASSWORD"}
            enabled={event.dev_mode}
        >
            <Header />
            {children}
            <Footer />
        </AuthLogin>
    );
}
