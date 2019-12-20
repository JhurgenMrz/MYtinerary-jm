import React, { useState, useEffect } from "react";
import { Animated } from 'react-animated-css'
import "./City.css";

export const City = ({ city }) => {
  // const [rating, setRating] = useState([]);

  const rating = [];

  const showRating = (rating) => {
    let favNumber = []
    for (let i = 0; i < rating; i++) {
      favNumber.push("⭐");
    }

    return favNumber
  }

  return (
    <Animated 
      className="City"
      animationIn="bounceIn"
      animationInDuration="700"  
    >
      <span className="City__emojis">
        {
          showRating(city.rating)
        }
      </span>
      <img src={city.img_url} alt={city.city_name} />
      <p> {city.city_name} </p>
    </Animated>
  );
};
