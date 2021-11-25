import React, { useEffect } from "react";
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
import moment from "moment";
import { useState } from "react";

const Hourly = ({
  weatherDetails,
  navigation,
  weatherDegree,
  windDegree,
}: any) => {
  const [todayHourly, setTodayHourly] = useState<any>();
  const [tomorrowHourly, setTomorrowHourly] = useState<any>();

  useEffect(() => {
    const today = new Date()?.toISOString()?.split("T")[0];
    const tomorrow = new Date(new Date()?.getTime() + 24 * 60 * 60 * 1000)
      ?.toISOString()
      ?.split("T")[0];

    const r = weatherDetails[0]?.weatherDetails?.hourly?.filter((e: any) => {
      return new Date(e?.dt * 1000)?.toISOString()?.split("T")[0] == today;
    });
    setTodayHourly(r);

    const filt = weatherDetails[0]?.weatherDetails?.hourly?.filter((e: any) => {
      return new Date(e?.dt * 1000)?.toISOString()?.split("T")[0] == tomorrow;
    });
    setTomorrowHourly(filt);
  }, []);

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={colors.blueTheme}
      />
      <Header
        title={"Hourly"}
        onPress={() => navigation.navigate(navigationStrings.HOME)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <HourlyInformation
          data={todayHourly}
          date={moment(new Date())?.format("dddd, D MMMM")}
          weatherDegree={weatherDegree}
          windDegree={windDegree}
        />
        <HourlyInformation
          data={tomorrowHourly}
          date={moment().add(1, "days").format("dddd, D MMMM").toString()}
          weatherDegree={weatherDegree}
          windDegree={windDegree}
        />
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
