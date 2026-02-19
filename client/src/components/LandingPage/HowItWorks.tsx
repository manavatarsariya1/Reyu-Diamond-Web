import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, CheckSquare, Gem, Settings, Package } from 'lucide-react'

const steps = [
    {
        id: 1,
        icon: Upload,
        label: "Share Shape or Reference",
        title: "Share Shape or Reference",
        description: "Send us your desired diamond shape, reference image, or inspiration. We accept all formats — sketches, photos, or detailed specs.",
    },
    {
        id: 2,
        icon: CheckSquare,
        label: "Approve mm Size & Ratio",
        title: "Approve mm Size & Ratio",
        description: "We'll send you precise millimeter dimensions and ratio options for your approval before manufacturing begins.",
    },
    {
        id: 3,
        icon: Gem,
        label: "Select Color & Clarity",
        title: "Select Color & Clarity",
        description: "Choose from a range of color grades (D–Z) and clarity levels (FL–I3) to match your exact vision and budget.",
    },
    {
        id: 4,
        icon: Settings,
        label: "Manufacturing Begins",
        title: "Manufacturing Begins",
        description: "Our expert craftsmen begin the precision manufacturing process using advanced CVD or HPHT technology.",
    },
    {
        id: 5,
        icon: Package,
        label: "Delivery & Certification",
        title: "Delivery & Certification",
        description: "Your diamond is delivered with full IGI certification, ensuring authenticity, quality, and peace of mind.",
    },
]

// ── Variants ──────────────────────────────────────────────────────────────────

// Left panel slides in from left on scroll
const leftPanel = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150, damping: 25, delay: 0.1 } },
}

// Title + description swap with blur
const textSwap = {
    hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
    show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } },
    exit:   { opacity: 0, y: -10, filter: 'blur(4px)', transition: { duration: 0.2, ease: 'easeIn' } },
}

// Mobile header fades up
const mobileHeader = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// "How It Works" title
const sectionTitle = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
}

// Steps stagger container
const stepsContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
}

// Each step slides from right
const stepItem = {
    hidden: { opacity: 0, x: 36 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 24 } },
}

// ─────────────────────────────────────────────────────────────────────────────

const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(0)

    const currentTitle = activeStep === 0
        ? "Customize Your Own Shape"
        : steps[activeStep - 1].title

    const currentDesc = activeStep === 0
        ? "From classic rounds to fancy one-of-a-kind shapes — we manufacture diamonds exactly the way you want, with calibrated sizes, premium make, with IGI certification upon request."
        : steps[activeStep - 1].description

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full py-12 lg:py-20 px-4 sm:px-8 gap-10 lg:gap-16">

            {/* Left Side — Dynamic Text (desktop only) */}
            <motion.div
                variants={leftPanel}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.2 }}
                className="hidden lg:flex flex-col gap-6 justify-center w-[700px] h-[400px]"
            >
                {/* Title — animated swap */}
                <div className='relative h-[60px] overflow-hidden'>
                    <AnimatePresence mode='wait'>
                        <motion.h2
                            key={currentTitle}
                            variants={textSwap}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                            className="font-playfair font-normal text-[50px] text-white leading-tight absolute top-0 left-0 w-full"
                        >
                            {currentTitle}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Description — animated swap */}
                <div className='relative h-[110px] overflow-hidden mr-10'>
                    <AnimatePresence mode='wait'>
                        <motion.p
                            key={currentDesc}
                            variants={textSwap}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                            className="font-old-standard font-normal text-[20px] leading-relaxed absolute top-0 left-0 w-full"
                            style={{ color: "rgba(240,236,228,0.65)" }}
                        >
                            {currentDesc}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Button */}
                <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    whileHover={{ backgroundColor: '#CEA574', color: '#000', scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-fit px-5 py-2 rounded-full text-lg font-normal font-offside border cursor-pointer"
                    style={{
                        border: "1px solid rgba(206,165,116,0.6)",
                        color: "#CEA574",
                        background: 'transparent',
                    }}
                >
                    Get in touch
                </motion.button>
            </motion.div>

            {/* Mobile Header (mobile/tablet only) */}
            <motion.div
                variants={mobileHeader}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.2 }}
                className="flex lg:hidden flex-col gap-4 w-full"
            >
                <h2 className="font-playfair text-center font-normal text-[32px] sm:text-[40px] text-white leading-tight">
                    Customize Your Own Shape
                </h2>
                <p
                    className="font-old-standard font-normal text-center text-[16px] sm:text-[18px] leading-relaxed mx-auto max-w-md"
                    style={{ color: "rgba(240,236,228,0.65)" }}
                >
                    From classic rounds to fancy one-of-a-kind shapes — we manufacture diamonds exactly the way you want, with calibrated sizes, premium make, with IGI certification upon request.
                </p>

                <div className='flex justify-center items-center'>
                    <motion.button
                        whileHover={{ backgroundColor: '#fce3c8', color: '#000', scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-fit px-5 py-2 rounded-full text-base font-bold font-offside border cursor-pointer"
                        style={{
                            border: "1px solid rgba(206,165,116,0.6)",
                            color: "#CEA574",
                            background: 'transparent',
                        }}
                    >
                        Get in touch
                    </motion.button>
                </div>
            </motion.div>

            {/* Right Side — Steps */}
            <div className="flex flex-col gap-3 w-full lg:w-auto">

                <motion.p
                    variants={sectionTitle}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center font-playfair text-[28px] sm:text-[32px] lg:text-[36px] text-white mb-2"
                >
                    How It Works
                </motion.p>

                <motion.div
                    variants={stepsContainer}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.15 }}
                    className='flex flex-col gap-3'
                >
                    {steps.map((step) => {
                        const Icon = step.icon
                        const isActive = activeStep === step.id

                        return (
                            <motion.div
                                key={step.id}
                                variants={stepItem}
                                className="flex flex-col w-full lg:w-auto"
                            >
                                {/* Row: number bubble + step card */}
                                <div className="flex justify-center items-center gap-3 sm:gap-5 text-[#CEA574]">

                                    {/* Step number bubble */}
                                    <motion.div
                                        animate={{
                                            background: isActive ? "rgba(206,165,116,0.2)" : "rgba(255,255,255,0.08)",
                                            color: isActive ? "#CEA574" : "rgba(240,236,228,0.5)",
                                            borderColor: isActive ? "rgba(206,165,116,0.5)" : "rgba(255,255,255,0.1)",
                                            scale: isActive ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.25 }}
                                        className="w-7 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-[18px] font-normal font-offside border"
                                        style={{ fontFamily: "'Jost', sans-serif" }}
                                    >
                                        {step.id}
                                    </motion.div>

                                    {/* Step card */}
                                    <motion.div
                                        onHoverStart={() => setActiveStep(step.id)}
                                        onHoverEnd={() => setActiveStep(0)}
                                        onClick={() => setActiveStep(isActive ? 0 : step.id)}
                                        animate={{
                                            borderColor: isActive ? "#CEA574" : "rgba(206,165,116,0.3)",
                                            backgroundColor: isActive ? "rgba(206,165,116,0.08)" : "rgba(0,0,0,0)",
                                            x: isActive ? 4 : 0,
                                        }}
                                        whileHover={{ x: isActive ? 4 : 3 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                        className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 cursor-pointer h-[80px] sm:h-[90px] rounded-[16px] w-full lg:w-[523px] border-[4px]"
                                    >
                                        {/* Icon */}
                                        <motion.div
                                            animate={{
                                                background: isActive ? "rgba(206,165,116,0.15)" : "rgba(255,255,255,0.05)",
                                                borderColor: isActive ? "rgba(206,165,116,0.4)" : "rgba(255,255,255,0.08)",
                                            }}
                                            transition={{ duration: 0.25 }}
                                            className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] flex-shrink-0 rounded-lg flex items-center justify-center border"
                                        >
                                            <motion.div
                                                animate={{
                                                    rotate: isActive ? 12 : 0,
                                                    scale: isActive ? 1.2 : 1,
                                                }}
                                                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                                            >
                                                <Icon size={16} color="#CEA574" />
                                            </motion.div>
                                        </motion.div>

                                        {/* Label */}
                                        <motion.span
                                            animate={{ color: isActive ? "#CEA574" : "rgba(240,236,228,0.85)" }}
                                            transition={{ duration: 0.22 }}
                                            className="text-[15px] sm:text-[17px] lg:text-[20px] font-offside font-normal leading-snug"
                                        >
                                            {step.label}
                                        </motion.span>
                                    </motion.div>
                                </div>

                                {/* Mobile only: description slides in below the card when tapped */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            key='desc'
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                                            className="lg:hidden overflow-hidden pl-10 mt-2 mb-1"
                                        >
                                            <motion.div
                                                initial={{ y: -8 }}
                                                animate={{ y: 0 }}
                                                exit={{ y: -8 }}
                                                transition={{ duration: 0.25 }}
                                                className="px-4 py-3 rounded-[12px] font-old-standard text-[14px] sm:text-[15px] leading-relaxed"
                                                style={{
                                                    color: "rgba(240,236,228,0.75)",
                                                    background: "rgba(206,165,116,0.06)",
                                                    border: "1px solid rgba(206,165,116,0.25)",
                                                }}
                                            >
                                                {step.description}
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default HowItWorks