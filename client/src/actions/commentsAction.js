import {
  CLEAR_COMMENTS,
  ERROR_COMMENTS,
  CREATE_COMMENT,
  GET_ALL_COMMENTS,
  LOADING_COMMENTS,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from "../types/commentsTypes";

import axios from "axios";

export const getComments = ActivityId => async dispatch => {
  dispatch({
    type: LOADING_COMMENTS
  });

  try {
    const { data } = await axios.get(`/api/comments/${ActivityId}`);
    console.log(data);
    if (data.data.length === 0) {
      dispatch({
        type: ERROR_COMMENTS,
        payload: "No Comments 😄"
      });
    } else {
      dispatch({
        type: GET_ALL_COMMENTS,
        payload: data.data
      });
    }
  } catch (error) {
    dispatch({
      type: ERROR_COMMENTS,
      payload: "An error has occurred, try again later 😕"
    });
  }
};

export const postComment = comment => async (dispatch, getState) => {
  dispatch({
    type: LOADING_COMMENTS
  });

  try {
    const { data } = await axios({
      url: `/api/comments`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${getState().user.token}`
      },
      method: "post",
      data: comment
    });

    dispatch({
      type: CREATE_COMMENT,
      payload: data.data
    });
  } catch (error) {
    dispatch({
      type: ERROR_COMMENTS,
      payload: "An error has occurred, try again later 😕"
    });
  }
};
