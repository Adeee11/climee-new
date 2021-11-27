import { Platform, StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: colors.white,
    flex: 1,
    padding: Spacing.PADDING_10,
  },
  mainContainer: {
    flex: 0.1,
    // paddingTop: Spacing.PADDING_8,
    marginHorizontal: Spacing.MARGIN_10,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  grey12: {
    marginLeft: Spacing.MARGIN_8,
    color: colors.grey,
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_10,
  },
  newsHeadingView: {
    flex: 0.2,
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: Spacing.MARGIN_10,
  },
  textColor20: {
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_16,
    color: colors.textColor,
    textAlign: "justify",
  },
  textColor14: {
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_12,
    color: colors.textColor,
    textAlign: "justify",
  },
  newsView: {
    flex: Platform.OS === "ios" ? 0.09 : 0.05,
    paddingHorizontal: Spacing.PADDING_25,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  imageWrapper: { flex: 0.55, alignItems: "center", justifyContent: "center" },
  headingStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 12,
    color: colors.textColor,
    textAlign: "left",
  },
  shareStyle: {
    fontFamily: fontFamily.light,
    fontSize: 14,
    color: colors.grey,
    textAlign: "left",
    marginLeft: Spacing.MARGIN_4,
  },
  bottomTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default styles;
