import classnames from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    size?: "small" | "medium" | "large"
    variant?: "primary" | "secondary" | "tertiary"
}

export default function Button({ children, className, size, variant, ...rest }: ButtonProps) {
    const sizeClass = size && `button-${size}`
    const variantClass = variant && `button-${variant}`
    const allClasses = classnames(sizeClass, variantClass, className)

    return (
        <button className={`bg-white text-gray-700 border border-gray-400 shadow-sm font-bold px-4 py-2 rounded-md flex items-center cursor-pointer ${allClasses}`} {...rest}>
            {children}
        </button>
    )
}