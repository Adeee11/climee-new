import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles= StyleSheet.create({
    dataContainer: {
        padding: Spacing.PADDING_20,
        // borderRightWidth: 1,
        alignItems: "center",
    },
    timeText: {
        color: colors.grey,
        fontSize: typography.FONT_SIZE_14,
        fontFamily: fontFamily.regular
    },
    tempText: {
        color: "#fff",
        fontSize: typography.FONT_SIZE_15,
        fontFamily: fontFamily.regular,
    }
})
export default styles;