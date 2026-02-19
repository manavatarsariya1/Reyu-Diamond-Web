import { motion } from 'framer-motion'
import type {Variants} from "framer-motion"
import certi1 from '../../assets/landingpage/certi-1.png'
import certi2 from '../../assets/landingpage/certi-2.png'
import certi3 from '../../assets/landingpage/certi-3.png'
import certi4 from '../../assets/landingpage/certi-4.png'
import certi5 from '../../assets/landingpage/certi-5.png'
import certi6 from '../../assets/landingpage/certi-6.png'
import certi7 from '../../assets/landingpage/certi-7.png'
import certi8 from '../../assets/landingpage/certi-8.png'
import certi9 from '../../assets/landingpage/certi-9.png'

interface Certification {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

const certifications: Certification[] = [
    { id: 1, image: certi1, title: "Lab-Grown Diamond Certification – 3.02 Carat Marquise", subtitle: "" },
    { id: 2, image: certi2, title: "Lab-Grown Diamond Certification – 0.30 Carat Round", subtitle: "" },
    { id: 3, image: certi3, title: "Lab-Grown Diamond Certification – 5.01 Carat Round Brilliant", subtitle: "" },
    { id: 4, image: certi4, title: "Lab-Grown Diamond Certification – 3.51 Carat Oval Brilliant", subtitle: "" },
    { id: 5, image: certi5, title: "Lab-Grown Diamond Certification – 0.30 Carat Round", subtitle: "" },
    { id: 6, image: certi6, title: "Lab-Grown Diamond Certification – 5.01 Carat Round Brilliant", subtitle: "" },
    { id: 7, image: certi7, title: "Lab-Grown Diamond Certification – 2.51 Carat Round Brilliant", subtitle: "" },
    { id: 8, image: certi8, title: "Lab-Grown Diamond Certification – 0.30 Carat Round Brilliant", subtitle: "" },
    { id: 9, image: certi9, title: "Lab-Grown Diamond Certification – 3.01 Carat Round Brilliant", subtitle: "" },
]

// ── Variants ──────────────────────────────────────────────────────────────────

// Header children stagger
const headerContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const headerItem: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as any } },
}

// Grid cards — each triggers individually on scroll
const cardItem: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] as  any } },
}

// ─────────────────────────────────────────────────────────────────────────────

const Certificates = () => {
    return (
        <div className='
            px-4 sm:px-8 md:px-12 xl:px-[80px] 2xl:px-[102px]
            py-12 md:py-16 xl:py-[80px]
        '>
            {/* Header */}
            <motion.div
                variants={headerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.3 }}
                className='text-center mb-10 md:mb-14 xl:mb-16'
            >
                <motion.p
                    variants={headerItem}
                    className='
                        font-offside font-normal text-[#CEA574]
                        text-sm sm:text-base md:text-lg xl:text-xl
                        mb-2
                    '
                >
                    We Believe In Transparency
                </motion.p>

                <motion.h1
                    variants={headerItem}
                    className='
                        font-playfair font-normal
                        text-[32px] sm:text-[40px] md:text-[48px] xl:text-[56px]
                        mb-4
                    '
                >
                    Our Certifications
                </motion.h1>

                <motion.p
                    variants={headerItem}
                    className='
                        font-old-standard font-normal text-gray-300
                        text-sm sm:text-base md:text-lg xl:text-xl
                        max-w-3xl mx-auto
                    '
                >
                    We are proud to showcase our certifications and accreditations that demonstrate our commitment to quality, authenticity, and excellence in every piece we create.
                </motion.p>
            </motion.div>

            {/* Certifications Grid */}
            <div
                className='
                    grid
                    grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
                    gap-6 md:gap-8 xl:gap-10
                    max-w-[1716px] mx-auto
                '
            >
                {certifications.map((cert) => (
                    <motion.div
                        key={cert.id}
                        variants={cardItem}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0.25 }}
                        className='group cursor-pointer'
                    >
                        {/* Certificate Card with Image + Title Bar */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className='
                                relative overflow-hidden rounded-2xl
                                border-[3px] border-[#CEA574]
                            '
                            style={{ boxShadow: '0 8px 32px rgba(206, 165, 116, 0.2)' }}
                        >
                            {/* Certificate Image — wrapped in download link */}
                            <a
                                href={cert.image}
                                download={`${cert.title}.png`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='block'
                            >
                                <div className='aspect-[5/3] bg-gray-100 overflow-hidden'>
                                    <motion.img
                                        src={cert.image}
                                        alt={cert.title}
                                        className='w-full h-full object-contain'
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </a>

                            {/* View Icon - Bottom Right Corner */}
                            <div className='
                                absolute bottom-0 right-0
                                opacity-100 group-hover:opacity-100
                                transition-opacity duration-300
                                z-10 p-2 rounded-full
                            '>
                                <svg
                                    className="w-6 h-6 text-amber-00"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </div>
                            <div className='absolute bottom-0 w-full shadow-[200px_200px_200px_200px_rgba(0,0,0,0.8)]'></div>
                        </motion.div>

                        {/* Title Bar Overlay at Bottom */}
                        <div className='
                            px-4 sm:px-5 md:px-6 ml-[-15px]
                            pt-2 pb-4 sm:pb-5 md:pb-6
                        '>
                            <h3 className='
                                font-old-standard font-normal text-white
                                text-sm sm:text-base md:text-lg xl:text-xl
                                leading-tight
                            '>
                                {cert.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Certificates