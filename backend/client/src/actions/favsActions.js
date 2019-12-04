import axios from "axios";

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
    config.headers["Authentication"] = `bearer ${token}`;
  }
  return config;
};

export const Fav = idItinerary => async dispatch => {
  axios({
    url: `http://localhost:5001/api/userItineraries/${idItinerary}`,
    method: "post"
  });
};
