import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaAngleDown,
  FaAngleUp,
  FaMoneyBillAlt,
  FaRegClock
} from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import "./Itinerary.css";
import { ActivityByIitinerary } from "../ActivityByItinerary";
import { Comments } from "../Comments";
import axios from "axios";

export const Itinerary = ({ itinerary }) => {
  const [showContentItinerary, setShow] = useState(false);
  const [activities, setActivities] = useState([]);

  async function fetchActivities() {
    const { data } = await axios.get(
      `http://localhost:5001/api/activities/${itinerary._id}`
    );
    // console.log(data.data);
    setActivities(data.data);
  }

  useEffect( () => {
    fetchActivities();
    // console.log("Activities", activities);
  }, []);

  const fadeContent = useSpring({
    display: showContentItinerary ? "flex" : "none",
    height: showContentItinerary ? 550 : 0,
    config: {
      duration: 1
    }
  });
  const fadeItinerary = useSpring({
    height: showContentItinerary ? 700 : 130,
    config: {
      duration: 0.3
    }
  });

  return (
    <animated.div className="Itinerary__item" style={fadeItinerary}>
      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
      >
        <div className="Itinerary__profile">
          <img src={itinerary.profilePic} alt="Profile" />
        </div>
        <div
          onClick={() => setShow(!showContentItinerary)}
          className="Itinerary__info"
        >
          <h4>{itinerary.title}</h4>
          <div className="Itineary__data">
            <p>{(itinerary.duration / 60).toFixed(0)}h</p>
            <FaRegClock />
            <p>{itinerary.price}</p>
            <FaMoneyBillAlt style={{ fontSize: 20, color: "green" }} />
            <p>{`Likes  ${itinerary.rating}`}</p>{" "}
            <FaHeart style={{ color: "rgb(204, 3, 3)" }} />
          </div>
          <div>
            {itinerary.hastag.map(el => (
              <p>#{el}</p>
            ))}
          </div>
        </div>
      </div>
      <animated.div className={`Itinerary__activities`} style={fadeContent}>
        <h4>Activities</h4>
        <div className="Itinerary__activities__slider">
          {activities.map((el, index) => {
            return <ActivityByIitinerary key={el._id} activity={el} />;
          })}
        </div>
        <Comments />
      </animated.div>
      <div
        onClick={() => setShow(!showContentItinerary)}
        className="Itinerary__button"
      >
        <p style={{ textAlign: "center", color: "#fff" }}>
          {!showContentItinerary ? <FaAngleDown /> : <FaAngleUp />}
          {!showContentItinerary ? " View All " : " Close "}
          {!showContentItinerary ? <FaAngleDown /> : <FaAngleUp />}
        </p>
      </div>
    </animated.div>
  );
};
