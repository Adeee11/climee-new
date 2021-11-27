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
      console.log(data, "FirstColor");

      return {
        ...state,
        firstColor: data,
      };
    }
    case types.SECONDCOLOR: {
      console.log(action.payload, "SecondColor");
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
