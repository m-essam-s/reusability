import React from "react"
import { ThemeContext } from "./Theme"

export default function Header() {
    const value = React.useContext(ThemeContext)

    return (
        <header className={`${value}-theme flex flex-col items-start p-4`}>
            <h1 className='text-3xl'> Theme App with context </h1>
            <h1>{value === "light" ? "Light" : "Dark"} Theme</h1>
        </header>
    )
}