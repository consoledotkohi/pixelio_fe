import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-gray-800 px-4 py-3 flex items-center justify-between">
      {/* 왼쪽: 로고와 서비스명 */}
      <div className="flex items-center gap-2">
        {/* 로고 (임시 사각형) */}
        <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center">
          {/* 여기에 로고 이미지 또는 아이콘 */}
          <span className="text-2xl">🕹️</span>
        </div>
        <span className="text-3xl font-bold text-blue-400 ml-2">pixelio</span>
      </div>

      {/* 가운데: 검색창 자리 */}
      <div className="flex-1 mx-8">
        {/* TODO: 검색창 컴포넌트로 교체 */}
        <div className="w-full h-12 bg-gray-700 rounded-lg flex items-center px-4 text-gray-400">
          {/* 게임 검색... */}
          {/* TODO: 실제 검색창으로 교체 */}
        </div>
      </div>

      {/* 오른쪽: 버튼, 알림, 프로필 */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-2 bg-white border-2 border-purple-500 text-purple-700 rounded-xl font-semibold text-lg hover:bg-purple-50 transition">
          크리에이터 콘솔
        </button>
        <div className="relative">
          <span className="material-icons text-2xl text-gray-200">notifications_none</span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-800"></span>
        </div>
        <span className="material-icons text-2xl text-gray-200">person</span>
      </div>
    </header>
  )
}

export default Header
