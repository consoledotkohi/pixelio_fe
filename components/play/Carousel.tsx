'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Button from '../common/Button'

const slides = [
  {
    title: '에픽 판타지 어드벤처',
    description: '미래 도시에서 펼쳐지는 액션 RPG의 새로운 경험',
    image: '/test_image.png',
    button: '지금 플레이',
  },
  {
    title: '사이버펑크 2077',
    description: '미래 도시에서 펼쳐지는 액션 RPG의 새로운 경험',
    image: '/test_image.png',
    button: '지금 플레이',
  },
  {
    title: '스페이스 익스플로러',
    description: '우주를 탐험하며 새로운 행성을 발견하는 모험',
    image: '/test_image.png',
    button: '지금 플레이',
  },
]

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // 현재 인덱스 추적
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  // 자동 슬라이드
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((idx: number) => emblaApi && emblaApi.scrollTo(idx), [emblaApi])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, idx) => (
            <div
              className="min-w-full flex items-center justify-start relative"
              key={idx}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
              }}
            >
              <div className="p-10 rounded-lg ml-12 z-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">{slide.description}</p>
                <Button variant="primary" size="md" className="flex items-center font-semibold text-sm" rounded>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play mr-2"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                  {slide.button}
                </Button>
              </div>
              <div className="absolute inset-0 bg-black opacity-40" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-70 transition"
        onClick={scrollPrev}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-70 transition"
        onClick={scrollNext}
      >
        &#8594;
      </button>
      {/* 내비게이터 */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              selectedIndex === idx ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
