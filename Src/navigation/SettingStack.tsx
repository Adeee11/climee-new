import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import { AboutApp, Settings } from "../Screens";

const Stack = createStackNavigator();
function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,

          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}
        name={navigationStrings.SETTINGS}
        component={Settings}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        name={navigationStrings.ABOUT}
        component={AboutApp}
      />
    </Stack.Navigator>
  );
}
export default SettingStack;
