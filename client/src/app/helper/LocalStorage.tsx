import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue; // Return initial value if not in the browser
        }
        const item = window.localStorage.getItem(key);
        return item ? item : initialValue;
    });

    const setValue = (value: T) => {
        setStoredValue(value);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    };

    return [storedValue, setValue] as const;
}


