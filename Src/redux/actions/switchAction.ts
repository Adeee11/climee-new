import types from "../types";
import store from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { dispatch } = store;

export function switchTempDegree(changedDegree: string) {
  // console.log(changedDegree, "changedDegree");
  dispatch({
    type: types.SWITCH_TEMP,
    payload: changedDegree,
  });
}

export function switchWind(changedWind: string) {
  // console.log(changedWind, "changedWind");
  dispatch({
    type: types.SWITCH_WIND,
    payload: changedWind,
  });
}

export function toggleNotification(changedValue: string) {
  AsyncStorage.setItem("ClimeeNotifications", changedValue);
  dispatch({ type: types.TOGGLE_NOTIFICATION, payload: changedValue });
}
