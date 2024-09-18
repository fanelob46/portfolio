import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className='flex justify-around text-white pt-16'>
            <h1 className='text-4xl'>Baloyi Fanelo<span className='text-[#07f99d] '>..</span></h1>
          
          <div className='flex space-x-4'>
          <ul className='flex space-x-7 text-3xl'>
                <li>Skills</li>
                <li>Projects</li>
                
            </ul>
            <button className='border-2 border-[#07f99d] rounded-full px-4 text-2xl text-black bg-[#07f99d]'>Hire me</button>
          </div>
            
        </nav>
    </div>
  )
}

export default NavBar