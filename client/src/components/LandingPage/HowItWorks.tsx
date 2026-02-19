import React, { useState } from 'react'
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

const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full py-12 lg:py-20 px-4 sm:px-8 gap-10 lg:gap-16">

            {/* Left Side — Dynamic Text (desktop only) */}
            <div className="hidden lg:flex flex-col gap-6 justify-center w-[700px] transition-all duration-300 h-[400px]">
                <h2 className="font-playfair font-normal text-[50px] text-white leading-tight transition-all duration-300">
                    {activeStep === 0
                        ? "Customize Your Own Shape"
                        : steps[activeStep - 1].title}
                </h2>
                <p
                    className="font-old-standard font-normal text-[20px] leading-relaxed transition-all duration-300 mr-10"
                    style={{ color: "rgba(240,236,228,0.65)" }}
                >
                    {activeStep === 0
                        ? "From classic rounds to fancy one-of-a-kind shapes — we manufacture diamonds exactly the way you want, with calibrated sizes, premium make, with IGI certification upon request."
                        : steps[activeStep - 1].description}
                </p>
                <button
                    className="w-fit px-5 py-2 rounded-full text-lg font-normal font-offside border transition-all duration-200 hover:bg-[#CEA574] hover:text-black cursor-pointer"
                    style={{
                        border: "1px solid rgba(206,165,116,0.6)",
                        color: "#CEA574",
                    }}
                >
                    Get in touch
                </button>
            </div>

            {/* Mobile Header (mobile/tablet only) */}
            <div className="flex lg:hidden flex-col gap-4 w-full">
                <h2 className="font-playfair text-center font-normal text-[32px] sm:text-[40px] text-white leading-tight">
                    Customize Your Own Shape
                </h2>
                <p
                    className="font-old-standard font-normal text-center  text-[16px] sm:text-[18px] leading-relaxed mx-auto max-w-md"
                    style={{ color: "rgba(240,236,228,0.65)" }}
                >
                    From classic rounds to fancy one-of-a-kind shapes — we manufacture diamonds exactly the way you want, with calibrated sizes, premium make, with IGI certification upon request.
                </p>

                <div className='flex justify-center items-center'>

                    <button
                        className="w-fit  px-5  py-2 rounded-full text-base font-bold font-offside border transition-all duration-200 hover:bg-[#fce3c8] hover:text-black cursor-pointer"
                        style={{
                            border: "1px solid rgba(206,165,116,0.6)",
                            color: "#CEA574",
                        }}
                    >
                        Get in touch
                    </button>
                </div>
            </div>

            {/* Right Side — Steps */}
            <div className="flex flex-col gap-3 w-full lg:w-auto">
                <p className="text-center font-playfair text-[28px] sm:text-[32px] lg:text-[36px] text-white mb-2 transition-all duration-300">
                    How It Works
                </p>

                {steps.map((step) => {
                    const Icon = step.icon
                    const isActive = activeStep === step.id

                    return (
                        <div key={step.id} className="flex flex-col w-full lg:w-auto">

                            {/* Row: number bubble + step card */}
                            <div className="flex justify-center items-center gap-3 sm:gap-5 text-[#CEA574]">

                                {/* Step number bubble */}
                                <div
                                    className="w-7 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-[18px] font-normal font-offside transition-all duration-300"
                                    style={{
                                        background: isActive
                                            ? "rgba(206,165,116,0.2)"
                                            : "rgba(255,255,255,0.08)",
                                        color: isActive ? "#CEA574" : "rgba(240,236,228,0.5)",
                                        fontFamily: "'Jost', sans-serif",
                                        border: isActive
                                            ? "1px solid rgba(206,165,116,0.5)"
                                            : "1px solid rgba(255,255,255,0.1)",
                                    }}
                                >
                                    {step.id}
                                </div>

                                {/* Step card */}
                                <div
                                    onMouseEnter={() => setActiveStep(step.id)}
                                    onMouseLeave={() => setActiveStep(0)}
                                    onClick={() => setActiveStep(isActive ? 0 : step.id)}
                                    className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 cursor-pointer transition-all duration-300 h-[80px] sm:h-[90px] rounded-[16px] w-full lg:w-[523px]"
                                    style={{
                                        border: isActive
                                            ? "4px solid #CEA574"
                                            : "4px solid rgba(206,165,116,0.3)",
                                        background: isActive
                                            ? "rgba(206,165,116,0.08)"
                                            : "transparent",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] flex-shrink-0 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: isActive
                                                ? "rgba(206,165,116,0.15)"
                                                : "rgba(255,255,255,0.05)",
                                            border: isActive
                                                ? "1px solid rgba(206,165,116,0.4)"
                                                : "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <Icon size={16} color="#CEA574" />
                                    </div>

                                    {/* Label */}
                                    <span className="text-[15px] sm:text-[17px] lg:text-[20px] font-offside font-normal transition-all duration-300 leading-snug">
                                        {step.label}
                                    </span>
                                </div>
                            </div>

                            {/* Mobile only: description slides in below the card when tapped */}
                            <div
                                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out pl-10 ${isActive ? "max-h-[200px] opacity-100 mt-2 mb-1" : "max-h-0 opacity-0 mt-0"
                                    }`}
                            >
                                <div
                                    className="px-4 py-3 rounded-[12px] font-old-standard text-[14px] sm:text-[15px] leading-relaxed"
                                    style={{
                                        color: "rgba(240,236,228,0.75)",
                                        background: "rgba(206,165,116,0.06)",
                                        border: "1px solid rgba(206,165,116,0.25)",
                                    }}
                                >
                                    {step.description}
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HowItWorks