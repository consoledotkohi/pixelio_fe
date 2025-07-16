import { ReactNode, FC } from 'react'
import clsx from 'clsx'

// Badge appearance variants
const VARIANT_STYLES = {
  pending: 'bg-[#D6EBFF] text-[#3394F6] border border-[#3394F6]',
  approved: 'bg-[#D6F9E7] text-[#22C55E] border border-[#22C55E]',
  rejected: 'bg-[#FFE0E0] text-[#F04438] border border-[#F04438]',
  waiting: 'bg-[#FFF7D6] text-[#EAB308] border border-[#EAB308]',
  transparent: 'bg-transparent text-[#e5e7eb] border border-[#e5e7eb]',
} as const

// Badge size variants
const SIZE_STYLES = {
  sm: 'h-5 px-2.5 text-xs rounded-full',
  md: 'h-7 px-2.5 text-sm rounded-md',
} as const

export type BadgeVariant = keyof typeof VARIANT_STYLES
export type BadgeSize = keyof typeof SIZE_STYLES

export interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  className?: string
}

/**
 * Badge: A small status or label indicator.
 */
export const Badge: FC<BadgeProps> = ({ children, variant = 'pending', size = 'md', className }) => (
  <span
    className={clsx(
      'inline-flex items-center justify-center font-medium',
      VARIANT_STYLES[variant],
      SIZE_STYLES[size],
      className
    )}
  >
    {children}
  </span>
)

export default Badge
