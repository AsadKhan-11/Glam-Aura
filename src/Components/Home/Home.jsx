import React from "react";
import "./Home.css";
import skincare from "./img/skincare.jpg";

function Home() {
  return (
    <div className="Home">
      <h1 className="home-header">
        UNLOCK THE SECRET TO <span>GLOWING SKIN</span>
      </h1>

      <div className="home-img-container">
        <img src={skincare} alt="" className="home-img" />
      </div>
    </div>
  );
}

export default Home;
