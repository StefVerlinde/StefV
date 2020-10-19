import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards" id="projects">
      <h1>Projects</h1>
      <div className="cards__c">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/geertverlinde.png"
              text="Website for a graphic designer"
              path="/"
            />
            <CardItem
              src="images/qw.png"
              text="Website for a startup in Ghent"
              path="/"
            />
            <CardItem
              src="images/taijitan.png"
              text="Administrative tool for a non-profit organisation"
              path="/"
            />
          </ul>
          {/* <ul className="cards__items">
            <CardItem
              src=""
              text=""
              path="/"
            />
            <CardItem
              src=""
              text=""
              path="/"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
