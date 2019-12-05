import axios from "axios";
import { USER_ITINERARY_FAV } from '../types/usersTypes';

export const tokenConfig = getState => {
  //Get token form localstorage
  const token = getState().user.token;
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `bearer ${token}`;
  }
  return config;
};

export const Fav = idItinerary => async (dispatch, getState) => {

  try {
    const {data, status} = await axios({
      url: `/api/userItineraries/${idItinerary}`,
      method: "post",
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `bearer ${getState().user.token}`
      }
    });
    console.log(data)
    // USER ITINERARIES FAV UPDATED
    dispatch({
      type: USER_ITINERARY_FAV,
      payload: data.data.UserItinearies
    })
  } catch (error) {
    console.log(error)
  }
};
export const NoFav = idItinerary => async (dispatch, getState) => {

  try {
    const {data, status} = await axios({
      url: `/api/userItineraries/${idItinerary}`,
      method: "delete",
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `bearer ${getState().user.token}`
      }
    });
    console.log(data)
    //USER ITINERARIES FAV UPDATED
    dispatch({
      type: USER_ITINERARY_FAV,
      payload: data.data.UserItinearies
    })
  } catch (error) {
    console.log(error)
  }
};
