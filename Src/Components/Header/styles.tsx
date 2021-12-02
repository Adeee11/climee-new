import { Platform, StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  headerContainer: {
    height: Platform.OS === "ios" ? Spacing.HEIGHT_44 : Spacing.HEIGHT_55,
    backgroundColor: colors.darkBlue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: Spacing.PADDING_15,
  },
  headerText: {
    fontSize: typography.FONT_SIZE_18,
    color: colors.white,
    fontFamily: fontFamily.regular,
  },
});

export default styles;
