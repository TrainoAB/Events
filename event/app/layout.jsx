import { Inter } from "next/font/google";
import "./globals.css";
import DevLogin from "./components/DevLogin";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "TRAINO Events",
    description: "Upcoming events created by Traino",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <DevLogin>
                    {children}
                </DevLogin>
            </body>
        </html>
    );
}
