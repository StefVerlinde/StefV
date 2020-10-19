import React, { useState, useEffect } from "react";
import "./Floatbutton.css";

function Floatbutton() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > vhToPixels(100)) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= vhToPixels(100)) {
      setShowScroll(false);
    }
  };

  function vhToPixels(vh) {
    return Math.round(window.innerHeight / (100 / vh));
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <button className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none'}}>
      <i class="fas fa-arrow-circle-up"></i>
    </button>
  );
}

export default Floatbutton;
