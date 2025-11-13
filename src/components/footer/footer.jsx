// Imports
import React from "react";
import "./footer.css";
import Banner from "./banner";

// Images
import footerBanner from "../../assets/images/footer-banner-1.png";
import footerIcon1 from "../../assets/images/footerIcon1.png";
import footerIcon2 from "../../assets/images/footerIcon2.png";
import footerIcon3 from "../../assets/images/footerIcon3.png";
import footerIcon4 from "../../assets/images/footerIcon4.png";
import footerIcon5 from "../../assets/images/footerIcon5.png";

// Icons
import icons from "../../assets/icons";

//Data
import data from './data.json'
import Lists from "./lists";
import { Link } from "react-router-dom";
const src = [footerIcon1, footerIcon2, footerIcon3, footerIcon4,footerIcon5];

function Footer() {
  return (
    <footer>
      <Banner src={footerBanner} />
      <div className="center">
        {data.map((d, i) => (
          <div className="item" key={d.id}>
            <div className="icon">
              <img src={src[i]} alt="icon" />
            </div>
            <div className="text">
              <h4>{d.title}</h4>
              <span>{d.type}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="boottom">
        <Lists/>
        <div>
          <div className="left">
            <p>© 2022, <span>Nest</span> - HTML Ecommerce Template<br/> All rights reserved</p>
          </div>
          <div className="center">
            <div>
              <div className="icon">
                <icons.CallIcon className="i"/>
              </div>
              <div className="text">
                <h4>1900 - 6666</h4>
                <span>Working 8:00 - 22:00</span>
              </div>
            </div>
            <div>
              <div className="icon">
                <icons.CallIcon className="i"/>
              </div>
              <div className="text">
                <h4>1900 - 8888</h4>
                <span>24/7 Support Center</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <h4>Follow Us</h4>
              <div className="links">
                <div><Link to="#"><icons.FacebookIcon className="i"/></Link></div>
                <div><Link to="#"><icons.TwitterIcon className="i"/></Link></div>
                <div><Link to="#"><icons.InstagramIcon className="i"/></Link></div>
                <div><Link to="#"><icons.PinterestIcon className="i"/></Link></div>
                <div><Link to="#"><icons.YouTubeIcon className="i"/></Link></div>
              </div>
            </div>
            <p>Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
