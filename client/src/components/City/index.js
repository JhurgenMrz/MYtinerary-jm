import React, { useState, useEffect } from "react";
import "./City.css";

export const City = ({ city }) => {
  // const [rating, setRating] = useState([]);

  const rating = [];

  const showRating = (rating) =>{
    let favNumber = []
    for (let i = 0; i < rating; i++) {
        favNumber.push("😎");
    }

    return favNumber
  }

  return (
    <div className="City">
      <span className="City__emojis">
        {
            showRating(city.rating)
        }
      </span>
      <img src={city.img_url} alt={city.city_name} />
      <p> {city.city_name} </p>
    </div>
  );
};
