import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Loader } from "../components/Loader";
import * as citiesActions from "../actions/citiesActions";
import { City } from "../components/City";
import Nav from "../components/Nav";
import { NavBtn } from "../components/NavBtn";

import "../styles/Cities.css";

const Cities = props => {
  const [showShearch, setShowSearch] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleEnter = e => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        setShowSearch(false);
      } else {
        // console.log(props);
        let wordSearched = e.target.value.toLowerCase();
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
          props.searchCities(wordSearched);
          setShowSearch(true);
        }, 600);
      }
    }
  };

  const handleChange = e => {
    props.changeInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (!props.cities.length) {
      props.getAllCities();
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="Cities__page">
        <h3> CITIES </h3>
        <section className="search">
          <label>Filter our current cities</label>
          <input
            onChange={handleChange}
            onKeyDown={handleEnter}
            placeholder="City..."
            value={props.word.toUpperCase()}
          ></input>
        </section>
        {loader && <Loader />}
        {props.loading ? <Loader /> : props.error ? <h3>{props.error}</h3> : ""}
        <section className="Cities">
          {showShearch === true ? (
            props.filterCities.length === 0 ? (
              <h3>No results were found</h3>
            ) : (
              props.filterCities.map(el => (
                <Link
                  className="a__city"
                  to={`/cities/${el.city_name}/${el._id}`}
                  key={el._id}
                >
                  <City city={el} />
                </Link>
              ))
            )
          ) : (
            showShearch === false &&
            props.cities.map(el => (
              <Link
                className="a__city"
                to={`/cities/${el.city_name}/${el._id}`}
                key={el._id}
              >
                <City city={el} />
              </Link>
            ))
          )}
        </section>
      </div>
      <NavBtn isCities />
    </>
  );
};

const mapStateToProps = reducers => {
  return reducers.cities;
};

export default connect(mapStateToProps, citiesActions)(Cities);
