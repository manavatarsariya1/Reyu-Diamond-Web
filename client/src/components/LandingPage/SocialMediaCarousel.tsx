import  { useState, useRef, useEffect, useCallback } from 'react'

interface Testimonial {
  id: number;
  content?: string;
  author?: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const SocialMediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepPx, setStepPx] = useState(0);   // width of one card + gap in px
  const [maxIndex, setMaxIndex] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    if (!trackRef.current || !wrapRef.current) return;

    const firstCard = trackRef.current.querySelector<HTMLElement>('[data-card]');
    if (!firstCard) return;

    const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 16;
    const cardW = firstCard.getBoundingClientRect().width;
    const step = cardW + gap;

    const wrapW = wrapRef.current.getBoundingClientRect().width;
    const visible = Math.round(wrapW / step);
    const newMax = Math.max(0, testimonials.length - visible);

    setStepPx(step);
    setMaxIndex(newMax);
    setCurrentIndex((i) => Math.min(i, newMax));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="px-8 sm:px-12 xl:px-[80px] 2xl:px-[102px]">
      <div className="relative max-w-[1716px] mx-auto">

        {/* ← Left Arrow */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="
            absolute -left-7 sm:-left-10 xl:-left-14
            top-1/2 -translate-y-1/2 z-20
            text-[#CEA574] text-6xl sm:text-7xl leading-none
            disabled:opacity-20 disabled:cursor-not-allowed
            transition-opacity duration-200 select-none
            cursor-pointer
          "
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Clipping wrapper */}
        <div ref={wrapRef} className="overflow-hidden">

          {/* Sliding track — translateX by exact pixel amount */}
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * stepPx}px)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                data-card
                className="
                  flex-shrink-0
                  w-full
                  sm:w-[calc(50%-8px)]
                  xl:w-[calc(25%-15px)]
                  aspect-[439/720]
                  border-[4px] border-[#CEA574]
                  rounded-2xl
                  bg-white
                  p-6
                "
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Testimonial {testimonial.id}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* → Right Arrow */}
        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          className="
            absolute -right-7 sm:-right-10 xl:-right-14
            top-1/2 -translate-y-1/2 z-20
            text-[#CEA574] text-6xl sm:text-7xl leading-none
            disabled:opacity-20 disabled:cursor-not-allowed
            transition-opacity duration-200 select-none
            cursor-pointer
          "
          aria-label="Next"
        >
          ›
        </button>

      </div>
    </div>
  );
};

export default SocialMediaCarousel;