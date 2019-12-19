import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
import axios from "axios";
import { Fav, NoFav } from "../../actions/favsActions";
import { getAllActivities } from "../../actions/activitiesAction";
import Activities from "../Activities";

const Itinerary = props => {
  // console.log(props);
  const { itinerary, isLiked, isLogged } = props;

  const [ShowAuth, setShowAuth] = useState(false);
  const [showContentItinerary, setShow] = useState(false);
  const [activities, setActivities] = useState([]);
  const [Liked, setLiked] = useState(isLiked);
  const [Rating, setRating] = useState(itinerary.rating);

  useEffect(() => {
    // props.getAllActivities(itinerary._id)
    // console.log("props", props);
  }, []);

  // const fadeContent = useSpring({
  //   display: showContentItinerary ? "flex" : "none",
  //   height: showContentItinerary ? 500 : 0,
  //   config: {
  //     duration: 1
  //   }
  // });
  const fadeItinerary = useSpring({
    height: showContentItinerary ? 550 : 160,
    config: {
      duration: 0.3
    }
  });

  return (
    <>
      <animated.div className="Itinerary__item" style={fadeItinerary}>
        {ShowAuth && (
          <section className="AlertAuth">
            <Link to="/login" className="AlertAuth__btn">
              Login
            </Link>
            <Link to="/register" className="AlertAuth__btn">
              Create Account
            </Link>
            <button
              className="AlertAuth__btn"
              onClick={() => setShowAuth(false)}
            >
              {" "}
              Close{" "}
            </button>
          </section>
        )}
        <div className="Itinerary__card">
          <div className="Itinerary__profile">
            <img src={itinerary.profilePic} alt="Profile" />
            {itinerary.userName && <p>{itinerary.userName}</p>}
          </div>
          <div
            onClick={() => {
              // props.getAllActivities(itinerary._id)
              setShow(!showContentItinerary)
            }}
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

              <p>{`Likes  ${Rating}`} </p>
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
          <>
            {Liked ? (
              <IoIosHeart
                style={{ color: "rgb(204, 3, 3)" }}
                onClick={() => {
                  setLiked(!Liked);
                  setRating(Rating - 1);
                  props.NoFav(itinerary._id);
                }}
              />
            ) : (
              <IoMdHeartEmpty
                onClick={() => {
                  if (isLogged) {
                    setLiked(!Liked);
                    setRating(Rating + 1);
                    props.Fav(itinerary._id);
                  } else {
                    setShowAuth(!ShowAuth);
                  }
                }}
              />
            )}
          </>
        </div>
        {showContentItinerary && <Activities ItineraryId={itinerary._id} />}
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
    </>
  );
};

const mapStateToProps = reducer => {
  // console.log(reducer)
  return reducer.itineraries;
};

export default connect(mapStateToProps, { Fav, NoFav, getAllActivities })(
  Itinerary
);
