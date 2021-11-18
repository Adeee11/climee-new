import React from "react";
import { View, Text } from "react-native";
import colors from "../../globalStyles/colors";
import styles from "./styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
export default function Header(props: any) {
  const { title, backButton = true } = props;
  return (
    <View style={styles.headerContainer}>
      {backButton ? (
        <Ionicons name="arrow-back" size={30} color={colors.white} />
      ) : (
        <AntDesign name="search1" size={30} color={colors.white} />
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}
