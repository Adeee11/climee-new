import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";
import Shadow from "../Shadow/Shadow";

const styles = StyleSheet.create({
  dateText: {
    fontSize: typography.FONT_SIZE_16,
    fontFamily: fontFamily.regular,
    color: colors.textColor,
  },
  headingView: {
    paddingHorizontal: Spacing.PADDING_16,
    paddingVertical: Spacing.PADDING_16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  mainContainer: {
    padding: Spacing.PADDING_16,
    backgroundColor: colors.white,
    borderTopWidth: 0.2,
    borderTopColor: colors.grey,
    ...Shadow.shadowStyle
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Spacing.PADDING_10,
    flex: 1,

  },
  timeText: {
    fontFamily: fontFamily.light,
    fontSize: typography.FONT_SIZE_14,
    color: colors.textColor,
  },
  tempText: {
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_16,
    color: colors.textColor,
  },
  subContainer: {
    flex: 0.2,
    alignItems: "flex-start",
  },
  tempView: {
    flex: 0.5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default styles;
