import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactForm" id="contact">
      <h1 data-aos="fade-right">Contact</h1>
      <form action="https://formspree.io/f/xbjpodnr" method="POST">
        <div data-aos="fade-left">
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
        </div>
        <div className="sendButton_c" data-aos="flip-right">
          <div class="g-recaptcha" data-sitekey="6Lelg9kZAAAAAEF-VaKtiD7rwBRfRd63w2YRJjBD"></div>
          <button name="submitNL" type="submit" className="sendButton">
            <i className="far fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
