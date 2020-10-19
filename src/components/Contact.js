import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactForm">
      <h1>Contact</h1>
      <form action="sendEmail.php" method="POST">
        <div className="form-group">
          <label>Name</label>
          <input
            name="Naam"
            type="text"
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="Voornaam"
            type="text"
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="Email"
            type="email"
            className="form-control"
            placeholder="example@hotmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            name="Onderwerp"
            type="text"
            className="form-control"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="Bericht"
            className="form-control"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="sendButton_c">
          <button name="submitNL" type="submit" className="sendButton">
            <i className="far fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
