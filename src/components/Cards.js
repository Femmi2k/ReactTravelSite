import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1> Check out these EPIC DESTINATIONS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../images/img-1.jpg"
              text="Explore the hidden volcanic ranges of Kirthar"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="../images/img-2.jpg"
              text="Explore the private island off the coast of Thatta"
              label="Mystery"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../images/img-9.jpg"
              text="Explore the hidden waterfall inside Moola"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="../images/img-7.jpg"
              text="Explore your deep rooted fantasies for nature in this wild ride"
              label="Forest"
              path="/services"
            />
            <CardItem
              src="../images/img-6.jpg"
              text="Explore the bustling streets and districts of Abbotabad"
              label="Venture"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
