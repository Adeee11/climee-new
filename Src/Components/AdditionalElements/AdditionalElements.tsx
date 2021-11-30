import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const AdditionalElements = (props: any) => {
  const { img, value, name } = props;
  return (
    <View style={styles.mainContainer}>
      <Image source={img} style={styles.image} resizeMode={"contain"} />
      <Text style={styles.valueText}>{value}</Text>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};

export default AdditionalElements;
