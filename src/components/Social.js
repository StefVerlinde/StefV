import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <Link className={classname1} to="/" target="_blank" aria-label="Facebook">
        <i className="fab fa-facebook-f" />
      </Link>
      <Link className={classname2} to="/" target="_blank" aria-label="Instagram">
        <i className="fab fa-instagram" />
      </Link>
      <Link className={classname3} to="/" target="_blank" aria-label="LinkedIn">
        <i className="fab fa-linkedin" />
      </Link>
    </div>
  );
}

export default Social;
