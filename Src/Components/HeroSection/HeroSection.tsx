import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import assets from "../../../assets";
import Forecast from "../Forecast/Forecast";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../globalStyles/colors";
import styles from "./styles";

const HeroSection = () => {
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
          <View style={{ flexDirection: "row", alignItems: "flex-start"}}>
          <Text style={styles.degreeText}>24</Text>
          <Text style={styles.degreeSymbol}>&deg;</Text>
          </View>
          <Text style={styles.weatherTypeText}>Sunny</Text>
            <View style={styles.minMaxContainer}>
              <AntDesign name="arrowdown" size={22} color="#3AE000" />
              <Text style={[styles.minmaxText, {marginRight: 10}]}>17&deg;</Text>
              <AntDesign name="arrowup" size={22} color="#E00000" />
              <Text style={styles.minmaxText}>29&deg;</Text>
            </View>
            <Text style={styles.dateStyle}>Tuesday, 17 November</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={assets.sunny}
            style={{ width: 100, height: 100, resizeMode: "contain" }}
          />
        </View>
      </View>
      {/* Flatlist section */}
      <View style={styles.lowerView}>
        <Forecast data={temp} title="Hourly Forecast" />
      </View>
    </View>
  );
};

export default HeroSection;
