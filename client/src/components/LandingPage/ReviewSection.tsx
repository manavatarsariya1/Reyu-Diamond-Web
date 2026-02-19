import { Diamond } from 'lucide-react';
import React from 'react'
import diamond from "@/assets/diamond-svgrepo-com.svg";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    location: "Frankfurt, Germany",
    rating: 5,
    text: "Reyu Jewels stands for reliability. From selection to delivery, everything was smooth and professional. I will definitely return for future purchases.",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    location: "Frankfurt, Germany",
    rating: 5,
    text: "Reyu Jewels stands for reliability. From selection to delivery, everything was smooth and professional. I will definitely return for future purchases.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    location: "Frankfurt, Germany",
    rating: 5,
    text: "Reyu Jewels stands for reliability. From selection to delivery, everything was smooth and professional. I will definitely return for future purchases.",
  },
  {
    id: 4,
    name: "Sophia Martinez",
    location: "Frankfurt, Germany",
    rating: 5,
    text: "Reyu Jewels stands for reliability. From selection to delivery, everything was smooth and professional. I will definitely return for future purchases.",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    location: "Frankfurt, Germany",
    rating: 5,
    text: "Reyu Jewels stands for reliability. From selection to delivery, everything was smooth and professional. I will definitely return for future purchases.",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    location: "Frankfurt, Germany",
    rating: 5,
    text: "Reyu Jewels stands for reliability. From selection to delivery, everything was smooth and professional. I will definitely return for future purchases.",
  },
];

const ReviewSection = () => {
  return (
    <div className='
       
      py-12 md:py-16 xl:py-[80px]
     
      overflow-hidden
    '>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-left:hover,
        .scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className='text-center mb-10 md:mb-14 xl:mb-16'>
        <p className='
          font-offside font-normal text-[#CEA574]
          text-sm sm:text-base md:text-lg xl:text-xl
          mb-2
        '>
          Trust & Satisfaction
        </p>
        <h1 className='
          font-playfair font-normal
          text-[32px] sm:text-[40px] md:text-[48px] xl:text-[56px]
          mb-4
        '>
          What Our Clients Say
        </h1>
        <p className='
          font-old-standard font-normal text-gray-300
          text-sm sm:text-base md:text-lg xl:text-xl
          max-w-2xl mx-auto
        '>
          Discover why discerning customers choose Reyu Jewels for their most precious moments.
        </p>
      </div>

      {/* Video Testimonials Row - Scrolls LEFT continuously */}
      <div className='mb-8 md:mb-12 xl:mb-16 overflow-hidden'>
        <div className='scroll-left flex gap-4 md:gap-6 xl:gap-8'>
          {/* Duplicate testimonials twice for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={`video-${idx}`}
              className='flex-shrink-0'
            >
              {/* Video Card */}
              <div className='
                relative
                rounded-2xl
                overflow-hidden
                border-[3px] border-[#CEA574]
                bg-white
                group cursor-pointer
                w-[280px] sm:w-[360px] md:w-[420px] xl:w-[500px]
              '
                style={{
                  aspectRatio: '550/320',
                  boxShadow: '0 8px 32px rgba(206, 165, 116, 0.2)',
                }}
              >
                {/* Play Button */}
                <div className='w-full h-full flex items-center justify-center bg-gray-100'>
                  <button className='
                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                    bg-white
                    border-[3px] border-gray-800
                    rounded-full
                    flex items-center justify-center
                    group-hover:scale-110
                    transition-transform duration-200
                  '>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Name Badge */}
                <div className='absolute bottom-3 left-3'>
                  <p className='font-offside text-[#CEA574] text-xs sm:text-sm md:text-base'>
                    {testimonial.name}
                  </p>
                  <p className='font-old-standard text-gray-700 text-[10px] sm:text-xs md:text-sm'>
                    {testimonial.location}
                  </p>
                </div>

                {/* Time Badge */}
                <div className='absolute bottom-3 right-3 text-gray-700 text-[10px] sm:text-xs md:text-sm font-old-standard'>
                  3 months ago
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Testimonials Row - Scrolls RIGHT continuously */}
      <div className='overflow-hidden'>
        <div className='scroll-right flex gap-4 md:gap-6 xl:gap-8'>
          {/* Duplicate testimonials twice for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={`text-${idx}`}
              className='flex-shrink-0'
            >
              {/* Text Card */}
              <div className='
              h-fit
                bg-[#5E3E1833]
                border-[3px] border-[#CEA574]
                rounded-2xl
                p-4 sm:p-5 md:p-6
                flex flex-col
                w-[280px] sm:w-[360px] md:w-[420px] xl:w-[500px]
              '
                style={{
                  aspectRatio: '450/240',
                  boxShadow: '0 8px 32px rgba(206, 165, 116, 0.15)',
                }}
              >
                {/* Header */}
                <div className='flex justify-between items-start mb-3 md:mb-4'>
                  <div>
                    <h3 className='font-offside text-[#CEA574] text-xs sm:text-sm md:text-base mb-0.5'>
                      {testimonial.name}
                    </h3>
                    <p className='font-old-standard text-gray-400 text-[10px] sm:text-xs md:text-sm'>
                      {testimonial.location}
                    </p>
                  </div>
                  <span className='text-gray-400 text-[9px] sm:text-[10px] md:text-xs font-old-standard whitespace-nowrap'>
                    3 months ago
                  </span>
                </div>

                {/* Review Text */}
                <p className='
                  font-old-standard text-gray-300
                  sm:text-xl text-xs
                  leading-relaxed
                  mb-3 md:mb-4
                  flex-1
                '>
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className='flex gap-1 justify-center items-center'>
                  {Array.from({ length: 5 }).map((_, i) => (

                    <div className='' key={i}>

                        <img src={diamond} alt="diamond" className="w-6 h-6" />
                    </div>
                
                    //   <svg
                    //   key={i}
                    //   className='w-3 h-3 sm:w-4 sm:h-4 text-[#CEA574]'
                    //   fill="currentColor"
                    //   viewBox="0 0 24 24"
                    // >
                    //   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    // </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;