import React from 'react'
import Header from '../components/LandingPage/Header'
import AboutSection from '../components/LandingPage/AboutSection'
import Navbar from '../components/layout/Navbar'
import DiamondDetail from '../components/LandingPage/DiamondDetail'
import DiamondShapesDetails from '../components/LandingPage/DiamondShapesDetails'
import HowItWorks from '../components/LandingPage/HowItWorks'
import SocialMediaSection from '../components/LandingPage/SocialMediaSection'
import Certificates from '../components/LandingPage/Certificates'
import ReviewSection from '../components/LandingPage/ReviewSection'
import ContactForm from '../components/LandingPage/ContactForm'
import Footer from '../components/layout/Footer'

const LandingPage = () => {
    return (
        <div className='bg-[#2A2A2A] text-white  '>

            <div className='sm:pt-50 pt-25'>

                <Navbar />
            </div>
            <Header />
            <AboutSection />
            <DiamondDetail />
            <p className='border border-[1.5px] border-[#CEA57480] '></p>
            <DiamondShapesDetails />
            <p className='border border-[1.5px] border-[#CEA57480] '></p>
            <HowItWorks />
            <p className='border border-[1.5px] border-[#CEA57480] '></p>
            <SocialMediaSection />
            <p className='border border-[1.5px] border-[#CEA57480] '></p>
            <Certificates />
            <p className='border border-[1.5px] border-[#CEA57480] '></p>
            <ReviewSection />
            <p className='border border-[1.5px] border-[#CEA57480] '></p>
            <ContactForm />
            {/* <p className='border border-[1.5px] border-[#CEA57480] '></p> */}
            <Footer />
        </div>
    )
}

export default LandingPage