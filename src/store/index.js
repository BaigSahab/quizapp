import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export default createStore(combineReducers({ state: reducer }), {}, applyMiddleware(thunk))