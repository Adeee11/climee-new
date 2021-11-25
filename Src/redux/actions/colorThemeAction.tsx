import store from "../store";
import types from "../types";

const { dispatch } = store;
export function themeColor(data: any) {
  dispatch({
    type: types.COLORTHEME,
    payload: data,
  });
}
