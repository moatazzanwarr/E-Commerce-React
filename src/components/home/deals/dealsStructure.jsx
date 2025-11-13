// Import
import React from 'react'

// Icons
import icons from '../../../assets/icons'

function DealsStructure({src,title,rate,company,price,previous}) {
  return (
    <div className='deals-card'>
      <div className="img">
        <img src={src} alt="banner" />
      </div>
      <div className="text">
        <h4>{title}</h4>
        <div className="rate"><span><icons.StarIcon className='i'/></span>{rate}</div>
        <p className='company'><span>By</span> {company}</p>
        <div className="price-add">
          <p className="price"><span>{price}</span><span>{previous}</span></p>
          <div className="add"><span><icons.ShoppingCartCheckoutIcon className='i'/></span> ADD</div>
        </div>
      </div>
    </div>
  )
}

export default DealsStructure
