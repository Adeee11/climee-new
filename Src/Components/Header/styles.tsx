import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";
const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: "#7CA9FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: Spacing.PADDING_15
  },
  headerText: {
      fontSize: typography.FONT_SIZE_20,
      color: colors.white,
      fontFamily: fontFamily.regular,
      marginLeft: Spacing.MARGIN_20
  }
});
export default styles;