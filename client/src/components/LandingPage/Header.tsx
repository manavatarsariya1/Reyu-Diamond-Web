import React from 'react'
import photo from "@/assets/landingpage/Diamond.png";

const Header = () => {
    return (
        <div className='pt-[6px]   max-h-[900px] '>

            {/* Text Section */}
            <div className='flex flex-col gap-2 text-center px-4 sm:px-8 md:px-16 xl:px-0 sm:mb-[-50px]'>
                <h1 className='
                    font-playfair font-normal leading-tight
                    text-[32px]
                    sm:text-[52px]
                    md:text-[72px]
                    lg:text-[90px]
                    xl:text-[108px]
                    
                '>
                    Eternal, In Every Facet
                </h1>
                <p className='
                    font-old-standard
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                    xl:text-2xl
                '>
                    Fine diamonds crafted with uncompromising precision and enduring beauty.
                </p>
            </div>

            {/* Image Section */}
            <div className='flex items-center justify-center w-full overflow-hidden '>
                <div
                    className='
                        flex items-center justify-center
                        p-5
                        w-[180px]  h-[180px]
                        sm:w-[220px] sm:h-[220px]
                        md:w-[420px] md:h-[420px]
                        lg:w-[700px] lg:h-[700px]
                        xl:w-[1002px] xl:h-[900px]
                    '
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
                        // maxHeight: 400,
                    }}
                >
                    <img
                        src={photo}
                        alt="Diamond"
                        width={798}
                        height={594}
                        className=' h-auto object-contain '
                    />
                     {/* <div className="absolute bottom-[-290px]   left-0 w-full h-80   bg-gradient-to-t from-[#2A2A2A] to-transparent pointer-events-none" />
                     <div className="absolute bottom-[-300px]   left-0 w-full h-70 bg-gradient-to-t    from-[#2A2A2A] to-transparent pointer-events-none" /> */}
                     {/* <div className="absolute bottom-[-310px]   left-0 w-full h-70 bg-gradient-to-t    from-[#2A2A2A] to-transparent pointer-events-none" /> */}
                     <div className="absolute bottom-[-320px]   left-0 w-full h-70 bg-gradient-to-t    from-[#2A2A2A] to-transparent pointer-events-none" />
                     <div className="absolute bottom-[-330px]   left-0 w-full h-70 bg-gradient-to-t    from-[#2A2A2A] to-transparent pointer-events-none" />
                     <div className="absolute bottom-[-340px]   left-0 w-full h-70 bg-gradient-to-t    from-[#2A2A2A] to-transparent pointer-events-none" />
                     {/* <div className="absolute bottom-[-470px]   left-0 w-full h-70 bg-gradient-to-t    from-[#2A2A2A] to-transparent pointer-events-none" /> */}
                     <div className="absolute bottom-[-470px]   left-0 w-full h-40 bg-[#2A2A2A] " />
                     <div className="absolute bottom-[-630px]   left-0 w-full h-40 bg-[#2A2A2A] " />
                </div>
            </div>

        </div>
    )
}

export default Header