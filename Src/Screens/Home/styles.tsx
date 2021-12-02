import { StyleSheet } from "react-native";
import Shadow from "../../Components/Shadow/Shadow";
import { deviceHeight } from "../../constants/dimensions";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";
const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: colors.blueTheme,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: Spacing.PADDING_15,
  },
  headerText: {
    fontSize: typography.FONT_SIZE_16,
    color: colors.white,
    fontFamily: fontFamily.regular,
    marginLeft: Spacing.MARGIN_20,
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
  newsHeadline: {
    fontSize: typography.FONT_SIZE_13,
    color: colors.textColor,
    fontFamily: fontFamily.regular,
  },
  newsContainer: {
    paddingHorizontal: Spacing.PADDING_20,
    ...Shadow.shadowStyle,
  },
  imgContainer: {
    height: deviceHeight / 5,
    borderBottomLeftRadius: Spacing.RADIUS_20,
    borderBottomRightRadius: Spacing.RADIUS_20,
  },
  newsImg: { width: "100%", height: "100%", resizeMode: "cover" },
  newsTtile: {
    padding: Spacing.PADDING_20,
    backgroundColor: colors.white,
    borderBottomRightRadius: Spacing.RADIUS_20,
    borderBottomLeftRadius: Spacing.RADIUS_20,
    ...Shadow.shadowStyle,
  },
  mainContainer: { flex: 1, backgroundColor: colors.appBackground },
  componentStyle: {
    marginBottom: Spacing.MARGIN_20,
    marginHorizontal: Spacing.MARGIN_20,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
});
export default styles;
