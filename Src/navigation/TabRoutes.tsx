import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import colors from "../globalStyles/colors";
import { Hourly, NearBy, Weekly } from "../Screens";
import { Image, Platform } from "react-native";
import Spacing from "../globalStyles/Spacing";
import assets from "../../assets";
import HomeStack from "./HomeStack";
import SettingStack from "./SettingStack";
import navigationStrings from "../constants/navigationStrings";

const Tab = createMaterialBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      shifting={true}
      activeColor={colors.textColor}
      inactiveColor={colors.white}
      initialRouteName={navigationStrings.HOME}
      screenOptions={{ tabBarColor: colors.darkBlue }}
      barStyle={{ height: Spacing.HEIGHT_70, backgroundColor: colors.darkBlue }}
    >
      <Tab.Screen
        name={navigationStrings.HOURLY}
        component={Hourly}
        options={{
          tabBarLabel: "Hourly",
          tabBarIcon: ({ color }) => (
            <Image
              source={assets.hourly}
              style={{
                height: Spacing.HEIGHT_28,
                width: Spacing.WIDTH_28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.WEEKLY}
        component={Weekly}
        options={{
          tabBarLabel: "7 Days",
          tabBarIcon: ({ color }) => (
            <Image
              source={assets.weekly}
              style={{
                height: Spacing.HEIGHT_28,
                width: Spacing.WIDTH_28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.HOME}
        component={HomeStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image
              source={assets.homeButton}
              style={{
                height: Spacing.HEIGHT_55,
                width: Spacing.HEIGHT_55,
                borderRadius: Spacing.RADIUS_82,
                marginTop: Platform.OS == "ios" ? Spacing.MARGIN_24 : -8,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.NEARBY}
        component={NearBy}
        options={{
          tabBarLabel: "Near By",
          tabBarIcon: ({ color }) => (
            <Image
              source={assets.nearBy}
              style={{
                height: Spacing.HEIGHT_28,
                width: Spacing.WIDTH_28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.SETTINGS}
        component={SettingStack}
        options={{
          tabBarLabel: "Settings",

          tabBarIcon: ({ color }) => (
            <Image
              source={assets.settings}
              style={{
                height: Spacing.HEIGHT_28,
                width: Spacing.WIDTH_28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
