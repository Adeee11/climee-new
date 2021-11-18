import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import assets from "../../../assets";
import styles from "./styles";
const HourlyInformation = (props: any) => {
  const { data,date } = props;
  const renderItems = (item: any) => {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.timeText}>{item.time}</Text>
        <Image
          style={{
            height: 23,
            width: 23,
          }}
          source={item.img}
          resizeMode="contain"
        />
        <Text style={styles.tempText}>{item.temp}&deg;</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={assets.windDirection}
            style={{ width: 12, height: 12,marginHorizontal:5 }}
            resizeMode={"contain"}
          />
          <Text style={styles.timeText}>{item.wind} km/h</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.headingView}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.mainContainer}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => renderItems(item)}
          bounces={false}
        />
      </View>
    </>
  );
};
export default HourlyInformation;
