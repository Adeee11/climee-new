import types from "../types";

const initialState = {
  weatherDetails: [],
  loading: false,
};

const WeatherDetailsReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.WEATHER_DETAILS: {
      const data = action.payload;
      return {
        ...state,
        weatherDetails: data,
      };
    }
    case types.LOADING: {
      return {
        ...state,
        laoding: action.payload,
      };
    }
    default:
      return state;
  }
};
export default WeatherDetailsReducer;
