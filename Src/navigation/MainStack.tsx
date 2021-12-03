import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "./TabRoutes";

const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator>
      <TabRoutes />
    </Stack.Navigator>
  );
}

export default MainStack;
