import types from "../types";
import store from "../store";

const { dispatch } = store;

export function hourlyTab(data: any) {
  dispatch({
    type: types.HOURLYTAB,
    payload: data,
  });
}

export function weeklyTab(data: any) {
    dispatch({
      type: types.WEEKLYTAB,
      payload: data,
    });
  }

  