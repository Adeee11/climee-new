import { StyleSheet } from "react-native";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({

  currentLocationContainer: {
    backgroundColor: "white",
    padding: Spacing.PADDING_10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tempText: {
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_18,
    marginHorizontal: Spacing.MARGIN_10,
  },
  currentLocationText: {
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_14,
    color: "#363B64",
    marginLeft: Spacing.MARGIN_2
  },
  locationText: {
    color: "#9B9B9B",
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_12,
  },
});

export default styles;
