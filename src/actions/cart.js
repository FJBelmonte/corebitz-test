import { ADD_ITEM, REMOVE_ITEM } from "./types";

export const addItemCart = (item, quantity) => async dispatch => {
  dispatch({ type: ADD_ITEM, payload: { ...item, quantity } });
};
