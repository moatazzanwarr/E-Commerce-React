// Imports
import React from 'react'

// Icons
import icons from '../../../assets/icons'

function Product({mainTitle,src_1,src_2,src_3,title,rate,price,previous}) {
  return (
    <div className='product'>
      <h1>{mainTitle}</h1>
      <div className="range"><div></div></div>
      <div className="item">
        <div className="img">
            <img src={src_1} alt="img" />
        </div>
        <div className="text">
            <h4>{title}</h4>
            <div className="rate">
                <span><icons.StarIcon className='i'/></span> {rate}
            </div>
            <div className="price">
                <span>${price}</span><span>${previous}</span>
            </div>
        </div>
      </div>

      <div className="item">
        <div className="img">
            <img src={src_2} alt="img" />
        </div>
        <div className="text">
            <h4>{title}</h4>
            <div className="rate">
                <span><icons.StarIcon className='i'/></span> {rate}
            </div>
            <div className="price">
                <span>${price}</span><span>${previous}</span>
            </div>
        </div>
      </div>

      <div className="item">
        <div className="img">
            <img src={src_3} alt="img" />
        </div>
        <div className="text">
            <h4>{title}</h4>
            <div className="rate">
                <span><icons.StarIcon className='i'/></span> {rate}
            </div>
            <div className="price">
                <span>${price}</span><span>${previous}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
