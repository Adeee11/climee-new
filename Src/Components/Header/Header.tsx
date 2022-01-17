import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../../globalStyles/colors";
import styles from "./styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Spacing from "../../globalStyles/Spacing";

export default function Header(props: any) {
  const { title, backButton = true, onPress, tab = true } = props;
  return (
    <View style={styles.headerContainer}>
      {tab ? null : backButton ? (
        <TouchableOpacity
          onPress={onPress}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Ionicons name="arrow-back" size={30} color={colors.white} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <AntDesign name="search1" size={30} color={colors.white} />
        </TouchableOpacity>
      )}

      <Text
        style={[
          styles.headerText,
          {
            textAlign: backButton ? "center" : "left",
            flex: 0.95,
            marginLeft: backButton ? 0 : Spacing.MARGIN_20,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}
