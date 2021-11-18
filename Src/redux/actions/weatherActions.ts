import types from "../types";
import store from "../store";

const { dispatch } = store;

export function weatherDetails(data: any) {
  dispatch({
    type: types.WEATHER_DETAILS,
    payload: data,
  });
}

export function weatherDetailsLoading(data: any) {
    dispatch({
      type: types.LOADING,
      payload: data,
    });
  }
