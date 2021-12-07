import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  locationContainer: {
    position: "absolute",
    top: 110,
    right: 20,
    left: 20,
    backgroundColor: colors.white,
    borderRadius: Spacing.RADIUS_20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: Spacing.PADDING_15,
  },
  streetText: {
    color: colors.purple,
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_14,
    width:"80%"
  },
  locationText: {
    color: colors.purple,
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_14,
  },
  tempContainer: {
    position: "absolute",
    top: 185,
    right: 50,
    left: 50,
    borderRadius: Spacing.RADIUS_20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Spacing.PADDING_20,
    paddingHorizontal: Spacing.PADDING_10,
  },
  tempText: {
    color: colors.white,
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_30,
    alignSelf: "center",
  },
  weatherText: {
    color: colors.white,
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_14,
    textTransform: "capitalize",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 25,
    right: 30,
    left: 30,
    padding: Spacing.PADDING_10,
    borderRadius: Spacing.RADIUS_20,
  },
  additionalDetailsContainer: {
    backgroundColor: colors.white,
  },
  seemoreText: {
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_13,
    marginRight: Spacing.MARGIN_10,
  },
  headerComponent: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.appBackground,
    borderTopLeftRadius: Spacing.RADIUS_10,
    borderTopRightRadius: Spacing.RADIUS_10,
  },
  subHeaderComponent: { borderBottomWidth: 3, width: "20%" },
  seemore: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
