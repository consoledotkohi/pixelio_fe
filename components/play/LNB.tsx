import React from 'react'

const genres = [
  '액션',
  '어드벤처',
  '롤플레잉 (RPG)',
  '전략',
  '시뮬레이션',
  '스포츠',
  '퍼즐',
  '레이싱',
  '슈팅',
  '호러',
  '캐주얼',
  'MMO/MOBA',
]

const tags = ['신작', '무료', '한국어 지원', '협동', '경쟁', '스토리 중심']

export default function LNB() {
  return (
    <aside className="w-[220px] bg-[#2D2F30] rounded-2xl p-8 flex flex-col gap-10 min-h-screen mr-4">
      {/* 장르 섹션 */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">🎮</span>
          <h2 className="text-2xl font-bold text-white">장르</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {genres.map((genre) => (
            <button
              key={genre}
              className="border border-[#D0D0D0] text-[#D0D0D0] hover:bg-[#22C55E] transition h-[18px] px-[10px] text-xs rounded-full"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* 인기태그 섹션 */}
      <section>
        <div className="flex items-center gap-2 mb-6 mt-4">
          <span className="text-2xl">🔥</span>
          <h2 className="text-2xl font-bold text-white">인기태그</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              className="border border-[#D0D0D0] text-[#D0D0D0] hover:bg-[#F97316] transition h-[18px] px-[10px] text-xs rounded-full"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
    </aside>
  )
}
