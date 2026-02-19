import React from 'react'
import logo from "../../assets/landingpage/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="bg-white pt-20 pb-10 px-6 sm:px-12 lg:px-24 font-serif text-[#c49b66]">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                        <div className="lg:col-span-2 ">
                            <div className="flex items-center gap-4">
                                <img src={logo} height={100} width={250} alt="Reyu Jewels Logo" className=" object-contain mb-7" />

                            </div>

                            <p className="text-[#3A3A3A] font-playfair text-sm leading-relaxed max-w-sm">
                                Crafting timeless diamond elegance since 1999. Every piece tells a story of love, celebration, and the pursuit of perfection.
                            </p>

                            <div className="mt-5">
                                <span className="text-xl  uppercase  font-offside font-normal">Certified Excellence</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-playfair font-bold  text-lg text-[#626262] ">Quick Links</h3>
                            <ul className="space-y-4  font-offside uppercase text-lg text-[#CEA574] ">
                                <li><a href="#" className="hover:opacity-100 transition-opacity hover:underline">About us</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity hover:underline">Diamonds</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity hover:underline">Collection</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity hover:underline">Services</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity hover:underline">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-playfair font-bold text-lg tracking-tight text-[#626262]">Contact Info.</h3>
                            <ul className="space-y-4 text-sm font-offside">
                                <li className="hover:underline cursor-pointer">+91 98980 76868</li>
                                <li><a href="mailto:info@reyujewels.com" className="hover:underline">info@reyujewels.com</a></li>
                                <li className="text-gray-500 max-w-[200px]">
                                    301, Silver Stone Arcade, Causeway Rd, Katargam, Surat, Gujarat 395004
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-15 mt-10 border-t-1 flex flex-col md:flex-row justify-between items-center gap-6 text-lg font-old-standard border-[#0000001A]">
                        <p>© 2026 Reyu Jewels. All rights reserved.</p>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer