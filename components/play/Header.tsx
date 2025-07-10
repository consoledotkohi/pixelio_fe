'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../common/Button'
import DialogModal from '../common/Dialog'
import SignInModalContent from '../modals/SignInModalContent'

const UserControls = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" className="bg-white font-semibold">
        크리에이터 콘솔
      </Button>
      <Button
        variant="light"
        className="relative h-10 w-10 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent"
      >
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
          className="lucide lucide-bell w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
      </Button>
      <Button
        variant="light"
        className="relative h-10 w-10 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent"
      >
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
          className="lucide lucide-user w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </Button>
    </div>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="w-full bg-gray-800 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center relative">
          <Image src="/pixelio_logo.png" alt="pixelio" fill />
        </div>
        <span className="text-lg sm:text-2xl font-bold text-blue-400">pixelio</span>
      </div>

      <div className="flex-1 mx-8">
        {/* TODO: 검색창 컴포넌트로 교체 */}
        <div className="w-full h-12 bg-gray-700 rounded-lg flex items-center px-4 text-gray-400">
          {/* 게임 검색... */}
          {/* TODO: 실제 검색창으로 교체 */}
        </div>
      </div>

      {/* <UserControls /> */}
      <Button variant="outline" className="bg-white" onClick={() => setIsOpen(true)}>
        로그인/회원가입
      </Button>
      {isOpen && (
        <DialogModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <SignInModalContent />
        </DialogModal>
      )}
    </header>
  )
}

export default Header
