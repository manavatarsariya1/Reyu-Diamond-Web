import React, { useState } from 'react'
import logo from "@/assets/landingpage/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm '>
      <div className='flex justify-between items-center sm:p-10 md:h-25 p-4'>

        {/* Logo */}
        <div className='flex-shrink-0'>
          <img
            src={logo}
            alt="Reyu Jewels logo"
            className='w-[120px] sm:w-[150px] md:w-[180px] xl:w-[208px] h-auto'
          />
        </div>

        {/* Desktop Nav */}
        <div className='hidden xl:flex font-offside font-normal gap-[24px] 2xl:gap-[32px] justify-center items-center text-base 2xl:text-xl'>
          <Link className='hover:text-[#CEA574] text-[#FFFFFF] transition-colors' to="/">About Us</Link>
          <Link className='hover:text-[#CEA574] text-[#FFFFFF] transition-colors' to="/products">Diamonds</Link>
          <Link className='hover:text-[#CEA574] text-[#FFFFFF] transition-colors' to="/about">Collection</Link>
          <Link className='hover:text-[#CEA574] text-[#FFFFFF] transition-colors' to="/contact">Services</Link>
          <Link className='hover:text-[#CEA574] text-[#FFFFFF] transition-colors' to="/contact">Certificates</Link>
          <Link className='hover:text-[#CEA574] text-[#FFFFFF] transition-colors' to="/">Contact Us</Link>
          <Link
            className='border py-[8px] px-[16px] rounded-[50px] hover:text-[#CEA574] text-[#FFFFFF] transition-colors'
            to="/"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className='xl:hidden flex flex-col gap-[5px] p-2'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>

      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='font-offside font-normal flex flex-col gap-4 px-6 pb-6 text-base'>
          <Link to="/" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Diamonds</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>Collection</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Certificates</Link>
          <Link className='text-[#CEA574]' to="/" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link
            className='border py-[8px] px-[16px] rounded-[50px] text-center w-fit'
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar