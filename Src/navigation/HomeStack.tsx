import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import { AirPollution, Home, News, TodaysDetails } from "../Screens";

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
    </Stack.Navigator>
  );
}
export default HomeStack;