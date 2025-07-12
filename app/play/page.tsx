import Header from '@/components/play/Header'
import Carousel from '@/components/play/Carousel'
import GameCard from '@/components/play/GameCard'
import LNB from '@/components/play/LNB'

export default function PlayPage() {
  const mockGameCard = {
    title: '드래곤 퀘스트',
    genres: ['장르', '종류'],
    rating: 4.7,
    ratingCount: 178,
    likeCount: 1890,
    isNew: true,
    thumbnailUrl: '/test_image.png',
    isLiked: false,
  }

  return (
    <div className="bg-[#3d3d3d]">
      <Header />
      <Carousel />
      <div className="flex mt-12 px-12">
        <LNB />
        <div className="grid grid-cols-3 gap-4 flex-1" style={{ gridAutoRows: '376px' }}>
          <GameCard {...mockGameCard} />
          <GameCard {...mockGameCard} />
          <GameCard {...mockGameCard} />
          <GameCard {...mockGameCard} />
          <GameCard {...mockGameCard} />
        </div>
      </div>
    </div>
  )
}
