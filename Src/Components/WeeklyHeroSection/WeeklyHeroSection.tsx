import React from "react";
import { Text, View } from "react-native";
import colors from "../../globalStyles/colors";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import assets from "../../../assets";
const WeeklyHeroSection = ({ weatherDegree, weatherDetails }: any) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.upperView}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              //   backgroundColor:"red"
            }}
          >
            <Text style={styles.DayText}>Wed</Text>
            <View
              style={{
                height: 25,
                width: 1,
                backgroundColor: colors.white,
                alignSelf: "center",
                marginHorizontal: 10,
              }}
            />
            <Text style={styles.dateText}>20 Nov</Text>
          </View>

          <Text style={styles.weatherTypeText}>Sunny</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              //   backgroundColor: "red",
            }}
          >
            <AntDesign name="arrowdown" size={25} color="#3AE000" />
            <Text style={{ ...styles.tempText, marginRight: 15 }}>
              17 &deg;
            </Text>
            <AntDesign name="arrowup" size={25} color="#E00000" />
            <Text style={styles.tempText}>29 &deg;</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={assets.sunny}
            style={{ width: 100, height: 100, resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );
};
export default WeeklyHeroSection;
