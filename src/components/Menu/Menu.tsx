import React, { ReactNode } from "react"

interface MenuProps {
    children: ReactNode;
}

export default function Menu({ children }: MenuProps) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="relative inline-block">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<{
                        open: boolean; toggle: () => void;
                    }>, {
                        open,
                        toggle
                    })
                }
                return child;
            })}
        </div>
    )
}
