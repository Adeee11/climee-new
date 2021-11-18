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
      fontSize: typography.FONT_SIZE_16,
      color: colors.white,
      fontFamily: fontFamily.regular,
      marginLeft: Spacing.MARGIN_20
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3C6FD1",
    padding: Spacing.PADDING_15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardTitle: {
    fontSize: typography.FONT_SIZE_15,
    color: colors.white,
    fontFamily: fontFamily.semiBold
  },
  newsHeadline: {
    fontSize: typography.FONT_SIZE_13,
    color: '#363B64',
    fontFamily: fontFamily.regular
  }
});
export default styles;