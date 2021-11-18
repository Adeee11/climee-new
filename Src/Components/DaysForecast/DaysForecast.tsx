import React from "react";
import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Right } from "../../../assets/svg";
import colors from "../../globalStyles/colors";
import Spacing from "../../globalStyles/Spacing";
import styles from "./styles";

const DaysForecast = ({ data, backgroundColor }: any) => {
  interface data {
    id: string;
    temp: string;
    time: string;
    img?: any;
    min: string;
    max: string;
  }
  const renderItems = (item: data) => (
    <TouchableOpacity>
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
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        backgroundColor: backgroundColor ? colors.white : "transparent",
        // borderRadius: 20,
      }}
    >
      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => renderItems(item)}
          bounces={false}
        />
      </View>
    </View>
  );
};

export default DaysForecast;
