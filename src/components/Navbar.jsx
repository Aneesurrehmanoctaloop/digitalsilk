import React, { useState, useEffect } from 'react';
import logo from "../assets/ds-logo.svg";
import Hamburger from './shared/Hamburger';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // add bg on scroll 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); 
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`h-20  border-b border-[#ffffff40] border-solid flex items-center justify-between px-8 fixed w-full top-0 transition-colors duration-300 z-50 ${
        isScrolled ? 'bg-[#132761F2]' : 'bg-transparent'
      }`}
    >
      {/* logo */}
      <div>
        <img src={logo} alt="logo" className="filter brightness-0 invert w-60" />
      </div>
      <div className="flex items-center gap-4">
        <button className='uppercase border border-[#fff] border-solid h-12 px-6 font-semibold text-[#fff] bg-[#ffffff10]'>
          Request a quote
        </button>
       
        <Hamburger/> 
      </div>
    </nav>
  );
};

export default Navbar;
