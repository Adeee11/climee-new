import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: colors.appBackground,
    flexDirection: "column",
  },
  text1: {
    color: colors.textColor,
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_30,
  },
  text2: {
    color: colors.headerBlue,
    fontFamily: fontFamily.regular,
    textAlign: "left",
    fontSize: typography.FONT_SIZE_12,
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  blurContainer: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
  UnitsView: {
    flex: 0.2,
    paddingHorizontal: Spacing.PADDING_16,
    paddingTop: Spacing.PADDING_16,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  heading: {
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_16,
    color: colors.textColor,
    paddingHorizontal: Spacing.PADDING_16,
    paddingVertical: Spacing.PADDING_8,
  },
  UnitSubContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: Spacing.PADDING_24,
    paddingVertical: Spacing.PADDING_10,
    borderRadius: Spacing.RADIUS_10,
    width: "100%",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Spacing.PADDING_5,
  },
  textColor14: {
    fontSize: typography.FONT_SIZE_14,
    color: colors.textColor,
    fontFamily: fontFamily.regular,
    marginHorizontal: Spacing.MARGIN_5,
  },
  grey12: {
    fontFamily: fontFamily.light,
    fontSize: typography.FONT_SIZE_12,
    color: colors.grey,
  },
  rowStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowEnd: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingVertical: Spacing.PADDING_8,
  },
  footer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.PADDING_10,
  },
});

export default styles;
