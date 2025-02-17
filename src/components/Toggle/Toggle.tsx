import { createContext } from "react"
import useToggle from "../../hooks/useToggle";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";

const ToggleContext = createContext<{ on: boolean; toggle: () => void }>({ on: false, toggle: () => { } })

export default function Toggle({
    children,
    onToggle = () => { }
}: {
    children?: React.ReactNode,
    onToggle?: () => void
}) {
    const [on, toggle] = useToggle()

    useEffectOnUpdate(onToggle, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}


export { ToggleContext }