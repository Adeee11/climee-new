import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import assets from "../../../assets";
import DaysForecast from "../../Components/DaysForecast/DaysForecast";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import colors from "../../globalStyles/colors";
const Weekly = () => {
  const temp = [
    { id: "1", min: "17", max: "30", time: "Wed", img: assets.rainy,selected:false },
    { id: "2", min: "17", max: "30", time: "Thu", img: assets.rainy ,selected:false},
    { id: "3", min: "17", max: "30", time: "Fri", img: assets.rainy ,selected:false},
    { id: "4", min: "17", max: "30", time: "Sat", img: assets.rainy ,selected:false},
    { id: "5", min: "17", max: "30", time: "Sun", img: assets.rainy ,selected:false},
    { id: "6", min: "17", max: "30", time: "Mon", img: assets.rainy ,selected:false},
    { id: "7", min: "17", max: "30", time: "Tue", img: assets.rainy ,selected:false},
  ];
  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={colors.blueTheme}
        
      />
      <Header title={"7 Days"} />
      < ScrollView showsVerticalScrollIndicator={false}>
        <DaysForecast
        data={temp}
        backgroundColor={true}
        />
        
      </ScrollView>
      
    </>
  );
};
export default Weekly;
