import Header from '@/components/play/Header'
import Carousel from '@/components/play/Carousel'
import GameCard from '@/components/play/GameCard'

export default function PlayPage() {
  const mockGameCard = {
    title: '드래곤 퀘스트',
    genres: ['장르', '종류'],
    rating: 4.7,
    ratingCount: 178,
    likeCount: 1890,
    isNew: true,
    thumbnailUrl: '/test_image.png', // public 폴더에 있는 이미지 사용
    isLiked: false,
  }

  return (
    <div>
      <Header />
      <Carousel />
      <GameCard {...mockGameCard} />
    </div>
  )
}
