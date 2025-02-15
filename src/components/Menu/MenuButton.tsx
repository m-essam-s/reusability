import Button from "../Button/Button";

interface MenuButtonProps {
    children: React.ReactNode;
    toggle?: () => void;
}

export default function MenuButton({ children, toggle }: MenuButtonProps) {
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}