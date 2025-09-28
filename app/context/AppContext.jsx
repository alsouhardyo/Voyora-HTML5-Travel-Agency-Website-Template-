"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { destinations } from "../_lib/destinations.js";

// 1️⃣ Create the context
const AppContext = createContext();

// 2️⃣ Create the provider component
export function AppProvider({ children }) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [destinationsData, setDestinationsData] = useState(destinations);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 5000);
        return () => clearTimeout(timer);
    }, [pathname]);

    const value = {
        activeCategory,
        setActiveCategory,
        destinations,
        destinationsData,
        setDestinationsData,
        isLoading,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// 3️⃣ Custom hook
export function useAppContext() {
    return useContext(AppContext);
}
