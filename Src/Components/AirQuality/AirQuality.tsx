import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Spacing from "../../globalStyles/Spacing";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
import { Right } from "../../../assets/svg";
import ProgressBar from "../ProgressBar/ProgressBar";
const AirQuality = ({ navigation, background = false, val }: any) => {
  const cond = (item: any) => {
    return item < 20
      ? { condition: "Good" }
      : item < 40
      ? { condition: "Satisfactory" }
      : item < 60
      ? { condition: "Lightly Polluted" }
      : item < 80
      ? { condition: "Moderately Polluted" }
      : item < 100
      ? { condition: "Heavily Polluted" }
      : { condition: "No Data Available" };
  };
  return (
    <View style={styles.AirPollutionView}>
      {background ? (
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate(navigationStrings.AIRPOLLUTION)}
        >
          <Text style={styles.cardTitle}>Air Pollution</Text>
          <Right />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            paddingHorizontal: Spacing.PADDING_16,
            paddingTop: Spacing.PADDING_16,
          }}
        >
          <Text style={styles.pollutionHeading}>Air Pollution</Text>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: background ? Spacing.PADDING_16 : Spacing.PADDING_10,
        }}
      >
        <ProgressBar
          val={val > 100 ? ((val / 500) * 100).toFixed(1) : val}
          perc={val < 100 ? false : true}
        />
        <View style={{ paddingHorizontal: Spacing.PADDING_20 }}>
          <Text style={styles.pollutionHeading}>
            {cond(val > 100 ? (val / 500) * 100 : val)?.condition}
          </Text>
          <Text style={{ ...styles.headingText, fontFamily: fontFamily.light }}>
            {"Fine particles / PM2.5"}
          </Text>
          {background ? null : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationStrings.AIRPOLLUTION)
              }
              style={{
                marginVertical: 5,
                padding: 10,
                backgroundColor: colors.darkBlue,
                width: "80%",
                borderRadius: 10,
              }}
            >
              <Text style={styles.buttonText}>See More</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
export default AirQuality;
