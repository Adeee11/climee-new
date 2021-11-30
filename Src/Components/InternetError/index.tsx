import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import typography from "../../globalStyles/typography";
import Spacing from "../../globalStyles/Spacing";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";

const InternetError = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Feather name="wifi-off" size={100} color={colors.textColor} />
        <Text
          style={{
            fontSize: typography.FONT_SIZE_15,
            fontFamily: fontFamily.semiBold,
            marginTop: Spacing.MARGIN_20,
          }}
        >
          No network connection
        </Text>
        <Text
          style={{
            width: "80%",
            textAlign: "center",
            fontFamily: fontFamily.regular,
          }}
        >
          No internet connection. Please connect to the internet and try again.
        </Text>
      </View>
    </>
  );
};

export default InternetError;
