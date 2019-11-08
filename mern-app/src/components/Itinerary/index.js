import React from "react";
import { FaHeart } from "react-icons/fa";
import "./Itinerary.css";

export const Itinerary = ({ itinerary }) => {
  return (
    <div className="Itinerary__item">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="Itinerary__profile">
          <img src={itinerary.profilePic} alt="Profile" />
        </div>
        <div className="Itinerary__info">

        
        <h4>{itinerary.title}</h4>
        <div className="Itineary__data">
          <p>{(itinerary.duration / 60).toFixed(0)}H </p>
          <p>${itinerary.price}</p>
          <p>
            Likes <FaHeart style={{ color: "rgb(204, 3, 3)" }} />{" "}
            {itinerary.rating}
          </p>
        </div>
        <div>
          {itinerary.hastag.map(el => (
            <p>#{el}</p>
          ))}
          </div>
        </div>
      </div>
        <div className="Itinerary__activities">
            <p style={{textAlign: 'center'}}>View All ⬇</p>
        </div>
    </div>
  );
};
