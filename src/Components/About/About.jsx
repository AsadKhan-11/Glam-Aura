import React from "react";
import aboutimg from "./img/aboutimg.jpg";
import "./About.css";
function About() {
  return (
    <div className="About">
      <h1 className="about-header">ABOUT US</h1>

      <div className="about-container">
        <div className=" item item1">
          <img src={aboutimg} alt="" className="secondary-img " />
        </div>
        <div className="item2 item">
          <h1 className="table-header">
            WHERE ELEGANCE MEETS EVERYONE - THAT'S <span>GLAM AURA</span>
          </h1>
        </div>
        <div className="item3 item">3</div>
        <div className="item4 item">4</div>
        <div className="item5 item">5</div>
        <div className="item6 item"></div>
        <div className="item7 item"></div>
        <div className="item8 item"></div>
        <div className="item9 item"></div>
        <div className="item10 item"></div>
        <div className="item11 item"></div>
        <div className="item12 item"></div>
      </div>
    </div>
  );
}

export default About;
