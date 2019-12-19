import axios from "axios";
import { returnErrors, clearErrors } from "./errorActions";

import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING
} from "../types/usersTypes";

// const apiKeyToken = process.env.API_KEY_TOKEN_PUBLIC
const apiKeyToken =
  "c580c1bdbd3694e9657173416a1169760c25978f3d599c84f15342ba5bd1ba24";
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

//Load User and Get Token
export const loadUser = () => async (dispatch, getState) => {
  //User Loading
  dispatch({
    type: USER_LOADING
  });

  try {
    const { data } = await axios.get(`/api/users/user`, tokenConfig(getState));
    dispatch({
      type: USER_LOADED,
      payload: data
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//  REGISTER USER
export const register = ({
  user_name: userName,
  password,
  email,
  first_name: firstName,
  last_name: lastName,
  country,
  profilePic: avatarPicture
}) => async dispatch => {
  //Header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const newUser = JSON.stringify({
    userName,
    password,
    email,
    firstName,
    lastName,
    country,
    avatarPicture,
    apiKeyToken
  });
  // console.log(apiKeyToken)
  try {
    const { data } = await axios.post(`/api/auth/sign-up`, newUser, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data.data
    });

    window.location.href = "/";
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL
    });
    dispatch(
      returnErrors(
        error.response.data.message,
        error.response.status,
        "REGISTER_FAIL"
      )
    );
  }
};

// LOGIN USER
export const login = ({ user_name, password }) => async dispatch => {
  axios({
    url: `/api/auth/sign-in`,
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    auth: {
      username: user_name,
      password
    },
    data: {
      apiKeyToken: apiKeyToken
    }
  })
    .then(data => {
      // console.log(data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.data
      });
      // window.location.href = '/'
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL
      });
      dispatch(
        returnErrors(
          err.response.data.message,
          err.response.status,
          "REGISTER_FAIL"
        )
      );
    });
};

// LOAD USER WITH GOOGLE
export const getUserWithGoogle = token => async dispatch => {
  try {
    const response = await axios.get(
      `http://localhost:5001/api/users/user-with-token`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`
        }
      }
    );

    const User = { user: response.data.data, token };
    dispatch({
      type: LOGIN_SUCCESS,
      payload: User
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_SUCCESS
    })
  }
};

// LOGOUT USER
export const logout = () => dispatch => {
  console.log("Me tengo que ir!!");
  dispatch({
    type: LOGOUT_SUCCESS
  });
};
