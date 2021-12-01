import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    backgroundColor: colors.blueTheme,
  },
  UnitsView: {
    flex: 0.25,
    margin: Spacing.MARGIN_10,
    justifyContent: "center",
  },
  heading: {
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_13,
    color: colors.textColor,
    paddingLeft: Spacing.PADDING_20,
    paddingVertical: Spacing.PADDING_8,
  },
  UnitSubContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: Spacing.PADDING_24,
    paddingVertical: Spacing.PADDING_10,
    borderRadius: Spacing.RADIUS_20,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Spacing.PADDING_5,
  },
  textColor14: {
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_14,
    color: colors.textColor,
  },
  grey12: {
    fontFamily: fontFamily.light,
    fontSize: typography.FONT_SIZE_12,
    color: colors.grey,
    marginTop: Spacing.MARGIN_10,
  },
  rowStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowEnd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: Spacing.PADDING_8,
  },
  iconStyle: {
    height: 24,
    width: 24,
    marginHorizontal: Spacing.MARGIN_4,
    tintColor: colors.darkBlue,
  },
  actionsheetTextStyle: {
    fontSize: typography.FONT_SIZE_16,
    fontFamily: fontFamily.regular,
    marginHorizontal: Spacing.MARGIN_5,
  },
  bottomWrapper: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Spacing.PADDING_10,
  },
});
export default styles;
