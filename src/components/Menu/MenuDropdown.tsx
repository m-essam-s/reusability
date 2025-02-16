import { ReactNode } from "react";

export default function MenuDropdown({ children, }: { children: ReactNode }) {
    return (
        <div className="absolute left-0 mt-1 bg-white border border-gray-400 rounded-md shadow-md">
            {children}
        </div>
    )
}