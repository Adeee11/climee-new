import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";
import Shadow from "../Shadow/Shadow";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // paddingTop: Spacing.PADDING_20,
    // paddingHorizontal: Spacing.PADDING_20,
    borderRadius: 20,
    ...Shadow.shadowStyle
  },
  headingContainer: {
    height: Spacing.HEIGHT_40,
    justifyContent: "center"
  },
  headingText: {
    color: "#363B64",
    fontSize: typography.FONT_SIZE_15,
    fontFamily: fontFamily.semiBold,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: Spacing.PADDING_20,
    borderBottomColor: "rgba(124, 169, 255, 0.12)",
  },
  detailLeftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    color: "#363B64",
    paddingLeft: Spacing.PADDING_10,
    fontSize: typography.FONT_SIZE_13,
    fontFamily: fontFamily.regular,
  },
  buttonText: { 
    color: "white", 
    fontSize: typography.FONT_SIZE_12, 
    textAlign: "center", 
    fontFamily: fontFamily.regular 
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.darkBlue,
    padding: Spacing.PADDING_15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardTitle: {
    fontSize: typography.FONT_SIZE_15,
    color: colors.white,
    fontFamily: fontFamily.semiBold
  },
});

export default styles;
