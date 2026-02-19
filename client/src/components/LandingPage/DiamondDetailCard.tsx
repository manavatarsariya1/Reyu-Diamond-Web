import React from "react";

interface DiamondCardProps {
    image?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    stat1Label?: string;
    stat1Value?: string;
    stat2Label?: string;
    stat2Value?: string;
}

const DiamondDetailCard: React.FC<DiamondCardProps> = ({
    image,
    title = "CVD Diamonds",
    subtitle = "Chemical Vapor Deposition",
    description = "Created in controlled laboratory environments, CVD diamonds deliver authentic sparkle, superior hardness, and certified quality, providing an eco-friendly, conflict-free alternative to traditional mining while maintaining timeless elegance, durability, transparency, and accessible luxury for conscious consumers.",
    stat1Label = "Clarity & Purity",
    stat1Value = "High",
    stat2Label = "Sustainable Process",
    stat2Value = "Eco-Friendly",
}) => {
    return (
        <div className="
            flex flex-col
            border-[4px] border-[#CEA574] rounded-2xl overflow-hidden
            w-[320px]  h-auto
            sm:w-[420px]
            md:w-[500px]
            xl:w-[600px] xl:h-[732px]
            mt-10
        ">

            {/* ── Image Box ── */}
            <div
                className="
                    w-full border-[4px] border-[#CEA574] rounded-[12px] overflow-hidden flex-shrink-0
                    h-[200px]
                    sm:h-[260px]
                    md:h-[300px]
                    xl:h-[348px]
                "
                style={{ boxShadow: "0px 5px 27px 0px #CEA57440" }}
            >
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #2a2620 0%, #1a1612 100%)" }}
                    >
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity={0.3}>
                            <rect x="10" y="25" width="60" height="40" rx="4" stroke="#b89a5a" strokeWidth="2" />
                            <circle cx="40" cy="45" r="12" stroke="#b89a5a" strokeWidth="2" />
                            <circle cx="57" cy="32" r="4" stroke="#b89a5a" strokeWidth="2" />
                        </svg>
                    </div>
                )}
            </div>

            {/* ── Text Body ── */}
            <div className="
                flex flex-col flex-1
                p-4
                sm:p-5
                md:p-6
                xl:p-7
            ">
                {/* Title */}
                <h2 className="
                    font-playfair font-normal leading-tight
                    text-[22px]
                    sm:text-[26px]
                    md:text-[28px]
                    xl:text-[32px]
                ">
                    {title}
                </h2>

                {/* Subtitle */}
                <p className="
                    font-offside font-normal text-[#CEA574]
                    text-[13px]
                    sm:text-[15px]
                    md:text-[17px]
                    xl:text-[20px]
                    mt-1 xl:mt-2
                ">
                    {subtitle}
                </p>

                {/* Description */}
                <p className="
                    font-old-standard font-normal
                    text-[13px]
                    sm:text-[14px]
                    md:text-[15px]
                    xl:text-[18px]
                    mt-2 xl:mt-3
                    leading-relaxed
                ">
                    {description}
                </p>

                {/* ── Stats Row ── */}
                <div className="flex justify-between mt-4 xl:mt-6">
                    <div className="flex flex-col">
                        <span className="
                            font-offside font-normal text-[#CEA574]
                            text-[14px]
                            sm:text-[16px]
                            xl:text-[20px]
                        ">
                            {stat1Value}
                        </span>
                        <span className="
                            font-offside font-normal text-[#BABABA]
                            text-[11px]
                            sm:text-[12px]
                            xl:text-[14px]
                        ">
                            {stat1Label}
                        </span>
                    </div>

                    <div className="flex flex-col text-right">
                        <span className="
                            font-offside font-normal text-[#CEA574]
                            text-[14px]
                            sm:text-[16px]
                            xl:text-[20px]
                        ">
                            {stat2Value}
                        </span>
                        <span className="
                            font-offside font-normal text-[#BABABA]
                            text-[11px]
                            sm:text-[12px]
                            xl:text-[14px]
                        ">
                            {stat2Label}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiamondDetailCard;