import React from "react";
import { Link } from "react-router-dom";
import BurgerLogo from "../assets/burgerlogo.png";
import "../styles/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="main">
        <img src={BurgerLogo} alt="" />
        <div className="mainLink">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/Contact">İletişim</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
