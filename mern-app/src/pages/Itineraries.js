import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Itineraries.css";
import * as citiesActions from "../actions/citiesActions";
import * as itinerariesActions from "../actions/itinerariesActions";
import { City } from "../components/City";
import { Itinerary } from "../components/Itinerary";
const { getAllCities } = citiesActions;

const { getItineraries } = itinerariesActions;

const Itineraries = props => {
  console.log(props);
  const [citySelected, setCity] = useState([]);
  const cityId = props.match.params._id;

  async function GetData() {
    if (props.citiesReducer.cities.length === 0) {
      await props.getAllCities();
    }
    await props.getItineraries(cityId);
  }

  useEffect(() => {
    GetData();
    if (props.citiesReducer.cities.length) {
      setCity(
        props.citiesReducer.cities.filter(city => {
          if (city._id === cityId) {
            return city;
          }
        })
      );
      console.log(citySelected);
    }
  }, []);

  return (
    <div className="Itineraries">
      {citySelected.length === 0 ? "" : <City city={citySelected[0]} />}
      <section className="Itineraries__nav">
        <Link to="/cities">
          <button>⬅</button>
        </Link>
        <h3>Available MYtineraries</h3>
      </section>
      <div className="Itineraries__container">
        {props.itinerariesReducer.itineraries.map((el, index) => (
          <Itinerary key={index} itinerary={el} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ itinerariesReducer, citiesReducer }) => {
  return { itinerariesReducer, citiesReducer };
};

const mapDispatchToProps = {
  getAllCities,
  getItineraries
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
