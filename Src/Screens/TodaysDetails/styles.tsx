import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles= StyleSheet.create({
heading:{
    justifyContent:"center",
    alignItems:"center",
    padding:Spacing.PADDING_16
},
headingText:{
    fontSize:typography.FONT_SIZE_14,
    color:colors.textColor,
    fontFamily:fontFamily.semiBold
},
AirPollutionView:{
    padding:Spacing.PADDING_16,
    backgroundColor:colors.white,
    margin:Spacing.MARGIN_16,
    borderRadius:Spacing.RADIUS_20
},
pollutionHeading:{
    fontSize:typography.FONT_SIZE_16,
    color:colors.textColor,
    fontFamily:fontFamily.semiBold
},
buttonText: { 
    color: colors.white, 
    fontSize: typography.FONT_SIZE_12, 
    textAlign: "center", 
    fontFamily: fontFamily.regular 
  },
})
export default styles;