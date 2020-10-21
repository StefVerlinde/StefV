import React, { useEffect } from "react";
import "./AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="aboutMe">
      <div className="aboutMe__c" data-aos="fade-right">
        <h1>About Me</h1>
        <div className="tekst">
          My name is Stef Verlinde. I'm a graduated applied computer sciences
          student in Ghent. My main interests are fullstack web development. But
          I'm interested in anything that can improve my general programming
          skills.{" "}
        </div>
        <br></br>
        <div className="tekst">
          As a person I like to get things right the first time I do them.
          That's what challenges me to learn a lot of new technologies and
          finish a project with the correct and newest methode.{" "}
        </div>
        <br></br>
        <div className="tekst">
          Working in a team of friends is what really motivates me to bring a
          project to a good end result. Altough I'm not scared to work alone for
          the extra challenge to learn by myself.
        </div>
        <br></br>
        <div className="tekst">
          To graduate at HoGent I did an internship at{" "}
          <a
            href="https://www.orbid.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            Orbid
          </a>
          , where I worked around OAuth.{" "}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
