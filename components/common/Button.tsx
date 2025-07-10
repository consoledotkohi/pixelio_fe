'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'light'
  rounded?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  type,
  children,
  variant,
  size = 'md',
  className = '',
  rounded = false,
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary: 'bg-[#5D16ED] text-white hover:bg-[#4A11C7] ',
    secondary: 'bg-[#1E293B] text-white hover:bg-[#1E293B]/80',
    outline: 'border border-[#5D16ED] text-[#5D16ED] hover:bg-[#5D16ED] hover:text-white',
    light: 'text-[#6B7280] hover:bg-[#D1D5DB]/80',
  }

  const sizes = {
    sm: 'h-[28px] px-4',
    md: 'h-[40px] px-6',
    lg: 'h-[44px] w-full',
  }

  return (
    <button
      type={type || 'button'}
      className={
        `${baseClasses} ${rounded ? 'rounded-full' : 'rounded-md'} ` +
        (variant ? `${variants[variant]} ${sizes[size]} ${className}` : `${sizes[size]} ${className}`)
      }
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
