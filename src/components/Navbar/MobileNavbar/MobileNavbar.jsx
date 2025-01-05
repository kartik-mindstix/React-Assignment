import React, { useState } from "react";
import "./MobileNavbar.css";
import { BsCart4 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const productQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="mobile-navbar">
      <div className="navbar-header">
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)} // Toggle menuOpen
        >
          <IoMdMenu />
        </button>

        <span className="logo" onClick={() => navigate("/")}>
          E-COM
        </span>

        <div className="icons-container">
          <span
            className="search-icon"
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <IoMdSearch />
          </span>

          <div
            className="cart-icon-container"
            onClick={() => navigate("/cart")}
          >
            <BsCart4 className="cart-icon" />
            {productQuantity > 0 && (
              <span className="cart-count">{productQuantity}</span>
            )}
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
          />
        </div>
      )}

      {/* Apply dropdown-open class based on menuOpen state */}
      <div
        className={`mobile-dropdown ${menuOpen ? "dropdown-open" : ""}`}
      >
        <ul className="dropdown-menu">
          <li onClick={() => navigate("/products")}>Products</li>
          <li onClick={() => navigate("/brands")}>Markets</li>
          <li onClick={() => navigate("/special-offers")}>Special Offers</li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
