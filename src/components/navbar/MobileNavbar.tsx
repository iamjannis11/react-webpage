import "./navbar.css";
import { CgMenuHotdog } from "react-icons/cg";
import React from "react";

const MobileNavbar = () => {
  const [toggle, setToggleMenu] = React.useState(false);

  const toggleMenu = () => {
    setToggleMenu(!toggle);
  };
  return (
    <div className="mobile-navbar">
      <div className="logo-box">
        <p className="logo">CloneZ</p>
      </div>
      <div>
        <CgMenuHotdog
          className="hamburger icon-box"
          size="40px"
          color="white"
          cursor="pointer"
          onClick={toggleMenu}
        />
        {toggle && (
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#property" onClick={() => setToggleMenu(false)}>
                Property
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setToggleMenu(false)}>
                Sevices
              </a>
            </li>
            <li>
              <a href="#aboutUs" onClick={() => setToggleMenu(false)}>
                About Us
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="btn-box">
        <button className="navbar-btn">Contact</button>
      </div>
    </div>
  );
};

export default MobileNavbar;
