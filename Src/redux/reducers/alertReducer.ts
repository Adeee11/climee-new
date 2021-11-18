import types from "../types";

const initialState = {
  alertNotification: [],
};

const AlertReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.ALERT: {
      const alert = action.payload;
      return {
        ...state,
        alertNotification: alert,
      };
    }
    default:
      return state;
  }
};

export default AlertReducer;
