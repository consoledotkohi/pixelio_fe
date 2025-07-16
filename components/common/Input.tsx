import { FC, ChangeEvent, KeyboardEvent } from 'react'
import clsx from 'clsx'
import IcoSearch from './icon/IcoSearch'

export interface InputProps {
  theme?: 'light' | 'dark'
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSearch?: () => void
  className?: string
}

/**
 * Input: A styled, accessible text input with optional search icon and theme.
 */
export const Input: FC<InputProps> = ({
  theme = 'dark',
  placeholder = '게임 검색...',
  value,
  onChange,
  onSearch,
  className,
}) => {
  const isDark = theme === 'dark'

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) onSearch()
  }

  return (
    <div className={clsx('relative', className)}>
      <IcoSearch isDark={isDark} />
      <input
        className={clsx(
          'flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none',
          isDark
            ? 'border-gray-600 pl-10 bg-[#3D3D3D] text-white placeholder-gray-400 focus:border-gray-400'
            : 'border-gray-300 pl-8 bg-white w-[300px] text-gray-900 placeholder-gray-400 focus:border-gray-400'
        )}
        placeholder={isDark ? placeholder : '게임 이름 또는 크리에이터로 검색...'}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Input
