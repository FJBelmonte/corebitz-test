import { FETCH_ALL, FETCH_ONE } from "../actions/types";

const INITIAL_STATE = { list: [], item: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ONE: {
      return { ...state, item: action.payload };
    }
    case FETCH_ALL:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
