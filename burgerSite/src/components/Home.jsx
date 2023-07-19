import React from "react";
import { Link } from "react-router-dom";
import BurgerMain from "../assets/banneryeni.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${BurgerMain})` }}>
      <div className="order">
        <Link to="/menu">
          <button>SİPARİS VER</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
