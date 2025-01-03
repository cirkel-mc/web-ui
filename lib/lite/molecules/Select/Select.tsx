import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { twMerge } from 'tailwind-merge'
import { useOutsideClick } from '@/lib/@hooks/useOutsideClick'

export type SelectItem = {
  label: string
  value: string | number;
}

export interface SelectProps {
  classes?: string;
  containerClass?: string;
  optionClass?: string;
  icon?: IconDefinition
  options: SelectItem[]
  placeholder?: string
  iconPosition?: 'left' | 'right'
  position?: 'center' | 'left'
  value: string | number;
  onChange: (e: any) => void
}

export function Select(props: SelectProps) {
  const {
    classes,
    containerClass,
    options,
    icon,
    iconPosition = 'left',
    position = 'left',
    placeholder,
    optionClass,
    value,
    onChange,
  } = props
  const selectRef = useOutsideClick(() => setIsOpen(false))

  const [isOpen, setIsOpen] = useState(false)
  const [, setSelected] = useState<string | null>('')
  const [customValue, setValue] = useState(value)

  const handleChange = (e: React.MouseEvent<HTMLParagraphElement>) => {
    setSelected(e?.currentTarget?.textContent)
    setIsOpen(false)
    const v = options.filter(
      (item) => item.label === e?.currentTarget?.textContent,
    )[0].value
    setValue(v)
    onChange(v)
  }

  return (
    <div className={twMerge("relative", containerClass)} ref={selectRef}>
      <div
        className={twMerge(
          'flex flex-nowrap items-center rounded-lg w-full  px-4 py-1.5 box-border border-[1px] shadow-input border-gray-200 bg-white lg:h-8 hover:border-primary-20 focus:border-primary-20 cursor-pointer',
          isOpen
            ? 'border-primary-20 !text-black placeholder:text-primary-20'
            : 'text-neutral-400',
          position === 'center' ? 'justify-between' : 'justify-between',
          classes
        )}
        onClick={() => setIsOpen(true)}
      >
        {icon && iconPosition === 'left' && (
          <div className="flex justify-start gap-2 items-center">
            <FontAwesomeIcon
              icon={icon}
              className={twMerge(
                ' w-4 h-4',
                isOpen ? 'text-gray-500' : 'text-[#717171]',
              )}
            />
          </div>
        )}
        <div className="flex items-center mx-2">
          <p>
            {customValue
              ? options.filter((item) => item.value === customValue)[0].label
              : placeholder}
          </p>
        </div>

        {iconPosition === 'left' ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={twMerge(
              'w-4 h-4',
              isOpen ? 'text-primary-20' : 'text-gray-500',
            )}
          />
        ) : (
          icon &&
          iconPosition === 'right' && (
            <FontAwesomeIcon
              icon={icon}
              className={twMerge(
                'w-4 h-4',
                isOpen ? 'text-primary-20' : 'text-gray-500',
              )}
            />
          )
        )}
      </div>
      {isOpen && options && (
        <div className="z-50 w-full absolute top-[35px] bg-white flex flex-col gap-2 shadow-md border-[1px] border-neutral-40 mt-2 pt-2 rounded-lg max-h-[200px] overflow-auto focus:border-primary-20 cursor-pointer">
          {options?.map((item) => (
            <p
              key={item.value}
              className={twMerge(
                'hover:bg-secondary-10 hover:text-white px-4 py-2',
                item.value === value && 'bg-secondary-10 text-white',
                optionClass
              )}
              onClick={handleChange}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
