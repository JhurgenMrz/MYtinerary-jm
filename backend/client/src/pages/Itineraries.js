import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../styles/Itineraries.css";
import Nav from "../components/Nav";
import * as citiesActions from "../actions/citiesActions";
import * as itinerariesActions from "../actions/itinerariesActions";
import { City } from "../components/City";
import { NavBtn } from "../components/NavBtn";
import { Itinerary } from "../components/Itinerary";
import { ELOOP } from "constants";
const { getAllCities } = citiesActions;

const { getItineraries } = itinerariesActions;

const Itineraries = props => {
  console.log(props);
  const [citySelected, setCity] = useState([]);
  const cityId = props.match.params._id;

  async function GetData() {
    if (props.cities.cities.length === 0) {
      await props.getAllCities();
    }
    await props.getItineraries(cityId);
  }

  useEffect(() => {
    GetData();
    if (props.cities.cities.length) {
      setCity(
        props.cities.cities.filter(city => {
          if (city._id === cityId) {
            return city;
          }
        })
      );
      console.log(citySelected);
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="Itineraries">
        {citySelected.length === 0 ? "" : <City city={citySelected[0]} />}
        <section className="Itineraries__nav">
          <h3>Available MYtineraries</h3>
        </section>
        <div className="Itineraries__container">
          {props.itineraries.itineraries.map(el => {
            let Liked = false;
            if (!props.user._id) {
              Liked = false;
            } else {
              let favs = props.user.favoriteItineraries.filter(favIti => {
                if (favIti === el._id) return true;
              });
              console.log("favs", favs);
              if (Object.keys(favs).length !== 0) {
                Liked = true;
              } else {
                Liked = false;
              }
            }
            return <Itinerary key={el._id} itinerary={el} isLiked={Liked} />;
          })}
        </div>
      </div>
      <NavBtn isItineraries />
    </>
  );
};

const mapStateToProps = ({ itineraries, cities, user }) => {
  return { itineraries, cities, user: user.user };
};

const mapDispatchToProps = {
  getAllCities,
  getItineraries
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
