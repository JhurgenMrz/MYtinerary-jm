import axios from "axios";
import { USER_ERROR } from "../types/usersTypes";

const API_URL = "http://localhost:5001";

export const signUp = user => async dispatch => {
  try {
    axios({
      url: `${API_URL}/api/users/sign-up`,
      method: "post",
      data: user
    })
      .then(data => {
        console.log(data);
        window.location.href = "/";
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: "Error Sign-Up"
    });
  }
};
