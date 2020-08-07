import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import mobileMenuBtn from "../../assets/home-imgs/mobile_menu_btn.png";
import mobileLogo from "../../assets/home-imgs/logo_mobile.png";
import cartMobile from "../../assets/home-imgs/cart_icon.png";
import arrowDown from "../../assets/home-imgs/down-arrow.png";
import Dropdown from "./Dropdown";

import { useSelector } from "react-redux";

function Navbar({ openCart, openMenu }) {
  const [navdropdown, setNavDropdown] = useState(false);
  const cart = useSelector((state) => state.products.cart);

  const handleNavDropdown = () => {
    setNavDropdown(true);
  };

  const handleCloseDropdown = () => {
    setNavDropdown(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <div className="mobile-menu-btn" onClick={openMenu}>
          <img src={mobileMenuBtn} alt="menu" />
        </div>

        <div className="logo-mobile">
          <Link to="/">
            <img src={mobileLogo} alt="logo-mobile" />
          </Link>
        </div>

        <div className="nav-links ">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="/collection/all"
                onClick={handleCloseDropdown}
                onMouseEnter={handleNavDropdown}
              >
                Catalog <img src={arrowDown} alt="arrowDown" />
              </Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contactus">Contact US</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="login-cart">
          <h4>
            <Link to="/login">Login</Link>
          </h4>
          <div className="cart-md" onClick={openCart}>
            <h4>Cart</h4>
            <span>{cart.length}</span>
          </div>
        </div>

        <div className="cart-mobile" onClick={openCart}>
          <img src={cartMobile} alt="cartMobile" />
          <span>{cart.length}</span>
        </div>
      </div>
      <Dropdown
        navdropdown={navdropdown}
        handleCloseDropdown={handleCloseDropdown}
      />
    </div>
  );
}

export default Navbar;
