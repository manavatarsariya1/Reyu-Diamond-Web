import  { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type {Variants} from "framer-motion"
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
    { id: 1,  image: shape1,  label: "Marquise" },
    { id: 2,  image: shape2,  label: "Radiant"  },
    { id: 3,  image: shape3,  label: "Heart"    },
    { id: 4,  image: shape4,  label: "Pear"     },
    { id: 5,  image: shape5,  label: "Cushion"  },
    { id: 6,  image: shape6,  label: "Round"    },
    { id: 7,  image: shape7,  label: "Oval"     },
    { id: 8,  image: shape8,  label: "Asscher"  },
    { id: 9,  image: shape9,  label: "Emerald"  },
    { id: 10, image: shape10, label: "Cushion"  },
    { id: 11, image: shape11, label: "Princess" },
]

// ── Framer Motion variants ────────────────────────────────────────────────────

// Container: staggers children one by one
const gridContainer:Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
}

// Each shape card fades + slides up
const cardVariant: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.9 },
    show:   { opacity: 1, y: 0,  scale: 1,
        transition: { type: 'spring' as const, stiffness: 260, damping: 22 } },
}

// Text block slides in from right
const textVariant:Variants = {
    hidden: { opacity: 0, x: 48 },
    show:   { opacity: 1, x: 0,
        transition: { type: 'spring' as const, stiffness: 200, damping: 26, delay: 0.3 } },
}

// Label overlay fades in
const labelVariant:Variants = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { duration: 0.18 } },
}

// ─────────────────────────────────────────────────────────────────────────────

const DiamondShapesDetails = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <div className='
            flex flex-col items-center gap-10
            lg:flex-row lg:justify-evenly lg:items-center
            w-full
            px-4 sm:px-8 md:px-16 lg:px-[80px] 2xl:px-[160px]
            mt-[40px] sm:mt-[60px] md:mt-[80px] 2xl:mt-[100px]
            mb-[40px] sm:mb-[60px] md:mb-[80px] 2xl:mb-[100px]
        '>

            {/* ── Shapes Grid ── */}
            <motion.div
                variants={gridContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.2 }}
                className='
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
                '
            >
                {shapes.map((shape) => (
                    <motion.div
                        key={shape.id}
                        variants={cardVariant}
                        whileHover={{ scale: 1.07, transition: { type: 'spring' as const, stiffness: 350, damping: 20 } }}
                        whileTap={{ scale: 0.96 }}
                        onHoverStart={() => setHoveredId(shape.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        className='
                            group relative  
                            flex flex-col items-center justify-center gap-1
                            rounded-xl 2xl:rounded-2xl
                            cursor-pointer
                            border-[2px] md:border-[3px] border-[#CEA574]
                            p-1 sm:p-2
                            aspect-square
                            overflow-hidden
                        '
                        style={{ background: '#E8C4A8' }}
                    >
                        {/* Diamond image — slight scale on parent hover via motion */}
                        <motion.img
                            src={shape.image}
                            alt={shape.label}
                            className='w-[90%] h-[90%] object-contain'
                            animate={{ scale: hoveredId === shape.id ? 1.1 : 1 }}
                            transition={{ type: 'spring' as const, stiffness: 300, damping: 22 }}
                        />

                        {/* Label overlay — AnimatePresence for smooth mount/unmount */}
                        <AnimatePresence>
                            {hoveredId === shape.id && (
                                <motion.div
                                    key='label'
                                    variants={labelVariant}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden'
                                    className='
                                        absolute inset-0
                                        flex items-center justify-center
                                        rounded-xl 2xl:rounded-2xl
                                    '
                                    style={{ background: 'rgba(58,42,26,0.62)' }}
                                >
                                    <motion.span
                                        initial={{ y: 6, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 4, opacity: 0 }}
                                        transition={{ duration: 0.18 }}
                                        className='
                                            font-offside text-white font-normal
                                            text-[9px] sm:text-[11px] md:text-[13px]
                                            xl:text-[14px] 2xl:text-[15px]
                                        '
                                    >
                                        {shape.label}
                                    </motion.span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>

            {/* ── Text Content ── */}
            <motion.div
                variants={textVariant}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.3 }}
                className='
                    flex flex-col gap-3 sm:gap-4 md:gap-5 2xl:gap-6
                    text-center lg:text-left
                    w-full
                    max-w-[280px]
                    sm:max-w-[380px]
                    md:max-w-[440px]
                    lg:max-w-[460px]
                    xl:max-w-[490px]
                    2xl:max-w-[513px]
                '
            >
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className='font-offside text-xs sm:text-sm tracking-[0.2em] uppercase text-[#CEA574] opacity-80'
                >
                    Our Collection
                </motion.p>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring' as const, stiffness: 180, damping: 22 }}
                    className='
                        font-playfair font-normal leading-tight
                        text-[28px] sm:text-[36px] md:text-[44px]
                        lg:text-[48px] xl:text-[52px] 2xl:text-[56px]
                    '
                >
                    Shapes we Offer
                </motion.h1>

                {/* Gold rule */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.65, duration: 0.5 }}
                    className='flex items-center gap-3 justify-center lg:justify-start origin-left'
                >
                    <div className='h-px w-10 bg-[#CEA574] opacity-50' />
                    <div className='w-1.5 h-1.5 rounded-full bg-[#CEA574] opacity-70' />
                    <div className='h-px w-10 bg-[#CEA574] opacity-50' />
                </motion.div>

                {/* Body */}
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.55 }}
                    className='
                        font-old-standard font-normal leading-relaxed text-white/70
                        text-sm sm:text-base md:text-lg
                        lg:text-xl xl:text-[22px] 2xl:text-[24px]
                    '
                >
                    Discover beautifully crafted lab-grown diamond cuts, designed
                    for modern elegance and conscious luxury.
                </motion.p>

                {/* CTA button */}
                <motion.button
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.85, duration: 0.5 }}
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(206,165,116,0.35)' }}
                    whileTap={{ scale: 0.96 }}
                    className='
                        w-fit mx-auto lg:mx-0
                        px-7 py-2.5 rounded-full
                        font-offside text-sm tracking-wider
                        text-[#2A2A2A]
                        border border-[#CEA574]
                        transition-colors duration-200
                    '
                    style={{ background: 'linear-gradient(135deg, #CEA574 0%, #e0b888 100%)' }}
                >
                    Enquire Now
                </motion.button>
            </motion.div>

        </div>
    )
}

export default DiamondShapesDetails