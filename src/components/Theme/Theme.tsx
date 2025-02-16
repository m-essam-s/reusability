import Header from "./Header"
import Button from "./Button"
import { createContext, useState } from "react"

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "light", toggleTheme: () => { } });

export default function Theme() {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <section className={`container ${theme}-theme flex flex-col items-center bg-gray-100 p-10 rounded-md shadow-md gap-5`}>
                <Header />
                <Button />
            </section>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }