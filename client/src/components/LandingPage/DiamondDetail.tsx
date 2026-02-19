import DiamondDetailCard, { type DiamondCardProps } from './DiamondDetailCard'
import image1 from "../../assets/landingpage/diamondetail-image1.png"
import image2 from "../../assets/landingpage/diamondetail-image2.png"

const cards: DiamondCardProps[] = [
    {
        id: 1,
        title: "CVD Diamonds",
        subtitle: "Chemical Vapor Deposition",
        description: "Created in controlled laboratory environments, CVD diamonds deliver authentic sparkle, superior hardness, and certified quality, providing an eco-friendly, conflict-free alternative to traditional mining while maintaining timeless elegance, durability, transparency, and accessible luxury for conscious consumers.",
        stat1Value: "High",
        stat1Label: "Clarity & Purity",
        stat2Value: "Eco-Friendly",
        stat2Label: "Sustainable Process",
        image: image1,
    },
    {
        id: 2,
        title: "HPHT Diamonds",
        subtitle: "High Pressure High Temperature",
        description: "Created under intense pressure and heat, HPHT diamonds offer authentic chemical composition, stunning brilliance, certified quality, and responsible origins, providing a conflict-free, eco-conscious alternative to mined diamonds while maintaining timeless luxury and durability.",
        stat1Value: "Exceptional",
        stat1Label: "Color & Brilliance",
        stat2Value: "Certified",
        stat2Label: "Quality Assured",
        image: image2,
    },
];

const DiamondDetail = () => {
    return (
        <div className='px-4 sm:px-8 md:px-12 xl:px-[80px] py-12 md:py-16 xl:py-[80px]'>

            {/* Header */}
            <div className='text-center mb-10 md:mb-14 xl:mb-16'>
                <h1 className='
                    font-offside font-normal text-[#CEA574]
                    text-base
                    sm:text-lg
                    xl:text-2xl
                '>
                    Lab-Grown Excellence
                </h1>
                <h1 className='
                    font-playfair font-normal leading-tight
                    text-[32px]
                    sm:text-[40px]
                    md:text-[48px]
                    xl:text-[56px]
                '>
                    CVD & HPHT Diamond
                </h1>
            </div>

            {/* Cards */}
            <div className='
                flex flex-col items-center gap-8
                md:flex-row md:flex-wrap md:justify-center md:gap-8
                xl:flex-row xl:justify-evenly xl:gap-0
            '>
                {cards.map((card) => (
                    <DiamondDetailCard
                        key={card.id}
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        stat1Value={card.stat1Value}
                        stat1Label={card.stat1Label}
                        stat2Value={card.stat2Value}
                        stat2Label={card.stat2Label}
                        image={card.image}
                    />
                ))}
            </div>

        </div>
    )
}

export default DiamondDetail