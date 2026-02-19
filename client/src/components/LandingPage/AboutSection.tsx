import React from 'react'
import { motion } from 'framer-motion'
import ImageSlider from './ImageSlider'

// ── Shared viewport config ────────────────────────────────────────────────────
const vp = { once: true, amount: 0.25 }

// ── Variants ──────────────────────────────────────────────────────────────────

// Slider — opacity only, no x/y on heavy component = GPU-friendly, no lag
const sliderVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
}

// Heading slides up
const headingVariant = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.15 },
    },
}

// Paragraphs stagger in one by one
const paragraphContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const paragraphVariant = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
    },
}

// Stats — stagger via custom index
const statVariant = {
    hidden: { opacity: 0, y: 14 },
    show: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: 0.4 + i * 0.1, duration: 0.45, ease: 'easeOut' },
    }),
}

// ── Stats data ────────────────────────────────────────────────────────────────
const stats = [
    { value: '20+',  label: 'Years Experience' },
    { value: 'IGI',  label: 'Certified'        },
    { value: '100%', label: 'Lab Grown'        },
]

// ─────────────────────────────────────────────────────────────────────────────

const AboutSection = () => {
    return (
        <div className='px-4 sm:px-8 md:px-12 xl:px-[80px] py-12 md:py-16 xl:py-[80px] relative overflow-hidden'>

            {/* Decorative background circle */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={vp}
                transition={{ duration: 1.0 }}
                className='absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none'
                style={{
                    background: 'radial-gradient(circle, rgba(206,165,116,0.06) 0%, transparent 70%)',
                }}
            />

            <div className='
                flex flex-col gap-10
                xl:grid xl:grid-cols-2 xl:gap-0
                relative z-10
            '>

                {/* ── Image Slider ── */}
                <motion.div
                    variants={sliderVariant}
                    initial='hidden'
                    whileInView='show'
                    viewport={vp}
                    className='flex justify-center items-center'
                    style={{ willChange: 'opacity' }}
                >
                    <ImageSlider />
                </motion.div>

                {/* ── Text Content ── */}
                <div className='flex flex-col gap-4 md:gap-5 xl:pl-[60px]'>

                    {/* Heading */}
                    <motion.h1
                        variants={headingVariant}
                        initial='hidden'
                        whileInView='show'
                        viewport={vp}
                        className='
                            font-playfair font-normal leading-tight
                            text-[32px] sm:text-[40px] md:text-[48px] xl:text-[56px]
                        '
                    >
                        About Reyu Jewels
                    </motion.h1>

                    {/* Paragraphs — staggered */}
                    <motion.div
                        variants={paragraphContainer}
                        initial='hidden'
                        whileInView='show'
                        viewport={vp}
                        className='
                            font-old-standard font-normal flex flex-col gap-4 md:gap-5
                            text-base sm:text-lg md:text-xl xl:text-xl
                            text-white/75
                        '
                    >
                        <motion.p variants={paragraphVariant}>
                            At Reyu Jewels, we believe every diamond begins with a conscious
                            choice. For over two decades, we have been redefining fine
                            jewellery through expertly crafted lab-grown diamond creations
                            that embody modern elegance, brilliance, and responsibility.
                        </motion.p>

                        <motion.p variants={paragraphVariant}>
                            Our master artisans blend time-honored craftsmanship with advanced
                            technology, transforming ethically created diamonds into stunning
                            works of art. From precision-grown, conflict-free diamonds to the
                            final flawless finish, every piece reflects our unwavering
                            commitment to quality, transparency, and sustainability.
                        </motion.p>

                        <motion.p variants={paragraphVariant}>
                            Whether you're envisioning a bespoke engagement ring, a custom
                            necklace, or a meaningful piece to celebrate life's milestones,
                            our dedicated team collaborates closely with you to bring your
                            vision to life—beautifully, responsibly, and without compromise.
                        </motion.p>
                    </motion.div>

                    {/* Stats row */}
                    <div className='flex gap-8 mt-2'>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                custom={i}
                                variants={statVariant}
                                initial='hidden'
                                whileInView='show'
                                viewport={vp}
                                className='flex flex-col gap-0.5'
                            >
                                <span className='font-playfair text-2xl sm:text-3xl text-[#CEA574]'>
                                    {stat.value}
                                </span>
                                <span className='font-offside text-[10px] tracking-widest uppercase text-white/40'>
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection