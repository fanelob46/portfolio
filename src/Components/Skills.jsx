import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";






const Skills = () => {
  return (
    <div className='bg-[#201c24] h-100vh]' id='skills'>
        <h1 className='text-white text-8xl text-center '>Skills</h1>

        <div className='text-white grid grid-cols-2 space-x-20 px-20 py-20 '>
            <div className='shadow-white border-2 px-20 py-20 '>
                <h1 className='text-center text-5xl py-10'>Front-end</h1>
                <div className='grid grid-cols-3 place-items-center space-y-7 text-center '>
                    <div className=''>
                    <FaHtml5 className='text-orange-600 text-8xl' />
                    <h1>HTML5</h1>
                    </div>
                <div>
                <FaCss3Alt className='text-blue-800 text-8xl'/>
                <h1>CSS3</h1>
                </div>
                <div>
                <RiTailwindCssFill className='text-blue-200 text-8xl'/>
                <h1>TAILWIND</h1>
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

                <FaBootstrap className='text-blue-300 text-8xl'/>
                <h1>BOOTSTRAP</h1>
                </div>
                
                

                </div>
            </div>
            <div className='shadow-white border-2 px-20 py-20 '>
                <h1 className='text-center text-5xl py-10'>Back-end</h1>
                <div className='grid grid-cols-2 place-items-center space-y-7 text-center'>
                    <div className=' place-items-center'>
                    <BiLogoSpringBoot 
                    className='text-green-500 text-8xl' />
                    <h1>SPRING BOOT</h1>
                    </div>
                <div>
                <DiMysql className='text-blue-800 text-8xl'/>
                <h1>MYSQL</h1>
                </div>
                <div>
                <FaJava className='text-yellow-400 text-8xl'/>
                <h1>JAVA</h1>
                </div>
                
            
                <div className="net-icon">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#6a1b9a" d="M44,24c0,5.694-2.381,10.831-6.2,14.481l-0.006,0.006C34.2,41.9,29.344,44,24,44 C12.956,44,4,35.044,4,24c0-5.338,2.087-10.188,5.5-13.775c0.006-0.013,0.013-0.019,0.019-0.025C13.169,6.381,18.306,4,24,4 C35.044,4,44,12.956,44,24z"></path><path fill="#7b1fa2" d="M38.375,37.862c-0.187,0.213-0.381,0.419-0.575,0.619l-0.006,0.006C34.2,41.9,29.344,44,24,44 C12.956,44,4,35.044,4,24c0-5.338,2.087-10.188,5.5-13.775c0.006-0.013,0.013-0.019,0.019-0.025c0.2-0.194,0.406-0.387,0.619-0.575 L38.375,37.862z"></path><path fill="#fff" d="M8.626,27.281c-0.236,0.004-0.463-0.091-0.625-0.262c-0.167-0.165-0.259-0.39-0.256-0.625 c-0.002-0.234,0.091-0.459,0.256-0.625c0.161-0.174,0.388-0.272,0.625-0.269c0.237-0.001,0.463,0.097,0.625,0.269 c0.169,0.164,0.263,0.39,0.262,0.625c0.002,0.236-0.093,0.462-0.262,0.625C9.087,27.188,8.861,27.283,8.626,27.281z"></path><path fill="#fff" d="M21.044,27.125h-1.638l-5.856-9.087c-0.146-0.224-0.267-0.463-0.363-0.712h-0.05 c0.056,0.519,0.077,1.041,0.062,1.562v8.237h-1.331V15.731h1.731l5.7,8.925c0.237,0.371,0.392,0.625,0.462,0.763h0.031 c-0.066-0.556-0.093-1.115-0.081-1.675v-8.012h1.331V27.125z"></path><path fill="#fff" d="M30.057,27.125h-6.056V15.731h5.775v1.206h-4.412v3.788h4.113v1.2h-4.113v3.95h4.7L30.057,27.125z"></path><path fill="#fff" d="M39.001,16.938h-3.312v10.188h-1.331V16.938h-3.275v-1.206h7.919V16.938z"></path><path fill="#f2f2f2" d="M20.326,34.875c-0.451,0.219-0.949,0.324-1.45,0.306c-0.674,0.03-1.327-0.232-1.794-0.719 c-0.459-0.514-0.701-1.186-0.675-1.875c-0.034-0.754,0.239-1.489,0.756-2.038c0.505-0.517,1.203-0.798,1.925-0.775 c0.427-0.015,0.853,0.06,1.25,0.219v0.625c-0.382-0.212-0.813-0.319-1.25-0.312c-0.557-0.016-1.094,0.213-1.469,0.625 c-0.39,0.444-0.592,1.022-0.562,1.612c-0.029,0.559,0.159,1.108,0.525,1.531c0.355,0.382,0.86,0.59,1.381,0.569 c0.48,0.013,0.954-0.109,1.369-0.35L20.326,34.875z"></path><path fill="#f2f2f2" d="M22.882,35.181c-0.503,0.016-0.989-0.187-1.331-0.556c-0.342-0.381-0.519-0.882-0.494-1.394 c-0.032-0.541,0.155-1.073,0.519-1.475c0.371-0.362,0.876-0.555,1.394-0.531c0.49-0.026,0.967,0.163,1.306,0.519 c0.332,0.4,0.5,0.912,0.469,1.431c0.026,0.527-0.156,1.043-0.506,1.438C23.89,34.989,23.395,35.197,22.882,35.181z M22.926,31.762 c-0.348-0.015-0.684,0.13-0.912,0.394c-0.24,0.31-0.36,0.696-0.338,1.088c-0.022,0.38,0.098,0.754,0.338,1.05 c0.231,0.26,0.566,0.402,0.912,0.388c0.34,0.02,0.67-0.118,0.894-0.375c0.227-0.31,0.338-0.691,0.312-1.075 c0.025-0.386-0.086-0.768-0.312-1.081C23.599,31.888,23.268,31.745,22.926,31.762z"></path><path fill="#f2f2f2" d="M27.663,31.95c-0.135-0.088-0.295-0.13-0.456-0.119c-0.256,0.009-0.49,0.145-0.625,0.363 c-0.186,0.295-0.276,0.64-0.256,0.988v1.912h-0.625v-3.75h0.625v0.781l0,0c0.069-0.242,0.205-0.459,0.394-0.625 c0.163-0.141,0.372-0.219,0.587-0.219c0.121-0.005,0.242,0.012,0.356,0.05V31.95z"></path><path fill="#f2f2f2" d="M31.326,33.375h-2.644c-0.018,0.349,0.096,0.693,0.319,0.963c0.234,0.234,0.557,0.356,0.887,0.338 c0.424-0.004,0.833-0.152,1.163-0.419v0.562c-0.386,0.255-0.844,0.38-1.306,0.356c-0.472,0.024-0.93-0.164-1.25-0.513 c-0.325-0.406-0.488-0.918-0.456-1.438c-0.022-0.52,0.154-1.03,0.494-1.425c0.313-0.362,0.772-0.564,1.25-0.55 c0.432-0.024,0.851,0.151,1.138,0.475c0.288,0.379,0.43,0.85,0.4,1.325L31.326,33.375z M30.701,32.869 c0.013-0.29-0.076-0.575-0.25-0.806c-0.173-0.196-0.426-0.302-0.688-0.288c-0.272-0.003-0.533,0.108-0.719,0.306 c-0.206,0.218-0.335,0.496-0.369,0.794L30.701,32.869z"></path>
                </svg>
              </a>
              <h1>.NET CORE</h1>

            </div>
                

                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills