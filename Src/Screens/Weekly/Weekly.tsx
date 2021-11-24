import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import assets from "../../../assets";
import AdditionalDetails from "../../Components/AdditionalDetails/AdditionalDetails";
import DaysForecast from "../../Components/DaysForecast/DaysForecast";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import WeeklyHeroSection from "../../Components/WeeklyHeroSection/WeeklyHeroSection";
import colors from "../../globalStyles/colors";
const Weekly = ({ weatherDegree, windDegree, weatherDetails }: any) => {
  useEffect(() => {
    // console.log(weatherDetails[0]?.weatherDetails?.daily);
  }, []);
  const temp = [
    {
      id: "1",
      min: "17",
      max: "30",
      time: "Wed",
      img: assets.rainy,
      selected: false,
    },
    {
      id: "2",
      min: "17",
      max: "30",
      time: "Thu",
      img: assets.rainy,
      selected: false,
    },
    {
      id: "3",
      min: "17",
      max: "30",
      time: "Fri",
      img: assets.rainy,
      selected: false,
    },
    {
      id: "4",
      min: "17",
      max: "30",
      time: "Sat",
      img: assets.rainy,
      selected: false,
    },
    {
      id: "5",
      min: "17",
      max: "30",
      time: "Sun",
      img: assets.rainy,
      selected: false,
    },
    {
      id: "6",
      min: "17",
      max: "30",
      time: "Mon",
      img: assets.rainy,
      selected: false,
    },
    {
      id: "7",
      min: "17",
      max: "30",
      time: "Tue",
      img: assets.rainy,
      selected: false,
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
      <Header title={"7 Days"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#E8E8E8" }}
      >
        <DaysForecast
        weatherDegree={weatherDegree}
          data={weatherDetails[0]?.weatherDetails?.daily}
          backgroundColor={true}
        />
        <WeeklyHeroSection
          weatherDetails={weatherDetails}
          weatherDegree={weatherDegree}
        />
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
  };
};

export default connect(mapStateToProps)(Weekly);
