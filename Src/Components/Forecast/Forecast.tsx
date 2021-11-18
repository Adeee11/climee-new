import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { Line, Line2, Right } from "../../../assets/svg";
import colors from "../../globalStyles/colors";
import Spacing from "../../globalStyles/Spacing";
import styles from "./style";

const Forecast = ({ data, backgroundColor, title }: any) => {
  interface data {
    id: string;
    temp: string;
    time: string;
    img?: any;
    min: string;
    max: string;
  }

  const renderItems = (item: data) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={styles.dataContainer}>
        <Text style={styles.timeText}>{item.time}</Text>
        {item?.temp ? (
          <Text
            style={[
              styles.tempText,
              {
                paddingVertical: Spacing.PADDING_10,
              },
            ]}
          >
            {item.temp}&deg;
          </Text>
        ) : (
          <View
            style={{
              alignItems: "center",
              paddingVertical: Spacing.PADDING_10,
            }}
          >
            <Text style={[styles.tempText, { color: "#3C6FD1" }]}>
              {item.min}&deg;
            </Text>
            <Text style={[styles.tempText, { color: "#6D9CF5" }]}>
              {item.max}&deg;
            </Text>
          </View>
        )}
        <Image
          source={item.img}
          style={{ width: 40, height: 40, resizeMode: "contain" }}
        />
      </View>
      {backgroundColor ? <Line /> : <Line2 />}
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: backgroundColor ? colors.white : "transparent",
        borderRadius: 20,
      }}
    >
      <View
        style={[
          styles.titleContainer,
          {
            backgroundColor: backgroundColor ? "#3C6FD1" : "transparent",
            alignItems: backgroundColor ? "center" : "flex-end",
            paddingHorizontal: backgroundColor ? Spacing.PADDING_15 : 0,
          },
        ]}
      >
        <Text style={styles.titleStyle}>{title}</Text>
        <View style={{ marginBottom: 5 }}>
          <Right />
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => renderItems(item)}
        />
      </View>
    </View>
  );
};

export default Forecast;
