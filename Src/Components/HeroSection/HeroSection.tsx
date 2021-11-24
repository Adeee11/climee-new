import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import assets from "../../../assets";
import Forecast from "../Forecast/Forecast";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import styles from "./styles";
import WeatherImage from "../WeatherImage/WeatherImage";

const HeroSection = ({ weatherData }: any) => {
  const temp = [
    { id: "1", temp: "24", time: "1 PM", img: assets.rainy },
    { id: "2", temp: "24", time: "1 PM", img: assets.rainy },
    { id: "3", temp: "24", time: "1 PM", img: assets.rainy },
    { id: "4", temp: "24", time: "1 PM", img: assets.rainy },
    { id: "5", temp: "24", time: "1 PM", img: assets.rainy },
    { id: "6", temp: "24", time: "1 PM", img: assets.rainy },
    { id: "7", temp: "24", time: "1 PM", img: assets.rainy },
    { id: "8", temp: "24", time: "1 PM", img: assets.rainy },
    { id: "9", temp: "24", time: "1 PM", img: assets.rainy },
    { id: "10", temp: "24", time: "1 PM", img: assets.rainy },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#3C6FD1", "#7CA9FF"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          flex: 0,
          borderRadius: 20,
        }}
        end={{ x: 0.2, y: 1.1 }}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.upperView}>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Text style={styles.degreeText}>
              {weatherData[0]?.weatherDetails?.current?.temp?.toFixed(0)}
            </Text>
            <Text style={styles.degreeSymbol}>&deg;</Text>
          </View>
          <Text style={styles.weatherTypeText}>
            {weatherData[0]?.weatherDetails?.current?.weather[0]?.description}
          </Text>
          <View style={styles.minMaxContainer}>
            <AntDesign name="arrowdown" size={22} color="#3AE000" />
            <Text style={[styles.minmaxText, { marginRight: 10 }]}>
              17&deg;
            </Text>
            <AntDesign name="arrowup" size={22} color="#E00000" />
            <Text style={styles.minmaxText}>29&deg;</Text>
          </View>
          <Text style={styles.dateStyle}>
            {moment(new Date()).format("dddd, D MMMM")}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <WeatherImage
            img={weatherData[0]?.weatherDetails?.current?.weather[0]?.main}
            height={100}
            width={100}
          />
        </View>
      </View>
      {/* Flatlist section */}
      <View style={styles.lowerView}>
        <Forecast
          data={weatherData[0]?.weatherDetails?.hourly}
          title="Hourly Forecast"
        />
      </View>
    </View>
  );
};

export default HeroSection;
