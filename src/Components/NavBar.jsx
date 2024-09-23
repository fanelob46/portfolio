import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='flex justify-between items-center text-white pt-8 px-4'>
        {/* Logo */}
        <h1 className='text-3xl sm:text-4xl'>
          Baloyi Fanelo
          <span className='text-[#07f99d]'>..</span>
        </h1>
        
        {/* Hamburger Icon for Small Screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Links for Larger Screens */}
        <div className='hidden sm:flex sm:items-center space-x-7'>
          <ul className='flex space-x-7 text-2xl sm:text-3xl'>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <button className='border-2 border-[#07f99d] rounded-full px-6 py-2 text-2xl text-black bg-[#07f99d]'>
            Hire me
          </button>
        </div>

        {/* Mobile Menu (visible only when hamburger is clicked) */}
        {isOpen && (
          <div className='absolute top-20 left-0 w-full bg-black sm:hidden'>
            <ul className='flex flex-col items-center space-y-4 py-4 text-2xl'>
              <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li>
                <button className='border-2 border-[#07f99d] rounded-full px-6 py-2 text-2xl text-black bg-[#07f99d]' onClick={toggleMenu}>
                  Hire me
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
