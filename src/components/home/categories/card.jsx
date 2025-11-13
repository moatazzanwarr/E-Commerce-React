// Imports
import React from 'react'
function Card({src,title,number}) {
  return (
    <div className='card'>
      <div>
        <img src={src} alt="card" />
      </div>
      <h4 className='title'>{title}</h4>
      <span>{number} items</span>
    </div>
  )
}

export default Card
