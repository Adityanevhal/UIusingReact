import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div id="right" className='h-full w-2/3 flex overflow-x-auto flex-nowrap gap-10 p-6'>
        {props.users.map(function(elem,idx){
          return <RightCard key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag} />

        })}
        </div>
  )
}

export default RightContent