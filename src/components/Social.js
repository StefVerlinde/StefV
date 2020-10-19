import React, { useState, useEffect } from "react";
import "./Social.css";

function Social() {

  const [classname1, setClassname1] = useState("social-icon-link");
  const [classname2, setClassname2] = useState("social-icon-link");
  const [classname3, setClassname3] = useState("social-icon-link");

  const listenScrollEvent = (event) => {
    if (window.scrollY < vhToPixels(95)) {
      setClassname1("social-icon-link");
    } else if (window.scrollY > vhToPixels(95)) {
      setClassname1("social-icon-link2");
    }
    if (window.scrollY < vhToPixels(90)) {
      setClassname2("social-icon-link");
    } else if (window.scrollY > vhToPixels(90)) {
      setClassname2("social-icon-link2");
    }
    if (window.scrollY < vhToPixels(85)) {
      setClassname3("social-icon-link");
    } else if (window.scrollY > vhToPixels(85)) {
      setClassname3("social-icon-link2");
    }
  };

  function vhToPixels (vh) {
    return Math.round(window.innerHeight / (100 / vh));
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  });

  return (
    <div className="social">
      <a href="https://www.facebook.com/stef.verlinde/" className={classname1} target="_blank" aria-label="Facebook" rel="noopener noreferrer">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="https://www.instagram.com/stefverlinde/" className={classname2} target="_blank" aria-label="Instagram" rel="noopener noreferrer">
        <i className="fab fa-instagram" />
      </a>
      <a href="https://www.linkedin.com/in/stef-verlinde-09922319a/" className={classname3} target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
        <i className="fab fa-linkedin" />
      </a>
    </div>
  );
}

export default Social;
