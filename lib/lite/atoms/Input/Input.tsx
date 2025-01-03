'use client'

import React, { useState } from 'react'
import type { InputHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { twMerge } from 'tailwind-merge'
// import { InputProps } from './types'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconDefinition
  isClock?: boolean
  iconClick?: () => void
  onChange: (e: any) => void
  value?: string
}


export function Input(props: InputProps) {
  const { value, onChange: _onChange } = props
  const [customValue, setValue] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) _onChange(e)
    setValue(e.target.value)
  }

  return (
    <div className={twMerge("flex relative items-center text-base box-border border-[1px] shadow-input border-gray-200 rounded-lg px-4 py-2 placeholder:text-neutral-900 hover:border-primary-20 hover:!text-primary-20", props.disabled ? 'bg-neutral-100' : 'bg-white')}>
      <input
        className="text-neutral-800 bg-transparent w-full focus:outline-none"
        {...props}
        onChange={handleChange}
        value={customValue}
      />
      {props.icon && (
        <FontAwesomeIcon
          icon={props.icon}
          className="w-4 h-4 text-neutral-500 absolute right-4"
          onClick={props.iconClick}
        />
      )}
    </div>
  )
}
