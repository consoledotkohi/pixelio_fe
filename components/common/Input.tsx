import React from 'react'

interface InputProps {
  theme?: 'light' | 'dark'
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch?: () => void
  className?: string
}

const Input: React.FC<InputProps> = ({
  theme = 'dark',
  placeholder = '게임 검색...',
  value,
  onChange,
  onSearch,
  className,
}) => {
  const isDark = theme === 'dark'

  return (
    <div className={`relative ${className ?? ''}`}>
      {/* 검색 아이콘 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          isDark
            ? 'absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4'
            : 'absolute left-2.5 top-2.5 h-4 w-4 text-gray-400'
        }
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
        className={
          isDark
            ? 'flex h-10 w-full rounded-md border border-gray-600 px-3 py-2 pl-10 bg-[#3D3D3D] text-white placeholder-gray-400 focus:border-gray-400 text-sm outline-none'
            : 'flex h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-8 w-[300px] text-gray-900 placeholder-gray-400 focus:border-gray-400 outline-none'
        }
        placeholder={isDark ? placeholder : '게임 이름 또는 크리에이터로 검색...'}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && onSearch) onSearch()
        }}
      />
    </div>
  )
}

export default Input
