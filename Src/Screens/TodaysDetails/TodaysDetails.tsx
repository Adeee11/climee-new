import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import { width } from "../../globalStyles/resposiveStyle";
import typography from "../../globalStyles/typography";

import styles from "./styles";
import Spacing from "../../globalStyles/Spacing";
import AdditionalDetails from "../../Components/AdditionalDetails/AdditionalDetails";
import navigationStrings from "../../constants/navigationStrings";
import AirQuality from "../../Components/AirQuality/AirQuality";
import { useEffect } from "react";
import { connect } from "react-redux";
const TodaysDetails = ({
  weatherDetails,
  weatherDegree,
  windDegree,
  navigation,
  pollutionDetails,
}: any) => {
  const time = (time: number) => {
    const date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes: number | string = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + " " + ampm;
    return { strTime };
  };

  // const [todayHourly, setTodayHourly] = useState<any>();
  // useEffect(() => {
  //   const today = new Date()?.toISOString()?.split("T")[0];
  //   const tomorrow = new Date(new Date()?.getTime() + 24 * 60 * 60 * 1000)
  //     ?.toISOString()
  //     ?.split("T")[0];

  //   const r = weatherDetails[0]?.weatherDetails?.hourly?.filter((e: any) => {
  //     return new Date(e?.dt * 1000)?.toISOString()?.split("T")[0] == today;
  //   });
  //   setTodayHourly(r);

  //   const filt = weatherDetails[0]?.weatherDetails?.hourly?.filter((e: any) => {
  //     return new Date(e?.dt * 1000)?.toISOString()?.split("T")[0] == tomorrow;
  //   });
  //   // setTomorrowHourly(filt);
  //   console.log(todayHourly);

  // }, []);

  const labels = weatherDetails[0]?.weatherDetails?.hourly?.map(
    (valTemp: any) => time(valTemp?.dt).strTime
  );
  const dataPoints = weatherDetails[0]?.weatherDetails?.hourly?.map(
    (valTemp: any) => valTemp.temp.toFixed(0)
  );

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <Header
        title={"Today's Details"}
        onPress={() => navigation.goBack()}
        tab={false}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{ backgroundColor: colors.appBackground }}
      >
        <View style={styles.heading}>
          <Text style={styles.headingText}>Temperature Track</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <LineChart
            data={{
              labels,
              datasets: [
                {
                  data: dataPoints,
                },
              ],
            }}
            width={dataPoints.length * 50}
            height={250}
            // withDots={false}
            // withInnerLines={false}
            withShadow={false}
            withOuterLines={false}
            withHorizontalLabels={false}
            // withVerticalLabels={false}
            chartConfig={{
              backgroundColor: colors.white,
              backgroundGradientFrom: colors.white,
              backgroundGradientTo: colors.white,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(124, 169, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(124, 169, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            renderDotContent={({ x, y, index }) => (
              <Text
                style={{
                  position: "absolute",
                  top: y + 15,
                  left: x - 5,
                  color: colors.darkBlue,
                  fontSize: typography.FONT_SIZE_14,
                  fontFamily: fontFamily.regular,
                }}
              >
                {weatherDegree == "F"
                  ? (dataPoints[index] * 1.8 + 32)?.toFixed(0)
                  : dataPoints[index]}
                &deg;
                {weatherDegree == "F" ? " F" : " C"}
              </Text>
            )}
            fromZero
          />
        </ScrollView>
        <View style={{ margin: Spacing.MARGIN_16 }}>
          <AirQuality
            navigation={navigation}
            val={pollutionDetails[0].pollutionDetails.components.pm2_5.toFixed(
              2
            )}
          />
        </View>

        <AdditionalDetails
          details={weatherDetails[0]?.weatherDetails?.daily[0]}
          windDegree={windDegree}
        />
      </ScrollView>
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    weatherDegree: state?.switchReducer?.weatherDegree,
    windDegree: state?.switchReducer?.windDegree,
    weatherDetails: state?.WeatherDetailsReducer?.weatherDetails,
    pollutionDetails: state?.WeatherDetailsReducer?.pollutionDetails,
  };
};

export default connect(mapStateToProps)(TodaysDetails);
