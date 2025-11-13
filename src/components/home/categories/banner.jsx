// Imports
import React from 'react'
import { Link } from 'react-router-dom'

function Banner({src,title}) {
  return (
    <div className='banner'>
      <div className='img'>
        <img src={src} alt="bg" />
      </div>
      <div className="text">
        <h4>{title}</h4>
        <Link to="#">Shop Now</Link>
      </div>
    </div>
  )
}

export default Banner
