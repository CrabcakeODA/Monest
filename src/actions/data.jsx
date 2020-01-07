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
      .get(
        //RestApi
        ""
      )
      .then(({ data }) => {
        if (data !== null) {
          dispatch({ type: GET_PAGE_DATA_SUCCESS, payload: data.data });
        } else {
          console.log("Loading data ...")
        }
      })
      .catch(function(data) {
        dispatch({ type: GET_PAGE_DATA_FAIL, payload: data.message });
      });
  };
};
