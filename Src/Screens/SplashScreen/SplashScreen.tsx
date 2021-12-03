import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect, useRef } from "react";
import { StatusBar, Platform, Animated } from "react-native";
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
import { Video } from "expo-av";
// import { useSharedValue, interpolate } from 'react-native-reanimated' // version 2.x
import Chroma from "chroma-js";

import {
  themeColorOne,
  themeColorTwo,
} from "../../redux/actions/colorThemeAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GradientHelper } from "../../Components/GradientHelper";

const SplashScreen = () => {
  const AnimatedGradientHelper =
    Animated.createAnimatedComponent(GradientHelper);

  // const [fadeAnim] = useState(new Animated.Value(0));
  // const height = new Animated.Value(300);
  // const width = new Animated.Value(350);

  useEffect(() => {
    // Animated.timing()
    // Animated.timing(fadeAnim, {
    //   toValue: 1,
    //   duration: 500,
    //   useNativeDriver: true,
    // }).start();
    // Animated.sequence([
    //   Animated.parallel([
    //     Animated.timing(width, {
    //       toValue: 180,
    //       delay: 1000,
    //       duration: 500,
    //       useNativeDriver: false,
    //     }),
    //     Animated.timing(height, {
    //       toValue: 80,
    //       delay: 1000,
    //       duration: 500,
    //       useNativeDriver: false,
    //     }),
    //   ]),
    //   Animated.parallel([
    //     Animated.timing(width, {
    //       toValue: heightLessNum ? 1800 : 2500,
    //       duration: 500,
    //       useNativeDriver: false,
    //     }),
    //     Animated.timing(height, {
    //       toValue: heightLessNum ? 1300 : 5000,
    //       duration: 500,
    //       useNativeDriver: false,
    //     }), // Starts the animation
    //     Animated.timing(fadeAnim, {
    //       toValue: 0,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }),
    //   ]),
    // ]).start();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        weatherDetailsLoading(true);
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
       await AsyncStorage.setItem("climeeCurrentLocation", JSON.stringify(locationObj));
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
        console.log(err, "error");
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
  // const animation = useStatnew Animated.Value(0))
  // .current;
  const animation = new Animated.Value(0);
  const animation1 = new Animated.Value(0);
  const height = new Animated.Value(0);
  const width = new Animated.Value(0);
  const top = new Animated.Value(0);
  const bottom = new Animated.Value(0);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [fadeAnimIn] = useState(new Animated.Value(0));

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["blue", "red"],
  });

  const boxInterpolation1 = animation1.interpolate({
    inputRange: [0, 1],
    outputRange: ["red", "blue"],
  });

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    Animated.timing(animation1, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    Animated.sequence([
      Animated.parallel([
        Animated.timing(height, {
          toValue: 400,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 400,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(top, {
          toValue: 280,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(bottom, {
          toValue: 50,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(height, {
          toValue: 350,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 350,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnimIn, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <>
      <Video
        // ref={video}
        style={{flex: 1}}
        source={require("../../../assets/video3.mov")}
        // useNativeControls
        resizeMode="cover"
        shouldPlay
        isLooping={false} 
        // onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      {/* <Animated.View style={{ backgroundColor: boxInterpolation1, flex: 1 }}>
        <Animated.Image
          source={require("../../../assets/Applogo.png")}
          style={{
            width: width,
            height: height,
            resizeMode: "contain",
            transform: [{ translateY: top }, { translateX: bottom }],
            opacity: fadeAnim,
          }}
        />
        <Animated.Image
          source={require("../../../assets/Applogo.png")}
          style={{
            width: 350,
            height: 350,
            top: 0,
            alignSelf: "center",
            bottom: 0,
            resizeMode: "contain",
            opacity: fadeAnimIn,
            // transform: [{ translateY: top }, { translateX: bottom }],
          }}
        />
      </Animated.View> */} 
    </>
  );
};

export default SplashScreen;
