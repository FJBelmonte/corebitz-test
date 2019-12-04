import { ADD_ITEM, REMOVE_ITEM } from "../actions/types";

const INITIAL_STATE = {
  cart: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let newArray = state.cart;
      newArray.push({ item: action.payload });
      return { ...state, cart: newArray };
    default:
      return state;
  }
};
