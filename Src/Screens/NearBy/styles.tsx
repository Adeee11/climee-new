import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  locationContainer: {
    position: "absolute",
    top: 80,
    right: 20,
    left: 20,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: Spacing.PADDING_15,
  },
  streetText: {
    color: "#363B64",
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_14,
  },
  locationText: {
    color: "#363B64",
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_14,
  },
  tempContainer: {
    position: "absolute",
    top: 155,
    right: 90,
    left: 90,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
    paddingVertical: Spacing.PADDING_20,
    paddingHorizontal: Spacing.PADDING_10
  },
  tempText: {
    color: colors.white,
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_24,
    alignSelf: 'center'
  },
  weatherText: {
    color: colors.white,
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_14,
    textTransform: 'capitalize'
  },
  bottomContainer: {
    position: "absolute",
    bottom: 25,
    right: 30,
    left: 30,
    padding: Spacing.PADDING_10,
    borderRadius: 20,
  },
  additionalDetailsContainer: {
    backgroundColor: "#fff",
  },
  seemoreText: {
    color: "white",
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_13,
    marginRight: Spacing.MARGIN_10,
  },
});

export default styles;
