import NavLinks from "./NavLinks.tsx";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="normal-navbar">
      <p className="logo">CloneZ</p>
      <NavLinks />
      <button className="navbar-btn">Contact</button>
    </div>
  );
};

export default Navbar;
