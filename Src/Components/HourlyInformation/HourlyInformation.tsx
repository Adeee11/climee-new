import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import assets from "../../../assets";
import WeatherImage from "../WeatherImage/WeatherImage";
import styles from "./styles";
const HourlyInformation = (props: any) => {
  const { data, date, weatherDegree, windDegree } = props;

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

  const renderItems = (item: any) => {
    // console.log(item);

    return (
      <View style={styles.infoContainer}>
        <View
          style={{
            flex: 0.2,
            alignItems: "flex-start",
            // backgroundColor: "yellow",
          }}
        >
          <Text style={styles.timeText}>{time(item.dt)?.strTime}</Text>
        </View>
        {/* <Image
          style={{
            height: 23,
            width: 23,
          }}
          source={item.img}
          resizeMode="contain"
        /> */}
        <View
          style={{
            flex: 0.2,
            alignItems: "flex-start",
            // backgroundColor: "red",
          }}
        >
          <WeatherImage img={item?.weather[0]?.main} height={30} width={30} />
        </View>
        <View
          style={{
            flex: 0.5,
            // backgroundColor: "green",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={styles.tempText}>
            {weatherDegree == "F"
              ? (item.temp.toFixed(0) * 1.8 + 32)?.toFixed(0)
              : item.temp.toFixed(0)}
            &deg;
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={assets.windDirection}
              style={{
                width: 12,
                height: 12,
                marginHorizontal: 5,
                transform: [{ rotate: item?.wind_deg + "deg" }],
              }}
              resizeMode={"contain"}
            />
            <Text style={styles.timeText}>
              {windDegree == "mph"
                ? ((item.wind_speed / 3.6) * 2.237)?.toFixed(2)
                : (item.wind_speed / 3.6).toFixed(2)}{" "}
              {props.windDegree == "null" ? "m/s" : props.windDegree}
            </Text>
          </View>
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
