import { StyleSheet } from "react-native";
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
        color: "#363B64",
        fontSize: typography.FONT_SIZE_14,
        fontFamily: fontFamily.regular
    },
    tempText: {
        color: "#fff",
        fontSize: typography.FONT_SIZE_15,
        fontFamily: fontFamily.semiBold,
    }
})
export default styles;