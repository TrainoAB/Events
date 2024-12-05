import { cookies } from "next/headers";

export default async function AuthLogin({ children, cookie, envPassword, FormComponent }) {
    // Get the password from cookies
    const cookieStore = await cookies();
    const password = cookieStore.get(cookie) || null;

    // Check that there's a password cookie and that it's correct
    const isLoggedIn = password && password.value === process.env[envPassword];

    return <>{isLoggedIn ? children : <FormComponent />}</>;
}
