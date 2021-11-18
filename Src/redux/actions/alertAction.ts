import types from "../types";
import store from "../store";

const { dispatch } = store;

export function alertNotification(alert: any) {
  dispatch({
    type: types.ALERT,
    payload: alert,
  });
}
