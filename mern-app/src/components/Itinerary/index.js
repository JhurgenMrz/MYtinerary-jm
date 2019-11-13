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

  useEffect(async () => {
    await fetchActivities();
    console.log("Activities", activities);
  }, []);

  const Activities = [
    {
      title: "Desayunar",
      src:
        "https://images.unsplash.com/photo-1535567465397-7523840f2ae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80"
    },
    {
      title: "Correr",
      src:
        "https://images.unsplash.com/photo-1427384906349-30452365b5e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
    },
    {
      title: "Almorzar",
      src:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
      title: "Remo",
      src:
        "https://images.unsplash.com/photo-1563215756-bf90fae48cee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
      title: "Paseo en Bicicleta",
      src:
        "https://images.unsplash.com/photo-1488401318902-f7feae66db20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=779&q=80"
    },
    {
      title: "Acampar",
      src:
        "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
    },
    {
      title: "Tiro con Arco",
      src:
        "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
    },
    {
      title: "Tennis",
      src:
        "https://images.unsplash.com/photo-1485908953667-cf6d88997642?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
    },
    {
      title: "Natación",
      src:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
      title: "Caminata",
      src:
        "https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    }
  ];

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
        <p>Activities</p>
        <div className="Itinerary__activities__slider">
          {activities.map((el, index) => {
            console.log(el);
            return <ActivityByIitinerary key={el._id} activity={el} />;
          })}
        </div>

        <p>Comments</p>
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
