import React from 'react'

export const Contact = () => {
  return (
    <div className='bg-[#201c24] h-100vh]'>
        <h1 className='text-center text-white text-6xl'>GET IN TOUCH </h1>

        <div className='grid grid-cols-[30%_70%] text-white place-items-center py-20'>
            <div className='text-white space-y-10'> 
                <div>
                    <h1 className='text-5xl'>PHONE</h1>
                    <p className='text-2xl font-light text-gray-400'>0736206484</p>
                </div>
                <div>
                    <h1 className='text-5xl'>ADDRESS</h1>
                    <p className='text-2xl font-light text-gray-400'>Johannesburg, Gauteng</p>
                </div>
                <div>
                    <h1 className='text-5xl'>EMAIL</h1>
                    <p className='text-2xl font-light text-gray-400'>fanelob46@gmail.com</p>
                </div>
            </div>
            <div className=''>
               <form action="" className='space-y-10'>
                <div className='grid grid-cols-2 space-x-5'>
                    <input type="text" placeholder='name' className='py-3 px-10'/>
                    <input type="email" placeholder='email' className='py-3 px-10'/>
                </div>
                <div>
                <input type="text" placeholder='message' className='py-36 px-96' />
                </div>
                <div>
                <a href="https://github.com/fanelob46/BooksLibrary" className='border-2 border-[#07f99d] rounded-full px-3 py-3 text-2xl'>SEND</a>

                </div>
               </form>
            </div>
 
        </div>
    </div>
  )
}
