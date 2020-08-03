import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mobileNavLinks.scss";
import dropdownPlusBtn from "../../assets/home-imgs/dropdown-plus.png";

const MobileNavLinks = ({ mobileMenu }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropDown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div
      className={
        mobileMenu ? "mobile-nav-container open" : "mobile-nav-container"
      }
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div className="catalog-link">
            <Link to="/collection/all">Catalog</Link>
            <img
              src={dropdownPlusBtn}
              onClick={handleDropDown}
              alt="dropdownPlusBtn"
            />
          </div>

          <div
            className={
              dropdown
                ? "catalog-dropdown catalog-dropdown-active"
                : "catalog-dropdown"
            }
          >
            <Link to="/collection/headphones" className="dropdown-link">
              HeadPhones
            </Link>
            <Link to="/collection/earphones" className="dropdown-link">
              Earphones
            </Link>
            <Link to="/collection/accessories" className="dropdown-link">
              Accessories
            </Link>
          </div>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavLinks;
