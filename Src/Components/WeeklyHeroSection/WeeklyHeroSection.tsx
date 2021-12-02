import React, { useState } from "react";
import { Text, View } from "react-native";
import colors from "../../globalStyles/colors";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import WeatherImage from "../WeatherImage/WeatherImage";
import { useEffect } from "react";
import Spacing from "../../globalStyles/Spacing";

const WeeklyHeroSection = ({ weatherDegree, weatherDetails }: any) => {
  const [colorOne, setColorOne] = useState(colors.blueTheme);
  const [colorTwo, setcolorTwo] = useState(colors.white);
  const getDay = (time: number) => {
    const date = new Date(time * 1000);
    const day = moment(date).format("ddd");
    const strDate = moment(date).format("DD MMM");
    return { day, strDate };
  };
  useEffect(() => {
    changeAppTheme(weatherDetails?.weather[0]?.main);
  }, [weatherDetails?.weather[0]?.main]);
  const changeAppTheme = (weather: string) => {
    return weather === "Thunderstorm"
      ? (setColorOne(colors.thunderStormFirstColor),
        setcolorTwo(colors.thunderStormSecondColor))
      : weather === "Drizzle"
      ? (setColorOne(colors.rainyFirstColor),
        setcolorTwo(colors.rainySecondColor))
      : weather === "Rain"
      ? (setColorOne(colors.rainyFirstColor),
        setcolorTwo(colors.rainySecondColor))
      : weather === "Snow"
      ? (setColorOne(colors.snowFirstColor),
        setcolorTwo(colors.snowSecondColor))
      : weather === "Clear"
      ? (setColorOne(colors.sunnyFirstColor),
        setcolorTwo(colors.sunnySecondColor))
      : weather === "Clouds"
      ? (setColorOne(colors.cloudyFirstColor),
        setcolorTwo(colors.cloudySecondColor))
      : (setColorOne(colors.hazeFirstColor),
        setcolorTwo(colors.hazeSecondColor));
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colorOne, colorTwo]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          flex: 0,
          borderRadius: 20,
        }}
        end={{ x: 1.2, y: 3 }}
      />
      <View style={styles.mainContainer}>
        <View style={styles.upperView}>
          <View style={styles.mainContainer}>
            <Text style={styles.DayText}>
              {getDay(weatherDetails?.dt)?.day}
            </Text>
            <View
              style={{
                height: 25,
                width: 1,
                backgroundColor: colors.white,
                alignSelf: "center",
                marginHorizontal: Spacing.MARGIN_10,
              }}
            />
            <Text style={styles.dateText}>
              {getDay(weatherDetails?.dt)?.strDate}
            </Text>
          </View>

          <Text style={styles.weatherTypeText}>
            {weatherDetails?.weather[0]?.description}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign name="arrowdown" size={25} color={colors.good} />
            <Text style={{ ...styles.tempText, marginRight: 15 }}>
              {weatherDegree == "F"
                ? (weatherDetails?.temp?.min * 1.8 + 32)?.toFixed(0)
                : weatherDetails?.temp?.min.toFixed(0)}
              &deg;
            </Text>
            <AntDesign
              name="arrowup"
              size={25}
              color={colors.moderatelyPolluted}
            />
            <Text style={styles.tempText}>
              {weatherDegree == "F"
                ? (weatherDetails?.temp?.max * 1.8 + 32)?.toFixed(0)
                : weatherDetails?.temp?.max.toFixed(0)}
              &deg;
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <WeatherImage
            img={weatherDetails?.weather[0]?.main}
            height={100}
            width={100}
          />
        </View>
      </View>
    </View>
  );
};
export default WeeklyHeroSection;
