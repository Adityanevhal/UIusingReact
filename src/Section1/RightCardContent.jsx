import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 p-8 flex flex-col justify-between h-full w-full'>
         <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-bold'>{props.id + 1}</h2>
         <div>
            <p className='text-lg text-white mb-14 leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia possimus illum sint dolorum incidunt quod placeat ex! and ffvr</p>
            <div className='flex justify-between'>
            <button style={{background: props.color}} className='text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
            <button style={{background: props.color}} className='text-white font-medium px-4 py-2 rounded-full' ><i class="ri-arrow-right-line"></i></button>
           </div>
           </div>
       </div>
  )
  
}

export default RightCardContent