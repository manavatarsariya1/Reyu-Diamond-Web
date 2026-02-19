import React from 'react'
import shape1 from "../../assets/landingpage/shape-1.png"
import shape2 from "../../assets/landingpage/shape-2.png"
import shape3 from "../../assets/landingpage/shape-3.png"
import shape4 from "../../assets/landingpage/shape-4.png"
import shape5 from "../../assets/landingpage/shape-5.png"
import shape6 from "../../assets/landingpage/shape-6.png"
import shape7 from "../../assets/landingpage/shape-7.png"
import shape8 from "../../assets/landingpage/shape-8.png"
import shape9 from "../../assets/landingpage/shape-9png.png"
import shape10 from "../../assets/landingpage/shape-10.png"
import shape11 from "../../assets/landingpage/shape-11.png"

const shapes = [
  { id: 1, image: shape1, label: "Marquise" },
  { id: 2, image: shape2, label: "Radiant" },
  { id: 3, image: shape3, label: "Heart" },
  { id: 4, image: shape4, label: "Pear" },
  { id: 5, image: shape5, label: "Cushion" },
  { id: 6, image: shape6, label: "Round" },
  { id: 7, image: shape7, label: "Oval" },
  { id: 8, image: shape8, label: "Asscher" },
  { id: 9, image: shape9, label: "Emerald" },
  { id: 10, image: shape10, label: "Cushion" },
  { id: 11, image: shape11, label: "Princess" },
];


const DiamondShapesDetails = () => {
    return (
        <div className='
            flex flex-col items-center gap-10
            lg:flex-row lg:justify-evenly lg:items-center
            w-full
            px-4 sm:px-8 md:px-16 lg:px-[80px] 2xl:px-[160px]
            mt-[40px] sm:mt-[60px] md:mt-[80px] 2xl:mt-[100px]
            mb-[40px] sm:mb-[60px] md:mb-[80px] 2xl:mb-[100px]
        '>

            {/* Shapes Grid */}
            <div className='
                grid grid-cols-3 sm:grid-cols-4
                gap-2 md:gap-3
                p-2 md:p-3
                w-full
                max-w-[280px]
                sm:max-w-[380px]
                md:max-w-[480px]
                lg:max-w-[540px]
                xl:max-w-[580px]
                2xl:max-w-[648px]
            '>
                {shapes.map((shape) => (
                    <div
                        key={shape.id}
                        className="
                            group
                            relative
                            flex flex-col items-center justify-center gap-1
                            rounded-xl 2xl:rounded-2xl
                            cursor-pointer
                            hover:scale-105 transition-transform duration-200
                            border-[2px] md:border-[3px] border-[#CEA574]
                            p-1 sm:p-2
                            aspect-square
                            overflow-hidden
                        "
                        style={{ background: "#E8C4A8" }}
                    >
                        <img
                            src={shape.image}
                            alt={shape.label}
                            className="w-[90%] h-[90%] object-contain"
                        />

                        {/* Label — appears on hover */}
                        <div className="
                            absolute inset-0
                            flex items-center justify-center
                            bg-[#3a2a1a]/60
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-200
                            rounded-xl 2xl:rounded-2xl
                        ">
                            <span className="
                                font-offside text-white
                                text-[9px]
                                sm:text-[11px]
                                md:text-[13px]
                                xl:text-[14px]
                                2xl:text-[15px]
                                font-normal
                            ">
                                {shape.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Text Content */}
            <div className='
                flex flex-col gap-3 sm:gap-4 md:gap-5 2xl:gap-6
                text-center lg:text-left
                w-full
                max-w-[280px]
                sm:max-w-[380px]
                md:max-w-[440px]
                lg:max-w-[460px]
                xl:max-w-[490px]
                2xl:max-w-[513px]
            '>
                <h1 className='
                    font-playfair font-normal leading-tight
                    text-[28px]
                    sm:text-[36px]
                    md:text-[44px]
                    lg:text-[48px]
                    xl:text-[52px]
                    2xl:text-[56px]
                '>
                    Shapes we Offer
                </h1>
                <p className='
                    font-old-standard font-normal leading-relaxed
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                    xl:text-[22px]
                    2xl:text-[24px]
                '>
                    Discover beautifully crafted lab-grown diamond cuts, designed
                    for modern elegance and conscious luxury.
                </p>
            </div>

        </div>
    )
}

export default DiamondShapesDetails