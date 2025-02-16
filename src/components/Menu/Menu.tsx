import { ReactNode } from "react"

export default function Menu({ children }: { children: ReactNode }) {

    return (
        <div className="relative inline-block">
            {children}
        </div>
    )
}
