import { cookies } from "next/headers";

import DevLoginForm from "./DevLoginForm";

export default async function DevLogin({ children }) {

    const cookieStore = await cookies();
    console.log(cookieStore);
    const password = cookieStore.get("password");
    console.log("env", process.env.PASSWORD);
    console.log("cookie PW", password);
    const isLoggedIn = password && password.value === process.env.PASSWORD;
    console.log("logged in:", isLoggedIn);


    return <>{isLoggedIn ? children : <DevLoginForm />}</>;
}
