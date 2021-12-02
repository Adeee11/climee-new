import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    borderRadius: Spacing.RADIUS_20,
    margin: Spacing.MARGIN_16,
    padding: Spacing.PADDING_16,
  },
  pollutionHeading: {
    fontSize: typography.FONT_SIZE_16,
    color: colors.textColor,
    fontFamily: fontFamily.semiBold,
  },
  subContainer: {
    padding: Spacing.PADDING_8,
  },
});
export default styles;
