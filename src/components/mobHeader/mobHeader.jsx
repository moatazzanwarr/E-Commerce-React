// Imports
import React, { useContext, useState } from "react";
import "./mobHeader.css";
import { Link } from "react-router-dom";

// Icons
import icons from "../../assets/icons";

// Images
import Logo from "../../assets/images/Logo.png";

// cart context
import { CartContext } from "../../context/cartContext";

function MopHeader() {
  const [status, setStatus] = useState(false);

  const { cartQty } = useContext(CartContext);
  return (
    <>
      <header className="mobHeader">
        <div
          className="menu"
          onClick={() => (status ? setStatus(false) : setStatus(true))}
        >
          <icons.MenuIcon className="i" />
        </div>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <div>
          <div>
            <Link to="/cart">
              <icons.ShoppingCartCheckoutIcon className="i" />
            </Link>
            <span>{cartQty}</span>
          </div>
          <div>
            <Link to="/createAccount">
              <icons.PersonOutlineIcon className="i" />
            </Link>
          </div>
        </div>
      </header>

      <div
        className={
          status ? "mobileMenu openedMobileMenu" : "mobileMenu closedMobileMenu"
        }
      >
        <div className="ln">
          <Link to="/">Home</Link>
        </div>
        <div className="ln">
          <Link to="/about">About</Link>
        </div>
        <div className="ln">
          <Link to="/shop">Shop</Link>
        </div>
        <div className="ln">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default MopHeader;
