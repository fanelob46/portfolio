import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#20243c] grid place-items-center'>
        <footer className='py-10 space-y-4'>
        <h1 className='text-white'>BALOYI FANELO</h1>
        <div className='flex space-x-5 '>
        <FiGithub className=' border-2 border-[#07f99d] rounded-full text-6xl py-4 text-[#07f99d] '/>
        <FaLinkedinIn className='border-2 border-[#07f99d] rounded-full text-6xl py-4 text-[#07f99d]' />
        </div>
        </footer>
        
        

    </div>
  )
}

export default Footer