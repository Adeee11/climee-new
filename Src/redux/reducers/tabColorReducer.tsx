import types from "../types";

const initialState = {
  hourlyTab: false,
  weeklyTab: false,
};
const tabColorReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.HOURLYTAB: {
      const data = action.payload;
      return {
        ...state,
        hourlyTab: data,
      };
    }
    case types.WEEKLYTAB: {
      return {
        ...state,
        weeklyTab: action.payload,
      };
    }

    default:
      return state;
  }
};
export default tabColorReducer;
