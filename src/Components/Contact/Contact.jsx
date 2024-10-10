import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="Contact">
      <h1 className="contact-header header">CONTACT US</h1>

      <form className="contact-form">
        <div className="info-container">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="input-txt"
          />
        </div>
        <div className="info-container">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="input-txt"
          />
        </div>
        <div className="info-container">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter Email" className="input-txt" />
        </div>
        <div className="info-container">
          <label htmlFor="">Description</label>
          <input
            type="text"
            placeholder="Enter Description"
            className="input-txt"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
