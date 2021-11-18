import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Spacing.HEIGHT_50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleStyle: {
    color: colors.white,
    fontSize: typography.FONT_SIZE_15,
    fontFamily: fontFamily.semiBold,
  },
  dataContainer: {
    padding: Spacing.PADDING_25,
    alignItems: "center",
  },
  timeText: {
    color: "#363B64",
    fontSize: typography.FONT_SIZE_14,
    fontFamily: fontFamily.regular,
  },
  tempText: {
    color: "#fff",
    fontSize: typography.FONT_SIZE_15,
    fontFamily: fontFamily.regular,
  },
});

export default styles;
