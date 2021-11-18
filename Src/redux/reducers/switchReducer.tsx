import types from "../types";

const initialState = {
  weatherDegree: "null",
  windDegree: "null",
  toggleNotifications: "ON"
};

const themeReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.SWITCH_TEMP: {
      const degree = action.payload;
      //    console.log(degree,"reducer")
      return {
        ...state,
        weatherDegree: degree,
      };
    }
    case types.SWITCH_WIND: {
      const wind = action.payload;
      // console.log(wind,"wiindreducer")
      return {
        ...state,
        windDegree: wind,
      };
    }
    case types.TOGGLE_NOTIFICATION: {
      const notifiy = action.payload;
      return {
        ...state,
        toggleNotifications: notifiy,
      }
    }
    default:
      return state;
  }
};
export default themeReducer;
