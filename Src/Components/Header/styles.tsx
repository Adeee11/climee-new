import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";
const styles = StyleSheet.create({
  headerContainer: {
    height: Spacing.HEIGHT_48,
    backgroundColor:"#3C6FD1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: Spacing.PADDING_15,
    // backgroundColor: 'red'
  },
  headerText: {
      fontSize: typography.FONT_SIZE_18,
      color: colors.white,
      fontFamily: fontFamily.regular,
      marginLeft: Spacing.MARGIN_20,
      marginTop:Spacing.MARGIN_4
  }
});
export default styles;