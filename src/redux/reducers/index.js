import { combineReducers } from "redux";
import { productsReducer } from "./productReducers";

const reducers = combineReducers({
    allProducts: productsReducer,
});

export default reducers;