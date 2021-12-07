import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import styles from "./styles";
import WeatherImage from "../WeatherImage/WeatherImage";
import Forecast from "../Forecast/Forecast";
import colors from "../../globalStyles/colors";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const HeroSection = ({
  weatherData,
  weatherDegree,
  navigation,
  firstColor,
  secondColor,
}: any) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[firstColor, secondColor]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          flex: 0,
          borderRadius: 20,
        }}
        end={{ x: 0.2, y: 2.5 }}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.upperView}>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Text style={styles.degreeText}>
              {weatherDegree == "F"
                ? (
                    weatherData[0]?.weatherDetails?.current?.temp * 1.8 +
                    32
                  )?.toFixed(0)
                : weatherData[0]?.weatherDetails?.current?.temp?.toFixed(0)}
            </Text>
            <Text style={styles.degreeSymbol}>&deg; </Text>
            <Text
              style={{
                ...styles.degreeSymbol,
                marginLeft: -10,
                fontSize: typography.FONT_SIZE_30,
                marginTop: 8,
              }}
            >
              {weatherDegree == "null" ? "C" : weatherDegree}
            </Text>
          </View>
          <Text style={styles.weatherTypeText}>
            {weatherData[0]?.weatherDetails?.current?.weather[0]?.description}
          </Text>
          <View style={styles.minMaxContainer}>
            <AntDesign name="arrowdown" size={22} color={colors.good} />
            <Text
              style={[styles.minmaxText, { marginRight: Spacing.MARGIN_10 }]}
            >
              {weatherDegree == "F"
                ? (
                    weatherData[0]?.weatherDetails.daily[0].temp.min * 1.8 +
                    32
                  )?.toFixed(0)
                : weatherData[0]?.weatherDetails.daily[0].temp.min.toFixed(0)}
              &deg;
            </Text>
            <AntDesign
              name="arrowup"
              size={22}
              color={colors.moderatelyPolluted}
            />
            <Text style={styles.minmaxText}>
              {weatherDegree == "F"
                ? (
                    weatherData[0]?.weatherDetails.daily[0].temp.max * 1.8 +
                    32
                  )?.toFixed(0)
                : weatherData[0]?.weatherDetails.daily[0].temp.max.toFixed(0)}
              &deg;
            </Text>
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
      <View style={styles.lowerView}>
        <Forecast
          data={weatherData[0]?.weatherDetails?.hourly}
          title="Hourly Forecast"
          weatherDegree={weatherDegree}
          navigation={navigation}
          tab={false}
        />
      </View>
    </View>
  );
};

export default HeroSection;
