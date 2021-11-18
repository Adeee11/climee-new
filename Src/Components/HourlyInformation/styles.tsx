import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  dateText: {
    fontSize: typography.FONT_SIZE_18,
    fontFamily: fontFamily.regular,
    color: colors.textColor,
  },
  headingView: {
    paddingHorizontal: Spacing.PADDING_16,
    paddingVertical: Spacing.PADDING_20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  mainContainer: {
    padding: Spacing.PADDING_16,
    backgroundColor: colors.white,
    borderTopWidth: 0.2,
    borderTopColor: colors.grey,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Spacing.PADDING_10,
  },
  timeText: {
    fontFamily: fontFamily.light,
    fontSize: typography.FONT_SIZE_14,
    color: colors.textColor,
  },
  tempText: {
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_16,
    color: colors.textColor,
  },
});
export default styles;
