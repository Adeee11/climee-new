import React, { useRef } from "react";
import { View, StatusBar} from "react-native";
import styles from "./styles";


const GeneralStatusBarColor = ({ backgroundColor, ...props }: any) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent={true} backgroundColor={backgroundColor} {...props} animated={true}/>
  </View>
);

export default GeneralStatusBarColor;
