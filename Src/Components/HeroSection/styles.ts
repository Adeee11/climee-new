import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
  },
  upperView: {
    flex: 0.5,
    alignItems: "flex-start",
  },
  degreeText: {
    color: colors.white,
    fontSize: typography.FONT_SIZE_58,
    fontFamily: fontFamily.semiBold,
  },
  weatherTypeText: {
    color: colors.white,
    fontSize: typography.FONT_SIZE_20,
    fontFamily: fontFamily.semiBold,
  },
  lowerView: {
    marginTop: 10,
  },
  imageContainer: { flex: 0.5, alignItems: "center" },
  degreeSymbol: {
    color: colors.white,
    fontSize: typography.FONT_SIZE_45,
    fontFamily: fontFamily.regular,
  },
  minmaxText: {
    fontSize: typography.FONT_SIZE_12,
    fontFamily: fontFamily.regular,
    color: colors.white,
  },
  minMaxContainer: {
    marginTop: Spacing.MARGIN_5,
    marginBottom: Spacing.MARGIN_15,
    flexDirection: "row",
    alignItems: "center",
  },
  dateStyle: {
    color: colors.white,
    fontSize: typography.FONT_SIZE_11,
    fontFamily: fontFamily.regular,
  }
});

export default styles;
