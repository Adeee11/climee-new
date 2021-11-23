import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import PollutionBars from "../../Components/PollutionBars/PollutionBars";
import colors from "../../globalStyles/colors";
import styles from "./styles";
const AirPollution = (props: any) => {
  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={colors.blueTheme}
      />
      <Header
        title={"Air Pollution"}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{ backgroundColor: colors.appBackground }}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.pollutionHeading}>Air Pollution</Text>
          <View style={styles.subContainer}>
            <PollutionBars name1={"Fine Particles / PM2.5"} value={"56.91"} />
            <PollutionBars
              name1={"NO2"}
              name2={"(Nitrogen Dioxide)"}
              value={"46.91"}
            />
            <PollutionBars name1={"O3"} name2={"(Ozone)"} value={"66.91"} />
            <PollutionBars
              name1={"SO2"}
              name2={"(sulphur dioxide)"}
              value={"86.91"}
            />
            <PollutionBars
              name1={"CO"}
              name2={"(Carbon Monoxide)"}
              value={"96.91"}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default AirPollution;
