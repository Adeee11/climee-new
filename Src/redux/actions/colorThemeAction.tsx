import store from "../store";
import types from "../types";

const { dispatch } = store;
export function themeColorOne(data: any) {
  dispatch({
    type: types.FIRSTCOLOR,
    payload: data,
  });
}

export function themeColorTwo(data: any) {
  dispatch({
    type: types.SECONDCOLOR,
    payload: data,
  });
}
