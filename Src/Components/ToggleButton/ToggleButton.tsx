import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import styles from "./styles";

const ToggleButton = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}: any) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updatedSwitchData = (val: any) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(option1)}
        style={styles.button}
      >
        {getSelectionMode === option1 ? (
          <LinearGradient
            colors={[colors.darkBlue, colors.white]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              borderRadius: 15,
            }}
            end={{ x: 0.1, y: 1.8 }}
          />
        ) : null}
        <Text
          style={{
            fontFamily: fontFamily.regular,
            color:
              getSelectionMode == option1 ? colors.white : colors.grey,
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(option2)}
        style={styles.button}
      >
        {getSelectionMode === option2 ? (
          <LinearGradient
            colors={[colors.blueTheme, colors.white]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              borderRadius: 15,
            }}
            end={{ x: 0.1, y: 1.8 }}
          />
        ) : null}
        <Text
          style={{
            fontFamily: fontFamily.regular,
            color:
              getSelectionMode == option2 ? colors.white : colors.grey,
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
