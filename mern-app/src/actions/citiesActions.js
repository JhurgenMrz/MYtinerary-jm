import axios from "axios";
import { GET_ALL, LOADING, ERROR } from "../types/citiesTypes";

export const getAllCities = () => dispach => {
  dispach({
    type: LOADING
  });

  axios
    .get("http://localhost:5001/api/cities/all")
    .then(data => {
      dispach({
        type: GET_ALL,
        payload: data.data
      });
    })
    .catch(err => {
      console.log("Error:", err);
      dispach({
        type: ERROR,
        payload: "Cities information not available"
      });
    });
};
