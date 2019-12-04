import React, { useState, useEffect } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaMoneyBillAlt,
  FaRegClock
} from "react-icons/fa";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { useSpring, animated } from "react-spring";
import "./Itinerary.css";
import { ActivityByIitinerary } from "../ActivityByItinerary";
import { Comments } from "../Comments";
import axios from "axios";

export const Itinerary = ({ itinerary, isLiked }) => {
  const [showContentItinerary, setShow] = useState(false);
  const [activities, setActivities] = useState([]);
  const [Liked, setLiked] = useState(isLiked);

  async function fetchActivities() {
    const { data } = await axios.get(
      `http://localhost:5001/api/activities/${itinerary._id}`
    );
    // console.log(data.data);
    setActivities(data.data);
  }

  useEffect(() => {
    fetchActivities();
    // console.log("Activities", activities);
  }, []);

  const fadeContent = useSpring({
    display: showContentItinerary ? "flex" : "none",
    height: showContentItinerary ? 450 : 0,
    config: {
      duration: 1
    }
  });
  const fadeItinerary = useSpring({
    height: showContentItinerary ? 600 : 160,
    config: {
      duration: 0.3
    }
  });

  return (
    <animated.div className="Itinerary__item" style={fadeItinerary}>
      <div className="Itinerary__card">
        <div className="Itinerary__profile">
          <img src={itinerary.profilePic} alt="Profile" />
          {itinerary.userName && <p>{itinerary.userName}</p>}
        </div>
        <div
          //   onClick={() => setShow(!showContentItinerary)}
          className="Itinerary__info"
        >
          <h4>{itinerary.title}</h4>
          <div className="Itineary__data">
            <p>
              {(itinerary.duration / 60).toFixed(0)}h <FaRegClock />
            </p>
            <p>
              ${itinerary.price} <FaMoneyBillAlt style={{ color: "green" }} />
            </p>

            <p>{`Likes  ${itinerary.rating}`} </p>
            {Liked ? (
              <IoIosHeart
                style={{ color: "rgb(204, 3, 3)" }}
                onClick={() => {
                  setLiked(!Liked);
                }}
              />
            ) : (
              <IoMdHeartEmpty
                onClick={() => {
                  setLiked(!Liked);
                }}
              />
            )}
          </div>
          <div className="Itinerary__hastag">
            {itinerary.hastag.map((el, index) => (
              <p key={index}>
                <span>#</span>
                {el}
              </p>
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
        {!showContentItinerary ? (
          <>
            <FaAngleUp />
            <p style={{ textAlign: "center", color: "#fff" }}>View All</p>
            <FaAngleUp />
          </>
        ) : (
          <>
            <FaAngleDown />
            <p style={{ textAlign: "center", color: "#fff" }}>Close</p>
            <FaAngleDown />
          </>
        )}
      </div>
    </animated.div>
  );
};
