import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
        }}
        name={navigationStrings.HOME}
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.AIRPOLLUTION}
        component={AirPollution}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.TODAYSDETAILS}
        component={TodaysDetails}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.NEWS}
        component={News}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.ABOUT}
        component={AboutApp}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.HOURLY}
        component={Hourly}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.WEEKLY}
        component={Weekly}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
