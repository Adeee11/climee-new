import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { Animated, StatusBar, Platform, Text } from "react-native";
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
        const response: any = await axios.get(
          `/onecall?lat=${location?.coords?.latitude}&lon=${location?.coords?.longitude}&appid=${api}&units=metric`
        );
        const resp: any = await axios.get(
          `/air_pollution?lat=${location?.coords?.latitude}&lon=${location?.coords?.longitude}&appid=${api}`
        );
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
        weatherDetailsLoading(false);
        pollutionDetails(pollution);
      } catch (err) {
        console.log(err, "error");
      }
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response: any = await axios.get(
  //         `/air_pollution?lat=${state?.latitude}&lon=${state?.longitude}&appid=${api}`
  //       );
  //       // setairQuality(response?.data?.list[0]?.components?.pm2_5);
  //       // setCondition(response?.data?.list[0]?.main?.aqi);
  //     } catch (Err) {
  //       console.log(Err, "error");
  //     }
  //   })();
  // }, []);
  return (
    <>
      {Platform.OS === "ios" ? (
        <StatusBar
          backgroundColor={colors.blueTheme}
          hidden={true}
          translucent={false}
        />
      ) : (
        <StatusBar backgroundColor={colors.blueTheme} hidden={false} />
      )}
      <Animated.View style={[styles.imageWrapper, { opacity: fadeAnim }]}>
        <LinearGradient
          // Background Linear Gradient
          colors={[colors.blueTheme, colors.white]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            flex: 1,
          }}
          end={{ x: 0, y: 3.5 }}
        />
        <Animated.Image
          source={require("../../../assets/Splash.png")}
          style={{
            width: width,
            height: height,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.text1}>Climee</Text>
        <Text style={styles.text2}>Dont worry about</Text>
        <Text style={styles.text2}>the weather we all here</Text>
      </Animated.View>
    </>
  );
};
export default SplashScreen;
