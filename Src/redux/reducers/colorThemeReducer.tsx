import types from "../types";

const initialState = {
  firstColor: "",
  secondColor: "",
};
const colorThemeReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.FIRSTCOLOR: {
      const data = action.payload;
      return {
        ...state,
        firstColor: data,
      };
    }

    case types.SECONDCOLOR: {
      return {
        ...state,
        secondColor: action.payload,
      };
    }

    default:
      return state;
  }
};
export default colorThemeReducer;
