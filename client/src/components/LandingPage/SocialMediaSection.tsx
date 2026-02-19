import React from 'react'
import SocialMediaCarousel from './SocialMediaCarousel'

const SocialMediaSection = () => {
    return (
        <div className='py-20'>

            <div>
                <h1 className='
        font-playfair font-normal text-center mb-10
        text-2xl
        sm:text-[40px]
        md:text-[48px]
        xl:text-[56px]
      '>
                    What our CEO has to say
                </h1>
            </div>
            <div>
                {/* SocialMediaSection */}
                {/* <SocialMediaCarousal/> */}
                <SocialMediaCarousel />

            </div>
            <div className='mt-10 text-center' >
                <a href="#"
                    className='  
                text-xl font-offside
              text-[#CEA574] underline
            md:text-2xl
            hover:text-[#b89a5a] transition-colors
          '
                >
                    Check out our Instagram
                </a>
            </div>
        </div>
    )
}

export default SocialMediaSection