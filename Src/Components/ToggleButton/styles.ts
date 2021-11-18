import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import Spacing from "../../globalStyles/Spacing";

const styles = StyleSheet.create({
  mainContainer: {
    height: Spacing.HEIGHT_30,
    width: Spacing.WIDTH_100,
    backgroundColor: colors.toggleColor,
    borderRadius: Spacing.RADIUS_20,
    borderWidth: 1,
    borderColor: colors.toggleColor,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    borderRadius: Spacing.RADIUS_20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
