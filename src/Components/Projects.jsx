import React from 'react'
import pic from '../assets/Books.png'
import survey from '../assets/Survey.png'

const Projects = () => {
  return (
    <div className='bg-[#201c24] h-100vh] py-10'>
        <h1 className='text-4xl text-center text-white'>PROJECTS</h1>
        <div className='py-36 px-40 space-y-40'>
            <div className='grid grid-cols-2 place-items-center px-20 space-x-2 text-white text-4xl'>
              <div>
               <img src={survey} alt="" />
              </div>
              <div className='space-y-10'>
                <div>
                <h1 className=''>Survey</h1>
                </div>
              <div>
              <p className='font-light text-gray-400'>System to take Surveys on people's lifestyle</p>

              </div>
              <div className='flex space-x-8 text-2xl'>
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                    HTML5
                </div>
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                    JAVASCRIPT
                </div>
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                    Bootstrap
                </div>
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                    .NET CORE
                </div >
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                  SQL
                </div>
              </div>
              <div>
             <a href="https://github.com/fanelob46/SurveysAssessment" className='border-2 border-[#07f99d] rounded-full px-3 py-3 text-2xl'>View on Github</a>
              </div>
              </div>
            </div>
            <div className='grid grid-cols-2 place-items-center px-20 space-x-2 text-white text-4xl'>
              <div>
               <img src={pic} alt="" />
              </div>
              <div className='space-y-10'>
                <div>
                <h1 className=''>Buy and rent books online</h1>
                </div>
              <div>
              <p className='font-light text-gray-400'>System to book and rent books online for a library</p>

              </div>
              <div className='flex space-x-8 text-2xl'>
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                    HTML5
                </div>
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                    Bootstrap
                </div>
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                    .NET CORE
                </div >
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                  SQL
                </div>
                <div className='border-2 border-[#07f99d] py-3 px-3'>
                    JAVASCRIPT
                </div>
              </div>
              <div>
             <a href="https://github.com/fanelob46/BooksLibrary" className='border-2 border-[#07f99d] rounded-full px-3 py-3 text-2xl'>View on Github</a>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects