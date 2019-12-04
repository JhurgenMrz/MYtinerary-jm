import axios from "axios";
import {
  GET_ITINERARIES,
  LOADING,
  ERROR,
  SEARCH_ITINERARIES,
  CHANGE_INPUT
} from "../types/itinerariesTypes";

export const getItineraries = CityId => async dispach => {
  dispach({
    type: LOADING
  });

  axios
    .get(`http://localhost:5001/api/itineraries/${CityId}`)
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

// export const searchCities = word => async dispach => {
//   dispach({
//     type: LOADING
//   });

//   try {
//     dispach({
//       type: SEARCH_CITIES,
//       payload: word
//     });
//   } catch (err) {
//     dispach({
//       type: ERROR,
//       payload: "Erro, try later"
//     });
//   }
// };

// export const changeInput = word => async dispach => {
//   dispach({
//     type: CHANGE_INPUT,
//     payload: word
//   });
// };
