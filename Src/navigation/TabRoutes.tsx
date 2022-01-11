import React from "react";
import { Image, Platform, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TransitionPresets } from "@react-navigation/stack";
import colors from "../globalStyles/colors";
import { Hourly, Weekly } from "../Screens";
import Spacing from "../globalStyles/Spacing";
import assets from "../../assets";
import HomeStack from "./HomeStack";
import SettingStack from "./SettingStack";
import fontFamily from "../globalStyles/fontFamily";
import typography from "../globalStyles/typography";
import NearByStack from "./NearByStack";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator initialRouteName={"Home"}>
      <Tab.Screen
        name={"Hourly"}
        component={Hourly}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
          tabBarIcon: ({ color }) => (
            <Image
              source={assets.hourly}
              style={{
                tintColor: color,
                ...styles.tabBottom,
              }}
              resizeMode="contain"
            />
          ),

          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: colors.textColor,
          tabBarInactiveTintColor: colors.white,
        }}
      />

      <Tab.Screen
        name={"7 days"}
        component={Weekly}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
          tabBarIcon: ({ color }) => (
            <Image
              source={assets.weekly}
              style={{
                tintColor: color,
                ...styles.tabBottom,
              }}
              resizeMode="contain"
            />
          ),

          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: colors.textColor,
          tabBarInactiveTintColor: colors.white,
        }}
      />
      <Tab.Screen
        name={"Home"}
        component={HomeStack}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
          tabBarIcon: () => (
            <Image
              source={assets.homeButton}
              style={styles.homeTabImage}
              resizeMode="cover"
            />
          ),
          tabBarLabel: "",
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: colors.blueTheme,
          tabBarInactiveTintColor: colors.white,
        }}
      />
      <Tab.Screen
        name={"Near By"}
        component={NearByStack}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
          tabBarIcon: ({ color }) => (
            <Image
              source={assets.nearBy}
              style={{
                tintColor: color,
                ...styles.tabBottom,
              }}
              resizeMode="contain"
            />
          ),

          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: colors.textColor,
          tabBarInactiveTintColor: colors.white,
        }}
      />
      <Tab.Screen
        name={"Settings"}
        component={SettingStack}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
          tabBarIcon: ({ color }) => (
            <Image
              source={assets.settings}
              style={{
                tintColor: color,
                ...styles.tabBottom,
              }}
              resizeMode="contain"
            />
          ),

          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: colors.textColor,
          tabBarInactiveTintColor: colors.white,
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBottom: {
    height: Spacing.HEIGHT_28,
    width: Spacing.WIDTH_28,
    marginTop: Platform.OS == "ios" ? Spacing.MARGIN_5 : Spacing.MARGIN_8,
  },
  tabBarStyle: {
    backgroundColor: colors.darkBlue,
    height: Spacing.HEIGHT_80,
  },
  tabBarLabelStyle: {
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_10,
    marginTop: Platform.OS == "ios" ? 0 : Spacing.MARGIN_5,
    marginBottom: Platform.OS == "android" ? Spacing.MARGIN_10 : Spacing.MARGIN_10,
  },
  homeTabImage: {
    height: Spacing.HEIGHT_55,
    width: Spacing.HEIGHT_55,
    borderRadius: Spacing.RADIUS_82,
    marginTop: Platform.OS == "ios" ? Spacing.MARGIN_15 : Spacing.MARGIN_10,
  },
});
export default TabRoutes;
