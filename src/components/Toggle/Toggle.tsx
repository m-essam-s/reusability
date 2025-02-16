import { createContext, useState } from "react"

const ToggleContext = createContext<{ on: boolean; toggle: () => void }>({ on: false, toggle: () => { } })

export default function Toggle({ children }: { children: React.ReactNode }) {
    const [on, setOn] = useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }