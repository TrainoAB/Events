import { cookies } from "next/headers";

import AdminLoginForm from "./AdminLoginForm";

export default async function AdminLogin({ children }) {
    // Get the password from cookies
    const cookieStore = await cookies();
    const password = cookieStore.get("admin-password") || null;

    // Check that there's a password cookie and that it's correct
    const isLoggedIn = password && password.value === process.env.ADMIN_PASSWORD;

    return <>{isLoggedIn ? children : <AdminLoginForm />}</>;
}
