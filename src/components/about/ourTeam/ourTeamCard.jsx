// Imports
import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import icons from '../../../assets/icons'

function OurTeamCard({src,name,tytle,faceBook,x,instagram,youtube}) {
  return (
    <div className='OurTeamCard'>
      <div className="img">
        <img src={src} alt="person" />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <h5>{tytle}</h5>
        <div className="social">
            <div>
                <Link to={faceBook}><icons.FacebookIcon className='i'/></Link>
            </div>
            <div>
                <Link to={x}><icons.TwitterIcon className='i'/></Link>
            </div>
            <div>
                <Link to={instagram}><icons.InstagramIcon className='i'/></Link>
            </div>
            <div>
                <Link to={youtube}><icons.YouTubeIcon className='i'/></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeamCard
