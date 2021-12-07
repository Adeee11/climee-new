import React from "react";
import colors from "../globalStyles/colors";
import { Hourly, NearBy, Weekly } from "../Screens";
import { Image, Platform } from "react-native";
import Spacing from "../globalStyles/Spacing";
import assets from "../../assets";
import HomeStack from "./HomeStack";
import SettingStack from "./SettingStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import fontFamily from "../globalStyles/fontFamily";
import typography from "../globalStyles/typography";
import { TransitionPresets } from "@react-navigation/stack";
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
                height: Spacing.HEIGHT_28,
                width: Spacing.WIDTH_28,
                tintColor: color,
                marginTop:
                  Platform.OS == "ios" ? Spacing.MARGIN_10 : Spacing.MARGIN_8,
              }}
              resizeMode="contain"
            />
          ),

          tabBarStyle: {
            backgroundColor: colors.darkBlue,
            height: Spacing.HEIGHT_80,
          },
          tabBarLabelStyle: {
            fontFamily: fontFamily.regular,
            fontSize: typography.FONT_SIZE_10,
            marginTop:
              Platform.OS == "ios" ? Spacing.MARGIN_5 : Spacing.MARGIN_5,
            marginBottom: Platform.OS == "android" ? Spacing.MARGIN_10 : 0,
          },
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
                height: Spacing.HEIGHT_28,
                width: Spacing.WIDTH_28,
                tintColor: color,
                marginTop:
                  Platform.OS == "ios" ? Spacing.MARGIN_10 : Spacing.MARGIN_8,
              }}
              resizeMode="contain"
            />
          ),

          tabBarStyle: {
            backgroundColor: colors.darkBlue,
            height: Spacing.HEIGHT_80,
          },
          tabBarLabelStyle: {
            fontFamily: fontFamily.regular,
            fontSize: typography.FONT_SIZE_10,
            marginTop:
              Platform.OS == "ios" ? Spacing.MARGIN_5 : Spacing.MARGIN_5,
            marginBottom: Platform.OS == "android" ? Spacing.MARGIN_10 : 0,
          },
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
              style={{
                height: Spacing.HEIGHT_55,
                width: Spacing.HEIGHT_55,
                borderRadius: Spacing.RADIUS_82,
                marginTop:
                  Platform.OS == "ios" ? Spacing.MARGIN_24 : Spacing.MARGIN_10,
              }}
              resizeMode="contain"
            />
          ),
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: colors.darkBlue,
            height: Spacing.HEIGHT_80,
          },
          tabBarActiveTintColor: colors.blueTheme,
          tabBarInactiveTintColor: colors.white,
          //   tabBarShowLabel: false,
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
                height: Spacing.HEIGHT_28,
                width: Spacing.WIDTH_28,
                tintColor: color,
                marginTop:
                  Platform.OS == "ios" ? Spacing.MARGIN_10 : Spacing.MARGIN_8,
              }}
              resizeMode="contain"
            />
          ),

          tabBarStyle: {
            backgroundColor: colors.darkBlue,
            height: Spacing.HEIGHT_80,
          },
          tabBarLabelStyle: {
            fontFamily: fontFamily.regular,
            fontSize: typography.FONT_SIZE_10,
            marginTop:
              Platform.OS == "ios" ? Spacing.MARGIN_5 : Spacing.MARGIN_5,
            marginBottom: Platform.OS == "android" ? Spacing.MARGIN_10 : 0,
          },
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
                height: Spacing.HEIGHT_28,
                width: Spacing.WIDTH_28,
                tintColor: color,
                marginTop:
                  Platform.OS == "ios" ? Spacing.MARGIN_10 : Spacing.MARGIN_8,
              }}
              resizeMode="contain"
            />
          ),

          tabBarStyle: {
            backgroundColor: colors.darkBlue,
            height: Spacing.HEIGHT_80,
          },
          tabBarLabelStyle: {
            fontFamily: fontFamily.regular,
            fontSize: typography.FONT_SIZE_10,
            marginTop:
              Platform.OS == "ios" ? Spacing.MARGIN_5 : Spacing.MARGIN_5,
            marginBottom: Platform.OS == "android" ? Spacing.MARGIN_10 : 0,
          },
          tabBarActiveTintColor: colors.textColor,
          tabBarInactiveTintColor: colors.white,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
