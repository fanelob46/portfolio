import React from 'react'
import pic from '../assets/Books.png'
import survey from '../assets/Survey.png'

const Projects = () => {
  return (
    <div className='bg-[#201c24] h-100vh] pt-36' id='projects'>
        <h1 className='text-4xl text-center text-white pb-10'>PROJECTS</h1>
        <div className='kobus:py-36 kobus:px-40 kobus:space-y-40 space-y-20'>
            <div className='grid grid-cols-1 pc:grid-cols-2 place-items-center kobus:px-20  text-white kobus:text-4xl'>
              <div className=''>
               <img src={survey} alt="" className='lg:px-16 md:px-20 '/>
              </div>
              <div className='kobus:space-y-10 space-y-5 space-x-4 md:pt-10 md:space-y-10 text-center'>
                <div>
                <h1 className='text-center sm:text-6xl'>Survey</h1>
                </div>
              <div>
              <p className='font-light md:w-[600px] sm:text-4xl text-gray-400'>System to take Surveys on people's lifestyle</p>

              </div>
              <div className='grid grid-cols-3 text-center gap-3 md:pb-5 text-[12px] px-5 sm:text-xl'>
                <div className='border-2 border-[#07f99d]  '>
                  <h1 className=''>
                  HTML5
                  </h1>
                </div>
                <div className='border-2 border-[#07f99d]  '>
                  <h1 className=''>
                  JAVASCRIPT
                  </h1>
                    
                </div>
                <div className='border-2 border-[#07f99d] '>
                    Bootstrap
                </div>
                <div className='border-2 border-[#07f99d] '>
                    .NET CORE
                </div >
                <div className='border-2 border-[#07f99d] '>
                  SQL
                </div>
              </div>
              <div className=''>
             <a href="https://github.com/fanelob46/SurveysAssessment" className='border-2 border-[#07f99d] rounded-full px-3 py-3 text-[12px] sm:text-xl'>View on Github</a>
              </div>
              </div>
            </div>
            <div className='grid grid-cols-1 pc:grid-cols-2 place-items-center sm:text-5xl px-20 space-x-2 text-white kobus:text-4xl'>
              <div className=''>
               <img src={pic} alt="" className='pc:w-[800px]' />
              </div>
              <div className='kobus:space-y-10 space-y-5 space-x-4 md:py-10 md:space-y-10 text-center'>
                <div>
                <h1 className='text-center'>Buy and rent books online</h1>
                </div>
              <div>
              <p className='font-light md:w-[600px] w-[250px] kobus:w-[400px] text-gray-400'>System to book and rent books online for a library</p>

              </div>
              <div className='grid grid-cols-3 text-center gap-3 text-[12px] sm:text-xl'>
              <div className='border-2 border-[#07f99d]  '>
                  <h1 className='pt-1'>
                  HTML5
                  </h1>
                    
                </div>
                <div className='border-2 border-[#07f99d]  '>
                  <h1 className=''>
                  JAVASCRIPT
                  </h1>
                    
                </div>
                <div className='border-2 border-[#07f99d]'>
                    Bootstrap
                </div>
                <div className='border-2 border-[#07f99d] '>
                    .NET CORE
                </div >
                <div className='border-2 border-[#07f99d] '>
                  SQL
                </div>
              </div>
              <div>
             <a href="https://github.com/fanelob46/BooksLibrary" className='border-2 border-[#07f99d] rounded-full px-3 py-3 text-[12px] sm:text-xl'>View on Github</a>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects