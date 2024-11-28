"use client";

import { createContext, useContext } from "react";

// Get the DEBUG and BASE_URL value from .env.local
const DEBUG = process.env.NEXT_PUBLIC_DEBUG === "true";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Create a context
const TrainoContext = createContext(null);

// Create the context provider component
export function TrainoContextProvider({ children }) {
    return <TrainoContext.Provider value={{ DEBUG, BASE_URL }}>{children}</TrainoContext.Provider>;
}

// Create custom hook for using the context value(s)
export function useTrainoContext() {
    const context = useContext(TrainoContext);

    // Ensure the context is used within the provider
    if (!context) {
        throw new Error("useTrainoContext must be used within a TrainoContextProvider");
    }

    return context;
}
