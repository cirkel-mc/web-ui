import { useState } from "react"

export const useTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isActive = (index: number) => {
    return activeIndex === index
  }

  return { activeIndex, isActive, setActiveIndex }
}
