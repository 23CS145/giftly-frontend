import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount, user, onLogout }) => {
  const location = useLocation();
  const [menu, setMenu] = useState("");

  useEffect(() => {
    setMenu(location.pathname);  // Set active tab based on the current route
  }, [location.pathname]);

  return (
    <nav>
      <div className="navbar">
        <div className="nav-logo">
          <img
            src={"https://marketplace.canva.com/EAGTjuZxR5w/2/0/1600w/canva-pink-bold-typography-gift-shop-logo-Z9yDvy8eqlU.jpg"}
            alt="Shop Logo"
            className="logo"
          />
          <p>GIFTY</p>
        </div>

        <ul className="nav-links">
          <li className={menu === "/" ? "active" : ""}>
            <Link to="/" onClick={() => setMenu("/")}>Home</Link>
            {menu === "/" && <hr />}
          </li>
          <li className={menu === "/products" ? "active" : ""}>
            <Link to="/products" onClick={() => setMenu("/products")}>Products</Link>
            {menu === "/products" && <hr />}
          </li>
          <li className={`cart-icon ${menu === "/cart" ? "active-cart" : ""}`}>
            <Link to="/cart" onClick={() => setMenu("/cart")}>
              <img
                src={"https://cdn-icons-png.flaticon.com/512/879/879764.png"}
                alt="Cart Logo"
                className="cart-logo"
              />
            </Link>
            <div className="nav-cart-count">{cartCount}</div>
          </li>
          {user ? (
            <li>
              <button onClick={onLogout} className="logout-btn">Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
