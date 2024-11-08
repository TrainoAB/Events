import { cookies } from "next/headers";

import DevLoginForm from "./DevLoginForm";

export default async function DevLogin({ children }) {

    const cookieStore = await cookies();
    const password = cookieStore.get("password");
    const isLoggedIn = password && password.value === process.env.PASSWORD;

    return <>{isLoggedIn ? children : <DevLoginForm />}</>;
}
