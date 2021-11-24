import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  locationContainer: {
    position: "absolute",
    top: 50,
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
      color: '#363B64',
      fontFamily: fontFamily.semiBold,
      fontSize: typography.FONT_SIZE_14
  },
  locationText: {
    color: '#363B64',
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_14
  },
  tempContainer: {
    position: "absolute",
    top: 125,
    right: 100,
    left: 100,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
    paddingVertical: Spacing.PADDING_15,
    paddingHorizontal: Spacing.PADDING_32
  },
  tempText: {
      color: colors.white,
      fontFamily: fontFamily.semiBold,
      fontSize: typography.FONT_SIZE_22
  },
  weatherText: {
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_16
  },
  bottomContainer: {
    backgroundColor: "#f5f5f5",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
},
  additionalDetailsContainer: {
      backgroundColor: "#fff",

  }
});

export default styles;
