import { ReactNode } from 'react'
import clsx from 'clsx'

interface BadgeProps {
  children: ReactNode
  variant?: 'pending' | 'approved' | 'rejected' | 'waiting' | 'transparent'
  size?: 'sm' | 'md'
  className?: string
}

const variants = {
  pending: 'bg-[#D6EBFF] text-[#3394F6] border border-[#3394F6]',
  approved: 'bg-[#D6F9E7] text-[#22C55E] border border-[#22C55E]',
  rejected: 'bg-[#FFE0E0] text-[#F04438] border border-[#F04438]',
  waiting: 'bg-[#FFF7D6] text-[#EAB308] border border-[#EAB308]',
  transparent: 'bg-transparent text-[#e5e7eb] border border-[#e5e7eb]',
}

const sizes = {
  sm: 'h-[20px] px-2.5 text-sm rounded-full',
  md: 'h-[28px] px-[10px] text-sm rounded-md',
}

const baseClasses = 'inline-flex items-center justify-center'

export default function Badge({ children, variant = 'pending', size = 'md', className }: BadgeProps) {
  return <span className={clsx(baseClasses, variants[variant], sizes[size], className)}>{children}</span>
}
