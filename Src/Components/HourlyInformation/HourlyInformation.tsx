import React from "react";
import { Image, Text, View } from "react-native";
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
    const strTime = hours + ":" + minutes + " " + ampm;
    return { strTime };
  };

  const renderItems = (item: any) => {
    return (
      <View key={item?.id} style={styles.infoContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.timeText}>{time(item.dt)?.strTime}</Text>
        </View>
        <View style={styles.subContainerImage}>
          <WeatherImage img={item?.weather[0]?.main} height={30} width={30} />
        </View>
        <View style={styles.tempView}>
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.tempText}>
              {weatherDegree == "F"
                ? (item.temp.toFixed(0) * 1.8 + 32)?.toFixed(0)
                : item.temp.toFixed(0)}
              &deg;
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              flex: 0.5,
            }}
          >
            {/* <Image
              source={assets.windDirection}
              style={{
                width: 12,
                height: 12,
                marginHorizontal: 5,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transform: [{ rotate: item?.wind_deg + "deg" }],
              }}
              resizeMode={"contain"}
            /> */}
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
        <View style={styles.infoContainer}>
          <View style={styles.subContainer}>
            <Text style={{ ...styles.timeText, fontSize: 12 }}>Time</Text>
          </View>
          <View style={styles.subContainerImage}>
            <Text style={{ ...styles.timeText, fontSize: 12 }}>Feels like</Text>
          </View>
          <View style={styles.tempView}>
            <View
              style={{
                flex: 0.7,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text style={{ ...styles.timeText, fontSize: 12 }}>
                Temperature
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                // backgroundColor: "red",
                flex: 0.5,
              }}
            >
              {/* <Text
                style={{
                  marginHorizontal: 5,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  ...styles.timeText,
                  fontSize: 12,
                }}
              >
                Direction
              </Text> */}
              <Text style={{ ...styles.timeText, fontSize: 12 }}>
                Wind Speed
              </Text>
            </View>
          </View>
        </View>
        {data?.map((item: any, index: number) => renderItems(item))}
      </View>
    </>
  );
};

export default HourlyInformation;
