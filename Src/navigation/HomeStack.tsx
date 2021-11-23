import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import { Home } from "../Screens";
import TodayDetails from "../Screens/TodayDetails/TodayDetails";
import Search from "../Screens/Search/Search";

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
        name={navigationStrings.TODAYDETAILS}
        component={TodayDetails}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.SEARCH}
        component={Search}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
