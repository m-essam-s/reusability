import { JSX, useContext } from "react"
import { ToggleContext } from "./Toggle"


export default function ToggleDisplay({ children }: { children: (on: boolean) => JSX.Element }) {
    const { on } = useContext(ToggleContext)
    return (
        <>
            {children(on)}
        </>
    )
}