import React from 'react'

interface BoxProps {
  icon: React.ReactNode
  onClick: () => void
}

function Box({ icon, onClick }: BoxProps) {
  return (
    <div
      className="flex justify-center items-center h-8 w-8 rounded-lg border-[1px] border-[#E4E4E7]"
      onClick={onClick}
    >
      {icon}
    </div>
  )
}

export default Box
