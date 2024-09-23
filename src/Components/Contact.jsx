import React from 'react'

export const Contact = () => {
  return (
    <div className='bg-[#201c24] h-100vh] pt-36'>
        <h1 className='text-center text-white text-4xl kobus:text-6xl'>GET IN TOUCH </h1>

        <div className='grid grid-cols-1 pc:grid-cols-[30%_70%] kobus:grid-cols-[30%_70%] text-white place-items-center py-20'>
            <div className='text-white space-y-10 pb-20'> 
                <div>
                    <h1 className='text-4xl'>PHONE</h1>
                    <p className='text-2xl font-light text-gray-400 '>0736206484</p>
                </div>
                <div>
                    <h1 className='text-4xl'>ADDRESS</h1>
                    <p className='text-2xl font-light text-gray-400'>Johannesburg, Gauteng</p>
                </div>
                <div>
                    <h1 className='text-4xl'>EMAIL</h1>
                    <p className='text-2xl font-light text-gray-400'>fanelob46@gmail.com</p>
                </div>
            </div>
            <div className=''>
            <form action="" className='space-y-10'>
  <div className='gap-3  grid grid-cols-1'>
  <div className='relative grid grid-cols-1'>
      <label className='absolute top-0 left-2 text-sm text-gray-500'>Email</label>
      <input type="email" className='kobus:py-6 md:py-4 kobus:px-36 bg-[#20243c]'/>
    </div>
    <div className='relative grid grid-cols-1'>
      <label className='absolute top-0 left-2 text-sm text-gray-500'>Email</label>
      <input type="email" className='kobus:py-6 md:py-4 kobus:px-36 bg-[#20243c]'/>
    </div>
  </div>
  
  <div className='relative'>
    <label className='absolute top-0 left-2 text-sm text-gray-500'>Message</label>
    <input type="text" className='kobus:py-36 md:px-10 lg:px-20 py-20 kobus:px-96 pc:px-28 bg-[#20243c]' />
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
