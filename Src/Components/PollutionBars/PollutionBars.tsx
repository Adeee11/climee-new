import React from "react";
import { Text, View } from "react-native";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./styles";
const PollutionBars = (props: any) => {
  const { name1, value, name2,highest } = props;
  const cond = (item: any) => {
    return item < 20
      ? { condition:"Good" }
      : item < 40
      ?  { condition:"Satisfactory" }
      : item < 60
      ?  { condition:"Lightly Polluted" }
      : item < 80
      ?  { condition:"Moderately Polluted" }
      : item < 100
      ?  { condition:"Heavily Polluted" }
      :  { condition:"No Data Available" }
  };
  return (
    <View style={styles.mainContainer}>
      <ProgressBar val={value>100?((value/highest)*100).toFixed(1):value} perc={value>100?true:false}/>
      <View style={{ paddingHorizontal: Spacing.PADDING_20 }}>
        <Text style={styles.pollutionHeading}>
          {name1}
          <Text style={styles.pollutionSubHeading}> {name2}</Text>
        </Text>
        <Text style={styles.headingText}>
          {cond(value>100?((value/highest)*100).toFixed(1):value).condition}
        </Text>
        <Text style={{ ...styles.headingText, fontFamily: fontFamily.regular }}>
          {value + " μg/m3 "}
        </Text>
      </View>
    </View>
  );
};
export default PollutionBars;
