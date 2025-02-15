import { ReactNode } from "react";

interface MenuItemProps {
    children: ReactNode;
}

export default function MenuItem({ children }: MenuItemProps) {
    return (
        <div className="text-gray-700 p-3 cursor-pointer min-w-[100px] flex justify-center items-center select-none hover:bg-gray-100 border-b border-gray-400">
            {children}
        </div>
    );
}