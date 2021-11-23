import React from "react";
import { Text, View } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import styles from "./styles";
const PollutionBars = (props: any) => {
  const { name1, value, name2 } = props;
  return (
    <View style={styles.mainContainer}>
      <ProgressCircle
        percent={value}
        radius={35}
        borderWidth={4}
        color={value < 50 ? "#3AE000" : value > 80 ? "red" : "#FFDE00"}
        shadowColor={colors.grey}
        bgColor="#fff"
      >
        <Text style={styles.pollutionHeading}>{value}</Text>
      </ProgressCircle>
      <View style={{ paddingHorizontal: Spacing.PADDING_20 }}>
        <Text style={styles.pollutionHeading}>
          {name1}
          <Text style={styles.pollutionSubHeading}> {name2}</Text>
        </Text>
        <Text style={styles.headingText}>
          {value < 50 ? "Satisfactory" : value > 80 ? "Dangerous" : "Moderate"}
        </Text>
        <Text style={{ ...styles.headingText, fontFamily: fontFamily.regular }}>
          {value + " μg/m3 "}
        </Text>
      </View>
    </View>
  );
};
export default PollutionBars;
