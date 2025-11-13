// Imports
import React from 'react'
import './whatWeProvide.css'
import { Link } from 'react-router-dom'

// Images
import img_1 from '../../../assets/images/footerIcon1.png'
import img_2 from '../../../assets/images/footerIcon2.png'
import img_3 from '../../../assets/images/footerIcon3.png'
import img_4 from '../../../assets/images/footerIcon4.png'
import img_5 from '../../../assets/images/footerIcon5.png'
import img_6 from '../../../assets/images/footerIcon6.png'

// Data
import data from './data.json'

const src = [img_1,img_2,img_3,img_4,img_5,img_6]

function WhatWeProvide() {
  return (
    <div className='whatWeProvide'>
      <h1 className='mainTitle'>What We Provide?</h1>
      <div className="services">
        {
            data.map((item,index)=>(
                <div className="card" key={item.id}>
                    <div className="img">
                        <img src={src[index]} alt="img" />
                    </div>
                    <div className="text">
                        <h4>{item.title}</h4>
                        <p>{item.info}</p>
                    </div>
                    <Link to={item.to}>Read more</Link>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default WhatWeProvide
