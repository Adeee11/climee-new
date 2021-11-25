import React from "react";
import { FlatList, ScrollView } from "react-native";
import { View, Text } from "react-native";
import assets from "../../../assets";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import HourlyInformation from "../../Components/HourlyInformation/HourlyInformation";
import navigationStrings from "../../constants/navigationStrings";
import colors from "../../globalStyles/colors";
import { connect } from "react-redux";
import styles from "./styles";

const Hourly = ({weatherDetails, navigation}:any) => {
  
  const data = [
    {
      id: "1",
      time: "5 PM",
      temp: "25",
      wind: "5",
      img: assets.sunny,
    },
    {
      id: "2",
      time: "5 PM",
      temp: "25",
      wind: "5",
      img: assets.sunny,
    },
    {
      id: "3",
      time: "5 PM",
      temp: "25",
      wind: "5",
      img: assets.sunny,
    },
    {
      id: "4",
      time: "5 PM",
      temp: "25",
      wind: "5",
      img: assets.sunny,
    },
    {
      id: "5",
      time: "5 PM",
      temp: "25",
      wind: "5",
      img: assets.sunny,
    },
    {
      id: "6",
      time: "5 PM",
      temp: "25",
      wind: "5",
      img: assets.sunny,
    },
    {
      id: "7",
      time: "5 PM",
      temp: "25",
      wind: "5",
      img: assets.sunny,
    },
  ];
  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={colors.blueTheme}
      />
      <Header title={"Hourly"} onPress={()=> navigation.navigate(navigationStrings.HOME)} />
      <ScrollView showsVerticalScrollIndicator={false}bounces={false} style={{ backgroundColor: "#F5F5F5" }}>
      <HourlyInformation data={weatherDetails[0]?.weatherDetails?.hourly} date={"Tuesday, 24 August"} />
      {/* <HourlyInformation data={data} date={"Wednesday, 25 August"} /> */}
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weatherDegree: state?.switchReducer?.weatherDegree,
    windDegree: state?.switchReducer?.windDegree,
    notify: state?.switchReducer?.notify,
    weatherDetails: state?.WeatherDetailsReducer?.weatherDetails,
    weatherLoading: state?.WeatherDetailsReducer?.loading,
  };
};

export default connect(mapStateToProps)(Hourly);