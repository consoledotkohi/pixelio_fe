import Image from 'next/image'
import Button from '../common/Button'
import Badge from '../common/Badge'

interface GameCardProps {
  title: string
  genres: string[]
  rating: number
  ratingCount: number
  likeCount: number
  isNew?: boolean
  thumbnailUrl?: string
  isLiked?: boolean
}

export default function GameCard({
  title,
  genres,
  rating,
  ratingCount,
  likeCount,
  isNew = false,
  thumbnailUrl,
  isLiked = false,
}: GameCardProps) {
  return (
    <div className="bg-[#353536] rounded-xl overflow-hidden shadow-md w-[350px]">
      <div className="relative w-full h-[220px] bg-[#F5F6F7] flex items-center justify-center">
        {isNew && (
          <div className="absolute top-4 left-4 z-10">
            <Badge size="md" className="bg-[#DF264E] text-white border-none text-base font-bold">
              NEW
            </Badge>
          </div>
        )}
        {/* TODO : 토글 가능한 버튼으로 변경 */}
        <button className="absolute top-4 right-4 z-10 w-11 h-11 bg-[#6B6B6B] rounded-full flex items-center justify-center focus:outline-none">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.35 1.31z"
              stroke="#fff"
              strokeWidth="2"
              fill={isLiked ? '#ED1848' : 'none'}
            />
          </svg>
        </button>
        {thumbnailUrl ? (
          <Image src={thumbnailUrl} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#B0B0B0] text-2xl">No Image</div>
        )}
      </div>
      <div className="bg-[#232325] px-6 py-5 flex flex-col gap-3">
        <div className="text-white text-xl font-bold">{title}</div>
        <div className="flex gap-2 mb-2">
          {genres.map((genre, idx) => (
            <Badge key={idx} variant="transparent" size="sm" className="border-[#6B6B6B] text-[#B0B0B0]">
              {genre}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2">
          {/* TODO: 화면 설계 확인 후 공통 컴포넌트 설계 필요 */}
          <div className="flex items-center text-[#FFD600] text-lg">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill={i <= Math.round(rating) ? '#FFD600' : 'none'}
                stroke="#FFD600"
              >
                <polygon points="10,1.5 12.6,7.5 19,7.5 13.8,11.7 15.8,18 10,14.1 4.2,18 6.2,11.7 1,7.5 7.4,7.5" />
              </svg>
            ))}
          </div>
          <span className="text-white text-lg font-semibold ml-1">{rating.toFixed(1)}</span>
          <span className="text-[#A0A0A0] text-base ml-1">({ratingCount})</span>
          <span className="ml-auto flex items-center text-[#A0A0A0] text-base">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#A0A0A0">
              <path
                d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.35 1.31z"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span className="ml-1">{likeCount.toLocaleString()}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
