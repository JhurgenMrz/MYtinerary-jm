import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {Loader} from '../components/Loader'
import * as citiesActions from "../actions/citiesActions";

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
        }, 2000);
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
    <div style={{ margin: 20 }}>
      <h3> CITIES </h3>
      <section className="search">
        <label>Search:</label>
        <input
          onChangeDe
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="City..."
          value={props.word.toUpperCase()}
        ></input>
      </section>
      {loader && <Loader/>}
      {props.loading ? (
          <Loader/>
        ) : props.error ?
          <h3>{props.error}</h3> : ''
        }
      <section className="Cities">
        
        { showShearch === true ? (
          props.filterCities.length === 0 ? (
            <h3>No results were found</h3>
          ) : (
            props.filterCities.map((el, index) => (
              <div className="City" key={index}>
                <h5> {el.country} </h5> <p> {el.city_name} </p>
              </div>
            ))
          )
        ) : (
          showShearch === false &&
          props.cities.map((el, index) => (
            <div className="City" key={index}>
              <h5> {el.country} </h5> <p> {el.city_name} </p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

const mapStateToProps = reducers => {
  return reducers.citiesReducer;
};

export default connect(
  mapStateToProps,
  citiesActions
)(Cities);
