import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import { FiArrowRightCircle } from "react-icons/fi";
import "./Start.css";

export const Start = () => {
  return (
    <div className="start">
      <h3>Start Browsing</h3>
      <Link to="/cities">
        <Animated
          animationIn="tada"
          animationOut="zoomOut"
          animationInDuration="3000"
          animationOutDuration="1000"
          className="start__animation"
          animationInDelay="1000"
        >
          <FiArrowRightCircle />
        </Animated>
      </Link>
    </div>
  );
};
