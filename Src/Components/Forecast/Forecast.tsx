import moment from "moment";
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import assets from "../../../assets";
import { Line, Line2, Right } from "../../../assets/svg";
import navigationStrings from "../../constants/navigationStrings";
import colors from "../../globalStyles/colors";
import Spacing from "../../globalStyles/Spacing";
import WeatherImage from "../WeatherImage/WeatherImage";
import styles from "./style";

const Forecast = ({
  data,
  backgroundColor,
  title,
  weatherDegree,
  navigation,
}: any) => {

  interface data {
    id: string;
    temp: string;
    dt: number;
    img?: any;
    min?: number;
    max: number;
  }
  
  const time = (time: number) => {
    const date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes: number | string = date?.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + " " + ampm;
    return { strTime };
  };

  const renderItems = (item: data) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.dataContainer}>
          {backgroundColor ? (
            <Text style={[styles.timeText, { color: "#C4C4C4" }]}>
              {moment(new Date(item?.dt * 1000)).format("ddd")}
            </Text>
          ) : (
            <Text style={styles.timeText}>{time(item?.dt)?.strTime}</Text>
          )}
          {!backgroundColor ? (
            <Text
              style={[
                styles.tempText,
                {
                  paddingVertical: Spacing.PADDING_10,
                },
              ]}
            >
              {weatherDegree == "F"
                ? (parseInt(item?.temp) * 1.8 + 32)?.toFixed(0)
                : parseInt(item?.temp)?.toFixed(0)}
              &deg;
            </Text>
          ) : (
            <View
              style={{
                alignItems: "center",
                paddingVertical: Spacing.PADDING_10,
              }}
            >
              <Text style={[styles.tempText, { color: "#3C6FD1" }]}>
                {weatherDegree == "F"
                  ? (parseInt(item?.temp?.min) * 1.8 + 32)?.toFixed(0)
                  : item?.temp?.min?.toFixed(0)}
                &deg;
              </Text>
              <Text style={[styles.tempText, { color: "#6D9CF5" }]}>
                {weatherDegree == "F"
                  ? (parseInt(item?.temp?.max) * 1.8 + 32)?.toFixed(0)
                  : item?.temp?.max?.toFixed(0)}
                &deg;
              </Text>
            </View>
          )}
          {/* <Image
            source={showImage(item?.weather[0]?.main)?.img}
            style={{ width: 40, height: 40, resizeMode: "contain" }}
          /> */}
          <WeatherImage img={item?.weather[0]?.main} width={40} height={40} />
        </View>
        {backgroundColor ? <Line /> : <Line2 />}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: backgroundColor ? colors.white : "transparent",
        borderRadius: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate(navigationStrings.HOURLY)}
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
      </TouchableOpacity>
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
