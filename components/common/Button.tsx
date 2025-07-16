'use client'

import { ButtonHTMLAttributes, ReactNode, FC } from 'react'
import clsx from 'clsx'

// Button appearance variants
const VARIANT_STYLES = {
  primary: 'bg-[#5D16ED] text-white hover:bg-[#4A11C7]',
  secondary: 'bg-[#1E293B] text-white hover:bg-[#1E293B]/80',
  outline: 'border border-[#5D16ED] text-[#5D16ED] hover:bg-[#5D16ED] hover:text-white',
  light: 'text-[#6B7280] hover:bg-[#D1D5DB]/80',
} as const

// Button size variants
const SIZE_STYLES = {
  xs: 'h-[18px] px-[10px] text-xs',
  sm: 'h-7 px-4 text-sm',
  md: 'h-10 px-6 text-base',
  lg: 'h-11 w-full text-lg',
} as const

export type ButtonVariant = keyof typeof VARIANT_STYLES
export type ButtonSize = keyof typeof SIZE_STYLES

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  rounded?: boolean
  className?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/**
 * Button: A reusable, accessible button component.
 */
export const Button: FC<ButtonProps> = ({
  type = 'button',
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  className,
  disabled = false,
  onClick,
  ...props
}) => (
  <button
    type={type}
    className={clsx(
      'inline-flex items-center justify-center font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      rounded ? 'rounded-full' : 'rounded-md',
      VARIANT_STYLES[variant],
      SIZE_STYLES[size],
      className
    )}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export default Button
