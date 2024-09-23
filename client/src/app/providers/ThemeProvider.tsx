"use client"

import { createContext, useContext, ReactNode, useEffect, useState } from "react";

// Define a type for the context value
interface ThemeContextProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const themeStorage = localStorage.getItem('theme');
        if (!themeStorage) {
            localStorage.setItem('theme', 'dark');
            setTheme('dark')
        } else {
            setTheme(themeStorage);
        }
    }, []);

    useEffect(() => {
        if (theme) {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);    

    if (!theme) return null

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { useThemeContext, ThemeProvider };
