import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import * as citiesActions from "../actions/citiesActions";

const Cities = props => {
  useEffect(() => {
    const { cities } = props;
    if (!cities.length) {
      props.getAllCities();
    }
  }, [props.cities]);

  return (
    <Fragment>
      <h3 style={{ marginLeft: 20 }}> CITIES </h3>
      <section className="Cities">
        {props.cities.map((el, index) => (
          <div className="City" key={index}>
            <h5> {el.country} </h5> <p> {el.city_name} </p>
          </div>
        ))}
      </section>
      <p>{props.error}</p>
    </Fragment>
  );
};

const mapStateToProps = reducers => {
  return reducers.citiesReducer;
};

export default connect(
  mapStateToProps,
  citiesActions
)(Cities);
