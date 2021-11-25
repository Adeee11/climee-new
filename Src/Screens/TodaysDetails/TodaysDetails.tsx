import React from "react";
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
  useEffect(() => {
    // console.log(weatherDetails[0]?.weatherDetails.daily[0].moonrise);
  }, []);
  const labels = [
    "10PM",
    "11PM",
    "12Pm",
    "1Am",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ];
  const datasets = [
    {
      data: [
        24, 25, 23, 24, 25, 26, 24, 26, 27, 28, 29, 28, 27, 26, 25, 24, 23, 22,
        21,
      ],
    },
  ];
  const time = (time: number) => {
    const date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes: number | string = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return { strTime };
  };
  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={colors.blueTheme}
      />
      <Header title={"Today's Details"} onPress={() => navigation.goBack()} />
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
              datasets,
            }}
            width={1000}
            height={250}
            // withDots={false}
            // withInnerLines={false}
            withShadow={false}
            withOuterLines={false}
            withHorizontalLabels={false}
            // withVerticalLabels={false}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
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
                {datasets[0].data[index] + "°C"}
              </Text>
            )}
            fromZero
          />
        </ScrollView>
        <View style={{ margin: Spacing.MARGIN_16 }}>
          <AirQuality
            navigation={navigation}
            val={pollutionDetails[0].pollutionDetails.components.pm2_5.toFixed(
              0
            )}
          />
        </View>

        <AdditionalDetails 
          wind={
            windDegree == "mph"
              ? (
                  weatherDetails[0]?.weatherDetails?.current?.wind_speed * 2.237
                )?.toFixed(2)
              : weatherDetails[0]?.weatherDetails?.current?.wind_speed?.toFixed(
                  2
                )
          }
          humidity={weatherDetails[0]?.weatherDetails?.current?.humidity}
          DewPoint={weatherDetails[0]?.weatherDetails?.current?.dew_point}
          Pressure={weatherDetails[0]?.weatherDetails?.current?.pressure}
          UvIndex={weatherDetails[0]?.weatherDetails?.current?.uvi}
          SunRise={
            time(weatherDetails[0]?.weatherDetails?.current?.sunrise)?.strTime
          }
          SunSet={
            time(weatherDetails[0]?.weatherDetails?.current?.sunset)?.strTime
          }
          MoonRise={
            time(weatherDetails[0]?.weatherDetails.daily[0].moonrise)?.strTime
          }
          MoonSet={
            time(weatherDetails[0]?.weatherDetails.daily[0].moonset)?.strTime
          }
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
