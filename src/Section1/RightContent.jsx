import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div className='h-full w-2/3 flex overflow-x-auto flex-nowrap gap-10 p-6'>
        {props.users.map(function(elem){
          return <RightCard img={elem.img} />

        })}
        </div>
  )
}

export default RightContent