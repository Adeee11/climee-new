import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
} from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import {
  AirPollution,
  Home,
  Hourly,
  News,
  TodaysDetails,
  Weekly,
} from "../Screens";

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
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
        name={navigationStrings.AIRPOLLUTION}
        component={AirPollution}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
        name={navigationStrings.TODAYSDETAILS}
        component={TodaysDetails}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
        name={navigationStrings.NEWS}
        component={News}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
        name={navigationStrings.HOURLY}
        component={Hourly}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
        name={navigationStrings.WEEKLY}
        component={Weekly}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
