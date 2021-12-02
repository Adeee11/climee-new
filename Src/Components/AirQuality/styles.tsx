import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";
import Shadow from "../Shadow/Shadow";

const styles = StyleSheet.create({
  heading: {
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.PADDING_16,
  },
  headingText: {
    fontSize: typography.FONT_SIZE_14,
    color: colors.textColor,
    fontFamily: fontFamily.semiBold,
  },
  AirPollutionView: {
    backgroundColor: colors.white,
    borderRadius: Spacing.RADIUS_20,
    ...Shadow.shadowStyle,
  },
  pollutionHeading: {
    fontSize: typography.FONT_SIZE_16,
    color: colors.textColor,
    fontFamily: fontFamily.semiBold,
  },
  buttonText: {
    color: "white",
    fontSize: typography.FONT_SIZE_12,
    textAlign: "center",
    fontFamily: fontFamily.regular,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.darkBlue,
    padding: Spacing.PADDING_15,
    borderTopLeftRadius: Spacing.RADIUS_20,
    borderTopRightRadius: Spacing.RADIUS_20,
  },
  cardTitle: {
    fontSize: typography.FONT_SIZE_15,
    color: colors.white,
    fontFamily: fontFamily.semiBold,
  },
  headingView: {
    paddingHorizontal: Spacing.PADDING_16,
    paddingTop: Spacing.PADDING_16,
  },
  seeMoreButton: {
    marginVertical: Spacing.MARGIN_5,
    padding: Spacing.PADDING_10,
    backgroundColor: colors.darkBlue,
    width: "80%",
    borderRadius: Spacing.RADIUS_10,
  },
});
export default styles;
