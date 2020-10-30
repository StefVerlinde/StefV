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
          My name is Stef Verlinde. I am a graduated applied computer sciences
          student. My main interests are fullstack web development, but I am
          interested in anything that can improve my general programming skills.{" "}
        </div>
        <br></br>
        <div className="tekst">
          As a person I like to get things right the first time I do them.
          That's what challenges me to learn a lot of new technologies and
          finish a project with the correct and newest method.{" "}
        </div>
        <br></br>
        <div className="tekst">
          Working in a team of friends is what really motivates me to to see a
          project trough, although I am not afraid to work alone / individually
          either as it is an extra challenge and learning opportunity.
        </div>
        <br></br>
        <div className="tekst">
          During my studies at HoGent I did an internship at{" "}
          <a
            href="https://www.orbid.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            Orbid
          </a>
          , where I worked with OAuth and Identity Server.{" "}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
