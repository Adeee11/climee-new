import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
const height = getStatusBarHeight(true);
export default StyleSheet.create({
  statusBar: {
    height: height,
  },
});
