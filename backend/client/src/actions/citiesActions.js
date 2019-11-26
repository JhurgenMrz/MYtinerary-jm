import axios from "axios";
import {
  GET_ALL,
  LOADING,
  ERROR,
  SEARCH_CITIES,
  CHANGE_INPUT
} from "../types/citiesTypes";

export const getAllCities = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  axios
    .get("http://localhost:5001/api/cities")
    .then(data => {
      const { data: dataCities } = data.data;
      dispatch({
        type: GET_ALL,
        payload: dataCities
      });
    })
    .catch(err => {
      console.log("Error:", err);
      dispatch({
        type: ERROR,
        payload: "Cities information not available"
      });
    });
};

export const searchCities = word => async dispach => {
  dispach({
    type: LOADING
  });

  try {
    dispach({
      type: SEARCH_CITIES,
      payload: word
    });
  } catch (err) {
    dispach({
      type: ERROR,
      payload: "Erro, try later"
    });
  }
};

export const changeInput = word => async dispach => {
  dispach({
    type: CHANGE_INPUT,
    payload: word
  });
};
