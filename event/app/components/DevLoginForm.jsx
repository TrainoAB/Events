"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function DevLoginForm() {
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSetPassword = async () => {
        try {
            const response = await fetch(`/api/login?password=${password}`);
            const data = await response.json();

            if (data.success) {
                // If the password is correct, set it as a cookie
                document.cookie = `password=${password}; path=/;`;
                router.refresh();
            } else {
                // If the password is incorrect, show an error message
                alert("Password is incorrect. Please try again.");
            }
        } catch (error) {
            console.error("Error checking password:", error);
            alert("There was an error processing your request. Please try again.");
        }
    };

    return (
        <div className={styles.login}>
            <h1>Password</h1>

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />

            <button onClick={handleSetPassword}>Enter</button>
        </div>
    );
}
