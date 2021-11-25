import React from "react";
import { Text, View } from "react-native";
import colors from "../../globalStyles/colors";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import assets from "../../../assets";
import WeatherImage from "../WeatherImage/WeatherImage";

const WeeklyHeroSection = ({ weatherDegree, weatherDetails }: any) => {
  const getDay = (time: number) => {
    const date = new Date(time * 1000);
    const day = moment(date).format("ddd");
    const strDate = moment(date).format("DD MMM");
    return { day, strDate };
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.blueTheme, colors.white]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          flex: 0,
          borderRadius: 20,
        }}
        end={{ x: 2, y: 9 }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.upperView}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              //   backgroundColor:"red"
            }}
          >
            <Text style={styles.DayText}>
              {getDay(weatherDetails?.dt)?.day}
            </Text>
            <View
              style={{
                height: 25,
                width: 1,
                backgroundColor: colors.white,
                alignSelf: "center",
                marginHorizontal: 10,
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
            <AntDesign name="arrowdown" size={25} color="#3AE000" />
            <Text style={{ ...styles.tempText, marginRight: 15 }}>
              {parseInt(weatherDetails?.temp?.min)} &deg;
            </Text>
            <AntDesign name="arrowup" size={25} color="#E00000" />
            <Text style={styles.tempText}>
              {parseInt(weatherDetails?.temp?.max)} &deg;
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
