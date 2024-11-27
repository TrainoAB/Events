"use client";

import { createContext, useContext } from "react";

// Get the DEBUG value
const DEBUG = process.env.NEXT_PUBLIC_DEBUG === "true";

// Create a context
const DebugContext = createContext(null);

// Create the context provider component
export function DebugContextProvider({ children }) {
    return <DebugContext.Provider value={{ DEBUG }}>{children}</DebugContext.Provider>;
}

// Create custom hook for using the context value(s)
export function useDebugContext() {
    const context = useContext(DebugContext);

    // Ensure the context is used within the provider
    if (!context) {
        throw new Error("useDebugContext must be used within a DebugContextProvider");
    }

    return context;
}
