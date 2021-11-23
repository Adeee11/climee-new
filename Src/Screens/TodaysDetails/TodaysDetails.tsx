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
const TodaysDetails = (props: any) => {
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
  ];
  const datasets = [
    {
      data: [24, 25, 23, 24, 25, 26, 24, 26, 27, 28, 29],
    },
  ];
  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={colors.blueTheme}
      />
      <Header
        title={"Today's Details"}
        onPress={() => props.navigation.goBack()}
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
              datasets,
            }}
            width={699}
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
        <AirQuality navigation={props.navigation} />

        <AdditionalDetails />
      </ScrollView>
    </>
  );
};
export default TodaysDetails;
