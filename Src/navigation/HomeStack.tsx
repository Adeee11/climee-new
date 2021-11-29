import React from "react";
import { CardStyleInterpolators, createStackNavigator, TransitionPresets, TransitionSpecs } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import {
  AboutApp,
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

          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromCenter,
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
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        name={navigationStrings.ABOUT}
        component={AboutApp}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name={navigationStrings.HOURLY}
        component={Hourly}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name={navigationStrings.WEEKLY}
        component={Weekly}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
