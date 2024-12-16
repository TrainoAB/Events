import { Inter } from "next/font/google";
import { TrainoContextProvider } from "./context/TrainoContext";
import AuthLogin from "./components/AuthLogin";
import DevLoginForm from "./components/DevLoginForm";

import "./globals.css";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "TRAINO Events",
    description: "Upcoming events created by Traino",
};

export default function RootLayout({ children }) {
    return (
        <TrainoContextProvider>
            <html lang="en">
                <body className={inter.className}>
                    <AuthLogin
                        FormComponent={DevLoginForm}
                        cookie={"password"}
                        envPassword={"PASSWORD"}
                        // TODO: Set disabled when site is live
                        // TODO: Set enabled when you have ensured live works
                        enabled={false}
                    >
                    {children}
                    </AuthLogin>
                </body>
            </html>
        </TrainoContextProvider>
    );
}
