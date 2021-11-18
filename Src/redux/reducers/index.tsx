import { combineReducers } from "redux";

import switchReducer from "./switchReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  switchReducer,
  alertReducer
});
