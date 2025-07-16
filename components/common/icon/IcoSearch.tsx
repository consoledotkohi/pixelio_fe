import { FC } from 'react'
import clsx from 'clsx'

const IcoSearch: FC<{ isDark: boolean }> = ({ isDark }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={clsx(
      'absolute',
      isDark ? 'left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4' : 'left-2.5 top-2.5 h-4 w-4 text-gray-400'
    )}
    aria-hidden="true"
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

export default IcoSearch
