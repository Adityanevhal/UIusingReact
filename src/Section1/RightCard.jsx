import React from 'react'

const RightCard = () => {
  return (
    <div className="h-full w-80 overflow-hidden relative rounded-4xl bg-amber-300">
       <img className='h-full w-full object-cover' src="./src/assets/propic/image2.png" alt="" />
       
       <div className='absolute top-0 left-0 p-8 flex flex-col justify-between h-full w-full bg-amber-700'>
         <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-bold'>1</h2>
         <div>
            <p className='text-lg leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, corrupti?</p>
            <div className='flex justify-between'>
            <button className='bg-blue-500 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
            <button className='bg-blue-500 text-white font-medium px-4 py-2 rounded-full' ><i class="ri-arrow-right-line"></i></button>
           </div>
           </div>
       </div>

        
    </div>
  )
}

export default RightCard