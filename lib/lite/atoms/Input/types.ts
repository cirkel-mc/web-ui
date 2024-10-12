import type { InputHTMLAttributes } from 'react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconDefinition
  isClock?: boolean
  iconClick?: () => void
  onChange: (e: any) => void
  value?: string
}
