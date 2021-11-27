import { combineReducers } from "redux";

import switchReducer from "./switchReducer";
import alertReducer from "./alertReducer";
import WeatherDetailsReducer from "./weatherDetails";
import colorThemeReducer from "./colorThemeReducer";

export default combineReducers({
  switchReducer,
  alertReducer,
  WeatherDetailsReducer,
  colorThemeReducer,
});
