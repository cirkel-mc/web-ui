import { useState } from "react";
import * as SwitchRadix from "@radix-ui/react-switch";
import { twMerge } from "tailwind-merge";

interface SwitchProps {
  onClick: () => void
}

export const Switch = ({ onClick }: SwitchProps) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <div className="flex items-center">
      <SwitchRadix.Root checked={isChecked} className={twMerge("w-[50px] h-7 bg-white rounded-full relative shadow-sm px-1 border-[1px] border-neutral-400", isChecked && 'bg-primary-30')} id="airplane-mode" onClick={() => { setChecked(!isChecked); onClick() }}>
        <SwitchRadix.Thumb className={twMerge("w-[21px] !h-[21px] bg-neutral-200 block rounded-full duration-100 border-[1px] border-gray-300  will-change-transform ", isChecked ? 'bg-white' : 'bg-gray-300')} style={{ width: '21px', height: '21px', transform: isChecked ? 'translateX(19px)' : '' }} />
      </SwitchRadix.Root>
    </div>
  )
}

export default Switch