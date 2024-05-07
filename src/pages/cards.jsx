import React from 'react'

export const Cards = (props) => {
  return (
    <div>
      <div>
        <img src={props.img}  alt='image Poster'/>
        <p className='text-white'>{props.title}</p>
        <p className='text-white'>{props.year}</p>
      </div>
    </div>
  )
}
