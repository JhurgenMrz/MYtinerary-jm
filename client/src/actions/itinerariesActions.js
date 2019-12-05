import axios from "axios";
import {
  GET_ITINERARIES,
  LOADING,
  ERROR,
  CLEAR_ITINERARIES
} from "../types/itinerariesTypes";

const API_URL = 'https://mytinerary-jm.herokuapp.com'


export const getItineraries = CityId => async dispach => {
  dispach({
    type: LOADING
  });

  axios
    .get(`${API_URL}/api/itineraries/${CityId}`)
    .then(data => {
      const { data: dataItineraries } = data.data;
      dispach({
        type: GET_ITINERARIES,
        payload: dataItineraries
      });
    })
    .catch(err => {
      console.log("Error:", err);
      dispach({
        type: ERROR,
        payload: "Itineraries information not available"
      });
    });
};

export const clearItineraries = () => async dispatch => {
  dispatch({
    type: CLEAR_ITINERARIES,
  })
}

