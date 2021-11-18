import { StyleSheet } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const styles = StyleSheet.create({
mainContainer:{
    backgroundColor:colors.white,
    paddingHorizontal:Spacing.PADDING_16,
    paddingTop:Spacing.PADDING_24,
    borderRadius:Spacing.RADIUS_20,
    marginHorizontal:Spacing.MARGIN_16,
    marginBottom:Spacing.MARGIN_16
},
title:{
    fontFamily:fontFamily.semiBold,
    fontSize:typography.FONT_SIZE_16,
    color:colors.textColor
},
elementSection:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:Spacing.PADDING_15,
    // backgroundColor:"red"
}
})
export default styles;