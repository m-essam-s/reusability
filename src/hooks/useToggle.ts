import { useState } from "react"

export default function useToggle(): [boolean, () => void] {
    const [on, setOn] = useState(false)
    const toggle = () => setOn(!on)
    return [on, toggle]
}