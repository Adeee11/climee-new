import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import colors from "../../globalStyles/colors";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import assets from "../../../assets";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TodayDetail from "../../Components/TodayDetail/TodayDetail";
import Forecast from "../../Components/Forecast/Forecast";
import Header from "../../Components/Header/Header";

const Home = () => {
  const temp = [
    { id: "1", min: "17", max: "30", time: "Wed", img: assets.rainy },
    { id: "2", min: "17", max: "30", time: "Thu", img: assets.rainy },
    { id: "3", min: "17", max: "30", time: "Fri", img: assets.rainy },
    { id: "4", min: "17", max: "30", time: "Sat", img: assets.rainy },
    { id: "5", min: "17", max: "30", time: "Sun", img: assets.rainy },
    { id: "6", min: "17", max: "30", time: "Mon", img: assets.rainy },
    { id: "7", min: "17", max: "30", time: "Tue", img: assets.rainy },
  ];
  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={colors.blueTheme}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Header title={"Mohali, India"} backButton={false} />
        {/* Scrollable view */}
        <ScrollView
          style={{ marginHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {/* hero component */}
          <View style={{ marginVertical: 20 }}>
            <HeroSection />
          </View>
          {/* Today's Details component  */}
          <View style={{ marginBottom: 20 }}>
            <TodayDetail />
          </View>
          <Forecast
            data={temp}
            title="7 Days Forecast"
            backgroundColor={true}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Home;
