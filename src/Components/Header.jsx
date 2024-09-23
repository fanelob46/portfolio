import React from 'react'
import NavBar from './NavBar'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import pic from '../assets/pic.png'
import CV from "../assets/CV.pdf"

const Header = () => {
  return (
    <div className='bg-[#201c24] h-[100vh] '>
        <NavBar/>
        <div className='grid grid-cols-1  pc:grid-cols-2 text-white place-items-center py-20 px-10 '>
        <div className='border-2  border-dashed border-[#07f99d] md:size-[400px] rounded-full pl-10  size-[250px] lg:size-[600px] kobus:size-[800px] flex justify-center pc:order-last'>
                <div className='kobus:pt-[120px] lg:pt-[90px] pt-[40px] md:pt-[60px] '>
                <img src={pic} alt=""  className='border-2  border-[#201c24] md:size-[250px] lg:size-[350px] size-[150px] kobus:size-[450px]  '/>

                </div>
            </div>
            <div className='grid grid-cols-1  '>
                <div className='py-10 space-y-2 kobus:space-y-20'>
                    <h5 className='kobus:text-3xl md:text-5xl pc:text-2xl'>FullStack Developer</h5>
                    <h1 className='kobus:text-[120px] md:text-4xl pc:text-3xl'>Hello I'm</h1>
                    <h1 className='kobus:text-[120px] text-[#07f99d] md:text-3xl'>Baloyi Fanelo</h1>
                    <p className='kobus:text-5xl font-light md:text-3xl sm:w-[400px] kobus:w-[700px] text-gray-500 text-justify'>
  I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
</p>
                    
                </div>
                <div className='flex kobus:space-x-7 space-x-4 sm:justify-center'>
                <a href={CV} download={CV} className='text-center border-2 border-[#07f99d] rounded-full  px-2 md:px-4 md:py-2 '>
                    <div className='text-sm pt-3 md:text-2xl md:pb-2'>Download CV</div></a>
                <div className='flex space-x-6'>
                <FiGithub className=' border-2 border-[#07f99d] rounded-full kobus:text-7xl text-5xl py-4 text-[#07f99d] md:text-7xl'/>
                <FaLinkedinIn className='border-2 border-[#07f99d] rounded-full kobus:text-7xl py-4 text-5xl text-[#07f99d] md:text-7xl' />
               
                </div>
                </div>

                <div></div>
            </div>
            
        </div>
    </div>
  )
}

export default Header