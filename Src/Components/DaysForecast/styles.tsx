import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  dataContainer: {
    padding: Spacing.PADDING_20,
    alignItems: "center",
  },
  timeText: {
    color: colors.grey,
    fontSize: typography.FONT_SIZE_14,
    fontFamily: fontFamily.regular,
  },
  tempText: {
    color: colors.white,
    fontSize: typography.FONT_SIZE_15,
    fontFamily: fontFamily.regular,
  },
  mainContainer: { flexDirection: "row", alignItems: "center" },
  tempView: {
    paddingVertical: Spacing.PADDING_10,
    alignItems: "center",
  },
  selectedLine: {
    borderBottomWidth: 3,
    borderColor: colors.darkBlue,
    width: "100%",
  },
});
export default styles;
