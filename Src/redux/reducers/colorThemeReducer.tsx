import types from "../types";

const initialState = {
  themeColor: "",
};
const colorThemeReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.COLORTHEME: {
      const data = action.payload;
      return {
        ...state,
        themeColor: data,
      };
    }

    default:
      return state;
  }
};
export default colorThemeReducer;
