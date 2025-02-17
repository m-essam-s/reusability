import { useState } from "react"

export default function useToggle(initialValue = false): [boolean, () => void] {
    const [on, setOn] = useState(initialValue)
    const toggle = () => setOn(!on)
    return [on, toggle]
}