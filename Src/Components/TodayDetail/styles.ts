import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: Spacing.PADDING_20,
    borderRadius: 20
},
headingContainer: {
    height: 25,
},
headingText: {
    color: "#363B64",
    fontSize: typography.FONT_SIZE_14,
    fontFamily: fontFamily.semiBold,
},
detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderBottomColor: 'rgba(124, 169, 255, 0.12)'
  },
  detailLeftWrapper: { 
      flexDirection: "row", 
      alignItems: "center" 
  },
  detailText: {
    color: "#363B64",
    paddingLeft: Spacing.PADDING_10,
    fontSize: typography.FONT_SIZE_13,
    fontFamily: fontFamily.regular,
  },
});

export default styles;
