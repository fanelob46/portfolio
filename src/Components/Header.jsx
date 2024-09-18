import React from 'react'
import NavBar from './NavBar'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import pic from '../assets/pic.png'
import CV from "../assets/CV.pdf"

const Header = () => {
  return (
    <div className='bg-[#201c24] h-[100vh]'>
        <NavBar/>
        <div className='grid grid-cols-2 text-white place-items-center py-20 px-10 '>
            <div>
                <div className='py-10 space-y-2'>
                    <h5 className='text-6xl'>FullStack Developer</h5>
                    <h1 className='text-[120px]'>Hello I'm</h1>
                    <h1 className='text-[120px] text-[#07f99d]'>Baloyi Fanelo</h1>
                    <p className='text-5xl font-light w-[900px] text-gray-500 '>I excel at crafting elegant digital expreciences and I am proficient in various programming languages and technologies</p>
                    
                </div>
                <div className='flex space-x-7'>
                <a href={CV} download={CV} className='text-center border-2 border-[#07f99d] rounded-full px-4 text-2xl'>
                    <div className='pt-4'>Download CV</div></a>
                <div className='flex space-x-6'>
                <FiGithub className=' border-2 border-[#07f99d] rounded-full text-7xl py-4 text-[#07f99d] '/>
                <FaLinkedinIn className='border-2 border-[#07f99d] rounded-full text-7xl py-4 text-[#07f99d]' />
               
                </div>
                </div>

                <div></div>
            </div>
            <div className='border-2  border-dashed border-[#07f99d]  rounded-full pl-10   size-[800px] flex justify-center'>
                <div className='pt-[120px]'>
                <img src={pic} alt=""  className='border-2  border-[#201c24] size-[450px] pt-3 '/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header