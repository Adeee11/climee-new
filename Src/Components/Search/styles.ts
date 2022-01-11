import { Platform, StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: Spacing.PADDING_15,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInput: {
    width: "90%",
    fontSize: typography.FONT_SIZE_15,
    paddingVertical: Spacing.PADDING_15,
    // height: Platform.OS === 'ios' ?  Spacing.HEIGHT_28 : Spacing.HEIGHT_55,
    // backgroundColor: "red",
    textAlignVertical: "center",
    fontFamily: fontFamily.regular,
  },
  currentLocationContainer: {
    backgroundColor: "white",
    marginVertical: Spacing.MARGIN_5,
    padding: Spacing.PADDING_10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tempText: {
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_18,
    color: "#363B64",
    marginHorizontal: Spacing.MARGIN_10,
  },
  currentLocationText: {
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_14,
    color: "#363B64",
  },
  locationText: {
    color: "#9B9B9B",
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_12,
  },
  borderBottom: {
    borderBottomWidth: 0.3,
    alignSelf: "flex-end",
    borderColor: "#C4C4C4",
  },
  recentText: {
    color: "#9B9B9B",
    fontFamily: fontFamily.semiBold,
    fontSize: typography.FONT_SIZE_12,
  },
  recentContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Spacing.PADDING_10,
    paddingHorizontal: Spacing.PADDING_20,
    borderBottomWidth: 0.3,
    borderColor: "#C4C4C4",
  },
  recentSearchesContainer: {
    backgroundColor: "#fff",
    padding: Spacing.PADDING_10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomView1: {
    backgroundColor: "#fff",
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    // height: 200,
    padding: Spacing.PADDING_10,
    // alignItems: "flex-start",
    // position: "absolute",
  },
  searchTextWrapper: {
    borderBottomWidth: 0.7,
    padding: Spacing.PADDING_20,
    borderBottomColor: "#f5f5f5",
  },
  searchTextStyle: {
    color: colors.textColor,
    fontFamily: fontFamily.regular,
    fontSize: typography.FONT_SIZE_12,
  },
});

export default styles;
