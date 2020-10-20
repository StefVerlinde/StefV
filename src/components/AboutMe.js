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
          My name is Stef Verlinde. I'm a graduated HoGent informatics student.
          My main interests are in fullstack web development. But I'm interested
          in anything that can improve my general programming skills.{" "}
        </div>
        <br></br>
        <div className="tekst">
          I have experience in multiple programming languages. The languages
          where I feel most comfortable in are html, css, c#, java and sql. On
          my linked-in profile you can view a list of all the languages where I
          have experience with.{" "}
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
          </a>{" "}
          as fullstack developer where I made an application based around
          managing Identity Server. The subject of my bachelorproef was the
          validation possibilities with the OAuth framework on basis of Azure
          rolling keys.{" "}
        </div>
        <br></br>{" "}
        <div className="tekst">
          In my free time I like to do sports, gaming and programming.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
