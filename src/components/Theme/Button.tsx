import React from "react"
import { ThemeContext } from "./Theme"

export default function Button() {
    const value = React.useContext(ThemeContext)

    return (
        <button className={`${value}-theme`}>
            Switch Theme
        </button>
    )
}