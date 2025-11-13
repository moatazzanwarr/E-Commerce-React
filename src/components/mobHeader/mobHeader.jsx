// Imports
import React from 'react'
import './mobHeader.css'
import { Link } from 'react-router-dom'

// Icons
import icons from '../../assets/icons'

// Images
import Logo from '../../assets/images/Logo.png'


function MopHeader() {
  const length = localStorage.getItem("length")
  return (
    <header className='mobHeader'>
      <div className='menu'>
        <icons.MenuIcon className='i'/>
      </div>
      <Link to="/" className='logo'>
        <img src={Logo} alt="logo" />
      </Link>
      <div>
        <div>
            <icons.FavoriteBorderIcon className='i'/>
            <span>2</span>
        </div>
        <div>
            <icons.ShoppingCartCheckoutIcon className='i'/>
            <span>{length}</span>
        </div>
      </div>
    </header>
  )
}

export default MopHeader
