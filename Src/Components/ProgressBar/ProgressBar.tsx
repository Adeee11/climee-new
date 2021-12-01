import React from "react";
import { StyleSheet, Text } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import typography from "../../globalStyles/typography";

const ProgressBar = ({ val, perc = true }: any) => {
  const color = (item: any) => {
    return item < 20
      ? { colour: colors.good }
      : item < 40
      ? { colour: colors.satisfactory }
      : item < 60
      ? { colour: colors.lightlyPolluted }
      : item < 80
      ? { colour: colors.moderatelyPolluted }
      : item < 100
      ? { colour: colors.heavilyPolluted }
      : { colour: colors.grey };
  };
  return (
    <>
      <ProgressCircle
        percent={val}
        radius={40}
        borderWidth={5}
        color={color(val)?.colour}
        shadowColor={colors.grey}
        bgColor={colors.white}
      >
        <Text style={styles.pollutionHeading}>
          {val}
          {perc ? "%" : ""}
        </Text>
      </ProgressCircle>
    </>
  );
};
const styles = StyleSheet.create({
  pollutionHeading: {
    fontSize: typography.FONT_SIZE_16,
    color: colors.textColor,
    fontFamily: fontFamily.semiBold,
  },
});
export default ProgressBar;
