import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mobileNavLinks.scss";
import dropdownPlusBtn from "../../assets/home-imgs/dropdown-plus.png";

const MobileNavLinks = ({ mobileMenu, handleCloseAll }) => {
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
          <Link to="/" onClick={handleCloseAll}>
            Home
          </Link>
        </li>
        <li>
          <div className="catalog-link">
            <Link to="/collection/all" onClick={handleCloseAll}>
              Catalog
            </Link>
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
            <Link
              to="/collection/headphones"
              className="dropdown-link"
              onClick={handleCloseAll}
            >
              HeadPhones
            </Link>
            <Link
              to="/collection/earphones"
              className="dropdown-link"
              onClick={handleCloseAll}
            >
              Earphones
            </Link>
            <Link
              to="/collection/accessories"
              className="dropdown-link"
              onClick={handleCloseAll}
            >
              Accessories
            </Link>
          </div>
        </li>
        <li>
          <Link to="/blog" onClick={handleCloseAll}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contactus" onClick={handleCloseAll}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/faq" onClick={handleCloseAll}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={handleCloseAll}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavLinks;
