import React from 'react'
import ImageSlider from './ImageSlider'

const AboutSection = () => {
  return (
    <div className='px-4 sm:px-8 md:px-12 xl:px-[80px] py-12 md:py-16 xl:py-[80px]'>

      <div className='
        flex flex-col gap-10
        xl:grid xl:grid-cols-2 xl:gap-0
      '>

        {/* Image Slider */}
        <div className='flex justify-center items-center'>
          <ImageSlider />
        </div>

        {/* Text Content */}
        <div className='flex flex-col gap-4 md:gap-5 xl:pl-[60px]'>

          <h1 className='
            font-playfair font-normal leading-tight
            text-[32px]
            sm:text-[40px]
            md:text-[48px]
            xl:text-[56px]
            z-10
          '>
            About Reyu Jewels
          </h1>

          <div className='
            font-old-standard font-normal flex flex-col gap-4 md:gap-5
            text-base
            sm:text-lg
            md:text-xl
            xl:text-xl
            z-10
          '>
            <p>
              At Reyu Jewels, we believe every diamond begins with a conscious
              choice. For over two decades, we have been redefining fine
              jewellery through expertly crafted lab-grown diamond creations
              that embody modern elegance, brilliance, and responsibility.
            </p>
            <p className=''>
              Our master artisans blend time-honored craftsmanship with advanced
              technology, transforming ethically created diamonds into stunning
              works of art. From precision-grown, conflict-free diamonds to the
              final flawless finish, every piece reflects our unwavering
              commitment to quality, transparency, and sustainability.
            </p>
            <p>
              Whether you're envisioning a bespoke engagement ring, a custom
              necklace, or a meaningful piece to celebrate life's milestones,
              our dedicated team collaborates closely with you to bring your
              vision to life—beautifully, responsibly, and without compromise.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default AboutSection