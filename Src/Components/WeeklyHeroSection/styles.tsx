import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";
import Shadow from "../Shadow/Shadow";

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 15,
    margin: Spacing.MARGIN_16,
    ...Shadow.shadowStyle
  },
  upperView: {
    flex: 0.6,
    alignItems: "flex-start",
  },
  DayText: {
    color: "white",
    fontSize: typography.FONT_SIZE_16,
    fontFamily: fontFamily.semiBold,
  },
  weatherTypeText: {
    color: "white",
    fontSize: typography.FONT_SIZE_20,
    fontFamily: fontFamily.semiBold,
    textTransform: 'capitalize'
  },
  dateText: {
    color: "white",
    fontSize: typography.FONT_SIZE_16,
    fontFamily: fontFamily.regular,
  },
  tempText: {
    color: colors.white,
    fontSize: typography.FONT_SIZE_20,
    fontFamily: fontFamily.semiBold,
  },
  minmaxContainer: {
    flexDirection: "row",
  },
  lowerView: {
    marginTop: 10,
  },
  imageContainer: { flex: 0.4, alignItems: "center" },
});
export default styles;
