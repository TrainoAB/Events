"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTrainoContext } from "../context/TrainoContext";

import "./AdminLoginForm.css";

export default function AdminLoginForm() {
    const { DEBUG } = useTrainoContext();

    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmitPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // Send the password to check if it's correct
            const res = await fetch(`/api/admin-login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
            });
            // If response isn't ok, throw an error
            if (!res.ok) {
                throw new Error("Failed to validate password on the server");
            }
            // Check that the password was correct
            const data = await res.json();
            if (!data.success) {
                throw new Error("Incorrect password");
            }

            DEBUG && console.log("data", data);
            // Refresh the route to show protected content on successful login
            router.refresh();
        } catch (error) {
            DEBUG && console.error(`Admin login error: ${error}`);
            setError(error.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="admin-login-form max-width flex-col align-c">
            <h1 className="admin-login__title">Admin Login</h1>
            <form
                className="admin-login-form__form flex-col align-c"
                onSubmit={handleSubmitPassword}
            >
                <div className="input-wrapper">
                    <label htmlFor="password">Lösenord</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="admin-login-form__submit" type="submit" disabled={isLoading}>
                    {isLoading ? "Loggar in..." : "Logga in"}
                </button>
            </form>
            {error && <div className="feedback">{error}</div>}
        </div>
    );
}
