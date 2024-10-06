import React from "react";
import aboutimg from "./img/aboutimg.jpg";
import orange from "./img/orange.png";
import peach from "./img/peach.png";
import lemon from "./img/lemon.png";
import spray1 from "./img/spray1.png";
import spray3 from "./img/spray3.png";

import "./About.css";
function About() {
  return (
    <div className="About">
      <h1 className="about-header">ABOUT US</h1>

      <img src={spray1} className="spray spray2" />
      <img src={spray3} className="spray spray1" />
      <div className="about-container">
        <div className=" item item1">
          <img src={aboutimg} alt="" className="secondary-img " />
        </div>
        <div className="item2 item">
          <h1 className="table-header">
            WHERE ELEGANCE MEETS EVERYONE - THAT'S <span>GLAM AURA</span>
          </h1>
        </div>
        <div className="item3 item">
          <img src={orange} className="fruit" />
        </div>
        <div className="item4 item"></div>
        <div className="item5 item"></div>

        <div className="item6 item"></div>

        <div className="item7 item"></div>
        <div className="item8 item">
          {" "}
          <img src={lemon} className="fruit" />
        </div>
        <div className="item9 item">
          <img src={peach} className="fruit" />
        </div>
        <div className="item10 item"></div>
        <div className="item11 item"></div>
        <div className="item12 item">
          <p className="item-para">
            At Glam Aura, we believe beauty is for everyone. Our mission is to
            inspire confidence and self-expression through high-quality,
            luxurious cosmetics that cater to all skin tones and styles. With a
            focus on innovation and inclusivity, our products are crafted to
            help you shine from within, enhancing your natural glow while
            embracing your unique beauty.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
