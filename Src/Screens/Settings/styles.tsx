import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    // padding: 20,
    // justifyContent: 'center',
    backgroundColor: colors.blueTheme,
  },
  UnitsView: {
    flex: 0.25,
    margin: 10,
    justifyContent: "center",
    // backgroundColor:"red"
  },
  heading: {
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_13,
    color: colors.textColor,
    paddingLeft: 20,
    paddingVertical: 8,
  },
  UnitSubContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  textColor14: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.textColor,
  },
  grey12: {
    fontFamily: fontFamily.light,
    fontSize: 12,
    color: colors.grey,
    marginTop: 10,
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
    paddingVertical: 8,
  },
  iconStyle: { height: 24, width: 24, marginHorizontal: 4 },
  actionsheetTextStyle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginHorizontal: Spacing.MARGIN_5,
  },
  bottomWrapper: {
    flex: 0.07,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Spacing.PADDING_10,
  }
});
export default styles;
