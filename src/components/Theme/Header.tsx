import { useContext } from "react"
import { ThemeContext } from "./Theme"

export default function Header() {
    const value = useContext(ThemeContext)

    return (
        <header className={`${value.theme}-theme flex flex-col items-start p-4`}>
            <h1 className='text-3xl'> Theme App with context </h1>
            <h1>{value.theme === "light" ? "Light" : "Dark"} Theme</h1>
        </header>
    )
}