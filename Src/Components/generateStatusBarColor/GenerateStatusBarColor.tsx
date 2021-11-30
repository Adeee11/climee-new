import React from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles";

const GeneralStatusBarColor = ({ backgroundColor, ...props }: any) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar
      translucent={false}
      backgroundColor={backgroundColor}
      {...props}
      animated={true}
    />
  </View>
);

export default GeneralStatusBarColor;
