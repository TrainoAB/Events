import { Inter } from "next/font/google";
import { TrainoContextProvider } from "./context/TrainoContext";
import DevLogin from "./components/DevLogin";

import "./globals.css";

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
                    <DevLogin>{children}</DevLogin>
                </body>
            </html>
        </TrainoContextProvider>
    );
}
