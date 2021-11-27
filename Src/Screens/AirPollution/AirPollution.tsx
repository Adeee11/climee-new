import React, { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import PollutionBars from "../../Components/PollutionBars/PollutionBars";
import colors from "../../globalStyles/colors";
import styles from "./styles";
const AirPollution = (props: any) => {
  const { pollutionDetails } = props;
  useEffect(() => {
    // console.log(pollutionDetails[0].pollutionDetails.components);
  }, []);
  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
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
            <PollutionBars
              name1={"Fine Particles/PM2.5"}
              value={pollutionDetails[0].pollutionDetails.components.pm2_5}
              highest={500}
            />
            <PollutionBars
              name1={"Inhalable particles/PM10"}
              value={pollutionDetails[0].pollutionDetails.components.pm10}
              highest={430}
            />
         
            <PollutionBars
              name1={"NO2"}
              name2={"(Nitrogen Dioxide)"}
              value={pollutionDetails[0].pollutionDetails.components.no2}
              highest={400}
            />
            <PollutionBars
              name1={"O3"}
              name2={"(Ozone)"}
              value={pollutionDetails[0].pollutionDetails.components.o3}
              highest={250}
            />
            <PollutionBars
              name1={"SO2"}
              name2={"(sulphur dioxide)"}
              value={pollutionDetails[0].pollutionDetails.components.so2}
              highest={160}
            />
            <PollutionBars
              name1={"NH3"}
              name2={"(Ammonia)"}
              value={pollutionDetails[0].pollutionDetails.components.nh3}
              highest={1800}
            />
            <PollutionBars
              name1={"CO"}
              name2={"(Carbon Monoxide)"}
              value={pollutionDetails[0].pollutionDetails.components.co}
              highest={10000}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    pollutionDetails: state?.WeatherDetailsReducer?.pollutionDetails,
  };
};

export default connect(mapStateToProps)(AirPollution);
