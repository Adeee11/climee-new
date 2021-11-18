import React from "react";
import { Image, Text, View } from "react-native";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import Spacing from "../../globalStyles/Spacing";
import typography from "../../globalStyles/typography";

const AdditionalElements = (props: any) => {
  const { img, value, name } = props;
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        padding: Spacing.PADDING_2,
      }}
    >
      <Image
        source={img}
        style={{
          height: Spacing.HEIGHT_20,
          width: Spacing.WIDTH_20,
          tintColor: colors.textColor,
          marginBottom: Spacing.MARGIN_5,
        }}
        resizeMode={"contain"}
      />
      <Text
        style={{
          fontSize: typography.FONT_SIZE_14,
          fontFamily: fontFamily.regular,
          color: colors.textColor,
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          fontFamily: fontFamily.regular,
          fontSize: typography.FONT_SIZE_12,
          color: colors.grey,
        }}
      >
        {name}
      </Text>
    </View>
  );
};
export default AdditionalElements;
