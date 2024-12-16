import { cookies } from "next/headers";

export default async function AuthLogin({
    children,
    cookie,
    envPassword,
    FormComponent,
    enabled = true,
}) {
    // Get the password from cookies
    const cookieStore = await cookies();
    const password = cookieStore.get(cookie) || null;

    // Check that there's a password cookie and that it's correct
    const isLoggedIn = password && password.value === process.env[envPassword];

    // If this component is set to be bypassed (not enabled), return children without auth check
    if (!enabled) {
        return children;
    }

    return <>{isLoggedIn ? children : <FormComponent />}</>;
}
