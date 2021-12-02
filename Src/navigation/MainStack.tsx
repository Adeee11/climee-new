import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";
import { AboutApp, News, TodaysDetails } from "../Screens";

const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={navigationStrings.HOME}
        component={TabRoutes}
      />
     */}
     <TabRoutes/>
    </Stack.Navigator>
  );
}

export default MainStack;
