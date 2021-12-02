import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
    mainContainer: {
      alignItems: "center",
      justifyContent: "space-between",
      padding: Spacing.PADDING_2,
    },
    image: {
      height: Spacing.HEIGHT_20,
      width: Spacing.WIDTH_20,
      tintColor: colors.textColor,
      marginBottom: Spacing.MARGIN_5,
    },
    valueText: {
      fontSize: typography.FONT_SIZE_14,
      fontFamily: fontFamily.regular,
      color: colors.textColor,
    },
    nameText: {
      fontFamily: fontFamily.regular,
      fontSize: typography.FONT_SIZE_12,
      color: colors.grey,
    },
  });
  export default styles;