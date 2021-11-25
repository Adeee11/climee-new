import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.PADDING_13,
  },
  pollutionHeading: {
    fontSize: typography.FONT_SIZE_16,
    color: colors.textColor,
    fontFamily: fontFamily.regular,
  },
  headingText: {
    fontSize: typography.FONT_SIZE_15,
    color: colors.grey,
    fontFamily: fontFamily.semiBold,
  },
  pollutionSubHeading:{
    fontSize: typography.FONT_SIZE_16,
    color: colors.textColor,
    fontFamily: fontFamily.light,
  }
});
export default styles;
