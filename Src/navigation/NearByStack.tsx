import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import { AirPollution, NearBy } from "../Screens";

const Stack = createStackNavigator();
function NearByStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}
        name={navigationStrings.NEARBY}
        component={NearBy}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
        name={navigationStrings.AIRPOLLUTION}
        component={AirPollution}
      />
    </Stack.Navigator>
  );
}
export default NearByStack;
