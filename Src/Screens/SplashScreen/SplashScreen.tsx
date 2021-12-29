import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect, useRef } from "react";
import { StatusBar, Platform, Animated, Alert } from "react-native";
import { heightLessNum } from "../../constants/dimensions";
import * as Location from "expo-location";
import axios from "../../api/axios";
import colors from "../../globalStyles/colors";
import styles from "./styles";
import {
  pollutionDetails,
  weatherDetails,
  weatherDetailsLoading,
} from "../../redux/actions/weatherActions";
import api from "../../globalStyles/api";
import {
  themeColorOne,
  themeColorTwo,
} from "../../redux/actions/colorThemeAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import assets from "../../../assets";

const SplashScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const height = new Animated.Value(300);
  const width = new Animated.Value(350);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.sequence([
      Animated.parallel([
        Animated.timing(width, {
          toValue: 180,
          delay: 1000,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(height, {
          toValue: 80,
          delay: 1000,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(width, {
          toValue: heightLessNum ? 1800 : 2500,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(height, {
          toValue: heightLessNum ? 1300 : 5000,
          duration: 500,
          useNativeDriver: false,
        }), // Starts the animation
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { status } = await Location.requestForegroundPermissionsAsync();
  //       if (status !== "granted") {
  //         Alert.alert("Please grant location permission.");
  //         await Location.requestForegroundPermissionsAsync();
  //       }
  //     } catch (err: any) {
  //       console.log(err.message);
  //     }
  //   })();
  // }, []);
  useEffect(() => {
    (async () => {
      try {
        weatherDetailsLoading(true);
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Please grant location permission.");
          await Location.requestForegroundPermissionsAsync();
        }

        const location = await Location.getCurrentPositionAsync({});
        const place = await Location.reverseGeocodeAsync({
          latitude: location?.coords?.latitude,
          longitude: location?.coords?.longitude,
        });
        const locationObj = {
          longitude: location?.coords?.longitude,
          latitude: location?.coords?.latitude,
          city: place[0]?.city,
          country: place[0]?.country,
          street: place[0]?.street,
        };
        await AsyncStorage.setItem(
          "climeeCurrentLocation",
          JSON.stringify(locationObj)
        );
        const response: any = await axios.get(
          `/onecall?lat=${location?.coords?.latitude}&lon=${location?.coords?.longitude}&appid=${api}&units=metric`
        );
        const resp: any = await axios.get(
          `/air_pollution?lat=${location?.coords?.latitude}&lon=${location?.coords?.longitude}&appid=${api}`
        );
        changeAppTheme(response.data.current.weather[0].main);
        const details = [];
        const pollution = [];
        details.push({
          weatherDetails: response?.data,                                                                                                           
          locationDetails: locationObj,
        });
        pollution.push({
          pollutionDetails: resp?.data?.list[0],
        });
        weatherDetails(details);
        pollutionDetails(pollution);
        weatherDetailsLoading(false);
      } catch (err) {
        console.log(err, "erroaaasr");
      }
    })();
  }, []);

  const changeAppTheme = (weather: string) => {
    return weather === "Thunderstorm"
      ? (themeColorOne(colors.thunderStormFirstColor),
        themeColorTwo(colors.thunderStormSecondColor))
      : weather === "Drizzle"
      ? (themeColorOne(colors.rainyFirstColor),
        themeColorTwo(colors.rainySecondColor))
      : weather === "Rain"
      ? (themeColorOne(colors.rainyFirstColor),
        themeColorTwo(colors.rainySecondColor))
      : weather === "Snow"
      ? (themeColorOne(colors.snowFirstColor),
        themeColorTwo(colors.snowSecondColor))
      : weather === "Clear"
      ? (themeColorOne(colors.sunnyFirstColor),
        themeColorTwo(colors.sunnySecondColor))
      : weather === "Clouds"
      ? (themeColorOne(colors.cloudyFirstColor),
        themeColorTwo(colors.cloudySecondColor))
      : (themeColorOne(colors.hazeFirstColor),
        themeColorTwo(colors.hazeSecondColor));
  };
  return (
    <>
      {Platform.OS === "ios" ? (
        <StatusBar
          backgroundColor={colors.darkBlue}
          hidden={true}
          translucent={false}
          barStyle="light-content"
        />
      ) : (
        <StatusBar
          backgroundColor={colors.darkBlue}
          hidden={false}
          barStyle="light-content"
        />
      )}
      <Animated.View style={[styles.imageWrapper, { opacity: fadeAnim }]}>
        <LinearGradient
          // Background Linear Gradient
          colors={[colors.darkBlue, colors.white]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            flex: 0,
            // borderRadius: 20,
          }}
          end={{ x: 0.2, y: 2.5 }}
        />
        <Animated.Image
          source={assets.splashIcon}
          style={{
            width: width,
            height: height,
            resizeMode: "contain",
          }}
        />
      </Animated.View>
    </>
  );
};

export default SplashScreen;
