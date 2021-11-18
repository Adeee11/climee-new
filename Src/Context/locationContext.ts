import CreateDataContext from "./createDataContext";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const locationReducer = (state: any, action: any) => {
  switch (action.type) {
    case "get_location":
      return action.payload;
    case "location_error":
      return action.payload;
    default:
      return state;
  }
};


const getLocation = (dispatch: any) => {
  return async () => {
    try {
      // const { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== "granted") {
      //   Alert.alert("Please grant location permission.");
      //   await Location.requestForegroundPermissionsAsync();
      // }
      const location = await Location.getCurrentPositionAsync({});
      const place = await Location.reverseGeocodeAsync({
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
      });
      
      const locationObj = {
        longitude: location?.coords?.longitude,
        latitude: location?.coords?.latitude,
        city: place[0]?.city,
        country: place[0]?.country,
        street: place[0]?.street,
      };
      if(locationObj !== null) {
        await AsyncStorage.setItem(
          "ClimeeCurrentLocation",
          JSON.stringify(locationObj)
        );
      }
      const loc = {
        longitude: locationObj?.longitude,
        latitude: locationObj?.latitude,
        city: locationObj?.city,
        country: locationObj?.country,
      };
      const details = [
        {
          coordinates: {
            latitude: locationObj?.latitude,
            longitude: locationObj?.longitude,
          },
          city: locationObj?.city,
          street: locationObj?.street,
          country: locationObj?.country,
        },
      ];
      
      const data: any = await AsyncStorage.getItem("ClimeeCities");
      if (data?.length === 0 || data === null || data === undefined || locationObj !== null) {
        await AsyncStorage.setItem("ClimeeCities", JSON.stringify(details));
      }
      dispatch({ type: "get_location", payload: loc });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const { Context, Provider } = CreateDataContext(
  locationReducer,
  { getLocation },
  []
);
