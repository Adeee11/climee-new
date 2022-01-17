import { combineReducers } from "redux";

import switchReducer from "./switchReducer";
import alertReducer from "./alertReducer";
import WeatherDetailsReducer from "./weatherDetails";
import colorThemeReducer from "./colorThemeReducer";
import tabColorReducer from "./tabColorReducer";
export default combineReducers({
  switchReducer,
  alertReducer,
  WeatherDetailsReducer,
  colorThemeReducer,
  tabColorReducer,
});
