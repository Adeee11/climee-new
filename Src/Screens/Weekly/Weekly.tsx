import React, { useState } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import AdditionalDetails from "../../Components/AdditionalDetails/AdditionalDetails";
import DaysForecast from "../../Components/DaysForecast/DaysForecast";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import WeeklyHeroSection from "../../Components/WeeklyHeroSection/WeeklyHeroSection";
import colors from "../../globalStyles/colors";
const Weekly = ({
  weatherDegree,
  windDegree,
  weatherDetails,
  navigation,
}: any) => {
  const [selectedDay, setSelectedDay] = useState();
  const handleSelectedDay = (val: any) => {
    setSelectedDay(val);
  };

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <Header
        title={"7 Days"}
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.appBackground }}
      >
        <DaysForecast
          weatherDegree={weatherDegree}
          data={weatherDetails[0]?.weatherDetails?.daily}
          backgroundColor={true}
          selectedDay={handleSelectedDay}
        />
        <WeeklyHeroSection
          weatherDetails={
            selectedDay === undefined
              ? weatherDetails[0]?.weatherDetails?.daily[0]
              : selectedDay
          }
          weatherDegree={weatherDegree}
        />
        <AdditionalDetails
          details={
            selectedDay === undefined
              ? weatherDetails[0]?.weatherDetails?.daily[0]
              : selectedDay
          }
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
  };
};

export default connect(mapStateToProps)(Weekly);
