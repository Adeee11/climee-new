import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: typography.FONT_SIZE_30,
  },
  text2: {
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_15,
    paddingHorizontal: Spacing.PADDING_48,
  },
  image: {
    resizeMode: "contain",
    width: 250,
    height: 250,
  },
  imageStyle: {
    resizeMode: "contain",
    backgroundColor: colors.white,
  },
  imageWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default styles;
