import React from 'react'
import RightCardContent from './RightCardContent'   
const RightCard = (props) => {
  return (
    <div className="h-full w-80 shrink-0 overflow-hidden relative rounded-4xl bg-amber-300">
       <img className='h-full w-full object-cover' src="./src/assets/propic/image3.png" alt="" />
       
       <RightCardContent/>
    
       
        
    </div>
  )
}

export default RightCard