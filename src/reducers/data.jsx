import {
  GET_PAGE_DATA_START,
  GET_PAGE_DATA_SUCCESS,
  GET_PAGE_DATA_FAIL
} from "../constants/ActionTypes";

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PAGE_DATA_START: {
      return {
        ...state
      };
    }

    case GET_PAGE_DATA_SUCCESS: {
      return {
        ...state,
        pageData: action.payload
      };
    }

    case GET_PAGE_DATA_FAIL: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
