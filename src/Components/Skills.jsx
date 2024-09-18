import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";





const Skills = () => {
  return (
    <div className='bg-[#201c24] h-100vh]'>
        <h1 className='text-white text-8xl text-center '>Skills</h1>

        <div className='text-white grid grid-cols-2 space-x-20 px-20 py-20 '>
            <div className='shadow-white border-2 px-20 py-20 '>
                <h1 className='text-center text-5xl py-10'>Front-end</h1>
                <div className='grid grid-cols-3 space-x-20'>
                    <div className=' place-items-center'>
                    <FaHtml5 className='text-orange-600 text-8xl' />
                    <h1>HTML5</h1>
                    </div>
                <div>
                <FaCss3Alt className='text-blue-800 text-8xl'/>
                <h1>CSS3</h1>
                </div>
                <div>
                <IoLogoJavascript className='text-yellow-400 text-8xl'/>
                <h1>JAVASCRIPT</h1>
                </div>
                <div>
                <FaReact className='text-blue-400 text-8xl' />
                <h1>REACTJS</h1>
                </div>
                <div>

                <FaBootstrap className='text-orange-600 text-8xl'/>
                <h1>BOOTSTRAP</h1>
                </div>
                <div>
                <DiJqueryLogo className='text-orange-600 text-8xl' />
                <h1>JQUERY</h1>
                </div>
                

                </div>
            </div>
            <div className='shadow-white border-2'>
                <h1 className='text-center text-4xl'>Front-end</h1>
                <div className='grid grid-cols-3'>
                    <div>
                    <FaHtml5 />
                    <h1>HTML5</h1>
                    </div>
                <div>
                <FaCss3Alt />
                <h1>CSS3</h1>
                </div>
                <div>
                <IoLogoJavascript />
                <h1>JAVASCRIPT</h1>
                </div>
                <div>
                <FaReact />
                <h1>REACTJS</h1>
                </div>
                <div>

                <FaBootstrap />
                <h1>BOOTSTRAP</h1>
                </div>
                <div>
                <DiJqueryLogo />
                <h1>JQUERY</h1>
                </div>
                

                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills