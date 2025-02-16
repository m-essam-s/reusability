import { useContext } from "react"
import { ThemeContext } from "./Theme"

export default function Button() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button
            className={`${theme}-theme`}
            onClick={toggleTheme}
        >
            Switch Theme
        </button>
    )
}