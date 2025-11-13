import React from 'react'

function Banner({src}) {
  return (
    <div className='banner'>
      <div className="text">
        <h1>Stay home & get your daily<br/> needs from our shop</h1>
        <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
        <form action="">
            <input type="text" placeholder="Your emaill address" />
            <input type="submit" value="Subscribe" />
          </form>
      </div>
      <div className="img">
        <img src={src} alt="banner" />
      </div>
    </div>
  )
}

export default Banner
