import { combineReducers } from "redux";

import switchReducer from "./switchReducer";
import alertReducer from "./alertReducer";
import WeatherDetailsReducer from "./weatherDetails";

export default combineReducers({
  switchReducer,
  alertReducer,
  WeatherDetailsReducer
});
