import Header from "./Header"
import Button from "./Button"
import { createContext } from "react"

const ThemeContext = createContext("light")

export default function Theme() {
    return (
        <ThemeContext.Provider value="light">
            <section className="container dark-theme flex flex-col items-center bg-gray-100 p-10 rounded-md shadow-md gap-5">
                <Header />
                <Button />
            </section>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }