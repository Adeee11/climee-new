import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
} from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import { AirPollution, Home, News, TodaysDetails } from "../Screens";

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,

          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}
        name={navigationStrings.HOME}
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        name={navigationStrings.AIRPOLLUTION}
        component={AirPollution}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        name={navigationStrings.TODAYSDETAILS}
        component={TodaysDetails}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        name={navigationStrings.NEWS}
        component={News}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
