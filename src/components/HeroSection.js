import React from "react";
import "./HeroSection.css";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <div className="hero-c">
      <video src="/videos/video-4.mp4" autoPlay loop muted />
      <img src="/images/StefVerlinde.png" alt="profile pic" className="rounded-circle profilep"/>
      <h1>Stef Verlinde</h1>
      <p>Full-stack developer</p>
      <div className="hero-btns">
        <Link
          to="aboutMe"
          spy={true}
          smooth={true}
          duration={1000}
          className="btn btn--outline btn--large"
        >
          ABOUT ME
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
          className="btn btn--primary btn--large"
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
          className="btn btn--outline btn--large"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
