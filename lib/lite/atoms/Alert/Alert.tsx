'use client'

import { useState, useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

interface AlertProps extends PropsWithChildren {
  variant: 'success' | 'error'
  isActive: boolean
}

export const Alert = ({ isActive, variant, children }: AlertProps) => {
  const [active, setActive] = useState(isActive)

  const getVariant = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-600'
      case 'error':
        return 'bg-red-500'
      default:
        break
    }
  }

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return <FontAwesomeIcon className="w-4 h-4" icon={faCheck} />
      case 'error':
        return (
          <FontAwesomeIcon className="w-4 h-4" icon={faCircleExclamation} />
        )
      default:
        break
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setActive(false)
    }, 2000)
  }, [])

  return (
    <div
      className={twMerge(
        ' transition-all w-fit duration-500 fixed -top-[9999px] left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 shadow-2xl bg-white text-white rounded z-50',
        getVariant(),
        active && 'top-[20px]',
      )}
    >
      {getIcon()}
      {children}
    </div>
  )
}
