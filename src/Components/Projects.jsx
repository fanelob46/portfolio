import React from 'react'
import pic from '../assets/Books.png'
import survey from '../assets/Survey.png'
import { FiEye } from "react-icons/fi";
import { HiMiniCodeBracket } from "react-icons/hi2";


const Projects = () => {
  return (
    <div className="bg-[#201c24] h-100vh] pt-36" id="projects">
      <h1 className="text-9xl  text-white "> RECENTS</h1>
      <h1 className="text-9xl  text-white pb-10"> PROJECTS</h1>
      <div className="grid grid-cols-2 place-items-center">
        <div className="bg-slate-900 size-[400px]">
          <div className="">
            <img src={survey} className="" />
          </div>
          <div className="space-y-3 py-5 text-center ">
            <h1 className="pl-9 text-white text-3xl">Survey</h1>
            <p className="pl-9 text-white ">Full-stack survey website</p>
          </div>

          <div className="text-white flex justify-center space-x-6 ">
            <a href="https://github.com/fanelob46/SurveysAssessment">
              <button className="bg-blue-500 flex  py-2 rounded-md px-2">
                <div className="pr-2 pt-[5px]">
                  <HiMiniCodeBracket />
                </div>
                code
              </button>
            </a>

            <button className="bg-blue-500 flex  py-2 rounded-md px-2">
              <div className="pr-2 pt-[5px]">
                <FiEye />
              </div>
              live Demo
            </button>
          </div>
        </div>
        <div className="bg-slate-900 size-[500px]">
          <div className="">
            <img src={survey} className="" />
          </div>
          <div className="space-y-3 py-5 text-center">
            <h1 className="pl-9 text-white text-3xl">Survey</h1>
            <p className="pl-9 text-white ">Full-stack survey website</p>
          </div>

          <div className="text-white flex justify-center space-x-6 pl-7">
            <button className="bg-blue-500 flex  py-2 rounded-md px-2">
              <div className="pr-2 pt-[5px]">
                <HiMiniCodeBracket />
              </div>
              code
            </button>
            <button className="bg-blue-500 flex  py-2 rounded-md px-2">
              <div className="pr-2 pt-[5px]">
                <FiEye />
              </div>
              live Demo
            </button>
          </div>
        </div>
      </div>
      {/* <div className="kobus:py-36 kobus:px-40 kobus:space-y-40 space-y-20">
        <div className="grid grid-cols-1 pc:grid-cols-2 place-items-center kobus:px-20  text-white kobus:text-4xl">
          <div className="">
            <img src={survey} alt="" className="lg:px-16 md:px-20 " />
          </div>
          <div className="kobus:space-y-10 space-y-5 space-x-4 md:pt-10 md:space-y-10 text-center">
            <div>
              <h1 className="text-center sm:text-6xl">Survey</h1>
            </div>
            <div>
              <p className="font-light md:w-[600px] sm:text-4xl text-gray-400">
                System to take Surveys on people's lifestyle
              </p>
            </div>
            <div className="grid grid-cols-3 text-center gap-3 md:pb-5 text-[12px] px-5 sm:text-xl">
              <div className="border-2 border-[#07f99d]  ">
                <h1 className="">HTML5</h1>
              </div>
              <div className="border-2 border-[#07f99d]  ">
                <h1 className="">JAVASCRIPT</h1>
              </div>
              <div className="border-2 border-[#07f99d] ">Bootstrap</div>
              <div className="border-2 border-[#07f99d] ">.NET CORE</div>
              <div className="border-2 border-[#07f99d] ">SQL</div>
            </div>
            <div className="">
              <a
                href="https://github.com/fanelob46/SurveysAssessment"
                className="border-2 border-[#07f99d] rounded-full border-dashed px-3 py-3 text-[12px] sm:text-xl
             transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-full hover:shadow-[4px_4px_0px_#201c24] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none"
              >
                View on Github
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 pc:grid-cols-2 place-items-center sm:text-5xl px-20 space-x-2 text-white kobus:text-4xl">
          <div className="">
            <img src={pic} alt="" className="pc:w-[800px]" />
          </div>
          <div className="kobus:space-y-10 space-y-5 space-x-4 md:py-10 md:space-y-10 text-center">
            <div>
              <h1 className="text-center">Buy and rent books online</h1>
            </div>
            <div>
              <p className="font-light md:w-[600px] w-[250px] kobus:w-[400px] text-gray-400">
                System to book and rent books online for a library
              </p>
            </div>
            <div className="grid grid-cols-3 text-center gap-3 text-[12px] sm:text-xl">
              <div className="border-2 border-[#07f99d]  ">
                <h1 className="pt-1">HTML5</h1>
              </div>
              <div className="border-2 border-[#07f99d]  ">
                <h1 className="">JAVASCRIPT</h1>
              </div>
              <div className="border-2 border-[#07f99d]">Bootstrap</div>
              <div className="border-2 border-[#07f99d] ">.NET CORE</div>
              <div className="border-2 border-[#07f99d] ">SQL</div>
            </div>
            <div>
              <a
                href="https://github.com/fanelob46/BooksLibrary"
                className="border-2 border-[#07f99d] rounded-full px-3 py-3 text-[12px] sm:text-xl"
              >
                View on Github
              </a>
            </div>
          </div>
        </div>
      </div>  */}
    </div>
  );
}

export default Projects