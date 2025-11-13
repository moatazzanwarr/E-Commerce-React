// Imports
import React from 'react'

// Icons
import StarIcon from '@mui/icons-material/Star';

function Best_sells_product({src,type,title,rate,price,previous,sold}) {
  return (
    <div className='best_sells_product'>
      <div className="img">
        <img src={src} alt="img" />
      </div>
      <div className="text">
        <span className='type'>{type}</span>
        <h4>{title}</h4>
        <p className="rate">
            <StarIcon className='i'/>
            <span>({rate})</span>
        </p>

        <p className="price"><span>{price}</span><span>{previous}</span></p>

        <div className="range">
            <div></div>
        </div>
        <p className='sold'><span>sold: </span><span>{sold}</span>/<span>120</span></p>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default Best_sells_product
