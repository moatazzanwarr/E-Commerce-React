// Imports
import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import icons from '../../assets/icons'

// Images
import logo from '../../assets/images/Logo.png'
import appStore from '../../assets/images/app-store.png'
import googlePlay from '../../assets/images/google-play.png'
import payment from '../../assets/images/payment-method.png'

function Lists() {
  return (
    <div className='lists'>
      <div className="col-1">
        <div className="img">
            <img src={logo} alt="logo" />
        </div>
        <div className="text">
            <h3>Awesome grocery store website template</h3>
            <p><icons.LocationOnIcon className='i'/>Address: 5171 W Campbell Ave</p>
            <p><icons.SupportAgentIcon className='i'/>Call Us:(+91) - 540-025-124553</p>
            <p><icons.SendIcon className='i'/>Email:sale@Nest.com</p>
            <p><icons.AccessTimeIcon className='i'/>Hours:10:00 - 18:00, Mon - Sat</p>
        </div>
      </div>
      <div className="col-2">
        <h4>Company</h4>
        <ul>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Delivery Information</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms & Conditions</Link></li>
            <li><Link to="#">Contact Us</Link></li>
            <li><Link to="#">Support Center</Link></li>
            <li><Link to="#">Careers</Link></li>
        </ul>
      </div>
      <div className="col-3">
        <h4>Account</h4>
        <ul>
            <li><Link to="#">Sign In</Link></li>
            <li><Link to="#">View Cart</Link></li>
            <li><Link to="#">My Wishlist</Link></li>
            <li><Link to="#">Track My Order</Link></li>
            <li><Link to="#">Help Ticket</Link></li>
            <li><Link to="#">Shipping Details</Link></li>
            <li><Link to="#">Compare products</Link></li>
        </ul>
      </div>
      <div className="col-4">
        <h4>Corporate</h4>
        <ul>
            <li><Link to="#">Become a Vendor</Link></li>
            <li><Link to="#">Affiliate Program</Link></li>
            <li><Link to="#">Farm Business</Link></li>
            <li><Link to="#">Farm Careers</Link></li>
            <li><Link to="#">Our Suppliers</Link></li>
            <li><Link to="#">Accessibility</Link></li>
            <li><Link to="#">Promotions</Link></li>
        </ul>
      </div>
      <div className="col-5">
        <h4>Popular</h4>
        <ul>
            <li><Link to="#">Milk & Flavoured Milk</Link></li>
            <li><Link to="#">Butter and Margarine</Link></li>
            <li><Link to="#">Eggs Substitutes</Link></li>
            <li><Link to="#">Marmalades</Link></li>
            <li><Link to="#">Sour Cream and Dips</Link></li>
            <li><Link to="#">Tea & Kombucha</Link></li>
            <li><Link to="#">Cheese</Link></li>
        </ul>
      </div>
      <div className="col-6">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="download">
            <Link to="#"><img src={appStore} alt="app store" /></Link>
            <Link to="#"><img src={googlePlay} alt="google play" /></Link>
        </div>

        <p>Secured Payment Gateways</p>
        <div className="pay">
            <Link to="#"><img src={payment} alt="pay" /></Link>
        </div>

      </div>
    </div>
  )
}

export default Lists
