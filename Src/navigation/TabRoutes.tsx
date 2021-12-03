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
      // shifting={true}
      activeColor={colors.textColor}
      inactiveColor={colors.white}
      initialRouteName={navigationStrings.HOME}
      screenOptions={{ tabBarColor: colors.darkBlue }}
      // // barStyle={{ marginBottom: Spacing.PADDING_10,backgroundColor:colors.darkBlue }}
      // barStyle={{
      //   borderTopLeftRadius: 25,
      //   borderTopRightRadius: 25,
      //   position: "absolute",
      //   bottom: 0,
      //   backgroundColor: colors.darkBlue,
      // }}
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
                height: Spacing.HEIGHT_24,
                width: Spacing.WIDTH_28,
                tintColor: color,
                marginBottom: 5,
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
                height: Spacing.HEIGHT_24,
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
                height: Spacing.HEIGHT_50,
                width: Spacing.HEIGHT_55,
                borderRadius: Spacing.RADIUS_82,
                marginTop:  -8,
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
                height: Spacing.HEIGHT_24,
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
                height: Spacing.HEIGHT_24,
                width: Spacing.WIDTH_28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name={"Hourly"}
        component={Hourly}
        options={{
          headerShown: false,
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
        component={NearBy}
        options={{
          headerShown: false,
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
        component={Settings}
        options={{
          headerShown: false,
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
      /> */}
    </Tab.Navigator>
  );
};

export default TabRoutes;
