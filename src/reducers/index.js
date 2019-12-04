import cart from "./cart";
import { combineReducers } from "redux";
import products from "./products";

export default combineReducers({ cart, products });
