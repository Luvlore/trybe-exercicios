import { combineReducers } from "redux";
import clickReducer from "./clickReducer";
import myReducer from "./myReducer";

const rootReducer = combineReducers({
  myReducer: myReducer,
  counter: clickReducer,
});

export default rootReducer;
