import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="Nav">
      <div className="nav-container">
        <h2 className="nav-logo">
          Glam <span>Aura</span>
        </h2>

        <div className="links-container">
          <a href="#Home" className="links">
            Home
          </a>
          <a href="#Catalog" className="links">
            Catalog
          </a>
          <a href="#About Us" className="links">
            About Us
          </a>
          <a href="#Contact" className="links">
            Contact
          </a>
        </div>

        <div className="login-container">
          <ion-icon name="bag-handle-outline"></ion-icon>

          <a href="" className="nav-login links">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
