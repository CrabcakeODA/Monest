import {
  GET_PAGE_DATA_START,
  GET_PAGE_DATA_SUCCESS,
  GET_PAGE_DATA_FAIL
} from "../constants/ActionTypes";
import axios from "axios";

export const getPageData = () => {
  return dispatch => {
    dispatch({ type: GET_PAGE_DATA_START });
    axios
      .post(
        "http://159.89.121.159:3001/somo/contentByApp?page=0&size=100&appName=uma"
      )
      .then(({ data }) => {
        console.log(data);
        if (data.result) {
          dispatch({ type: GET_PAGE_DATA_SUCCESS, payload: data.user });
        } else {
          dispatch({ type: GET_PAGE_DATA_FAIL, payload: data.error });
        }
      })
      .catch(function(error) {
        dispatch({ type: GET_PAGE_DATA_FAIL, payload: error.message });
      });
  };
};
