import axios from "axios";
import {
  GET_ITINERARIES,
  LOADING,
  ERROR,
  CLEAR_ITINERARIES
} from "../types/itinerariesTypes";


export const getItineraries = CityId => async dispach => {
  dispach({
    type: LOADING
  });

  axios
    .get(`/api/itineraries/${CityId}`)
    .then(data => {
      const { data: dataItineraries } = data.data;
      //Order Itineraries 
      const orderedItineraries = dataItineraries.sort((a, b)=>{
        if(a.rating > b.rating) return -1
        else if(b.rating > a.rating) return 1
        else return 0
      })
      dispach({
        type: GET_ITINERARIES,
        payload: orderedItineraries
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

