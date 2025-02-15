import { ReactNode } from "react";

interface MenuDropdownProps {
    children: ReactNode;
    open?: boolean;
}

export default function MenuDropdown({ children, open }: MenuDropdownProps) {
    return open ? (
        <div className="absolute left-0 mt-1 bg-white border border-gray-400 rounded-md shadow-md">
            {children}
        </div>
    ) : null;
}