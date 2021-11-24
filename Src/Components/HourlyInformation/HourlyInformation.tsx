import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import assets from "../../../assets";
import WeatherImage from "../WeatherImage/WeatherImage";
import styles from "./styles";
const HourlyInformation = (props: any) => {
  const { data,date } = props;

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
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.timeText}>{time(item.dt)?.strTime}</Text>
        {/* <Image
          style={{
            height: 23,
            width: 23,
          }}
          source={item.img}
          resizeMode="contain"
        /> */}
        <WeatherImage img={item?.weather[0]?.main} height={30} width={30}/>
        <Text style={styles.tempText}>{(item.temp).toFixed(0)}&deg;</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={assets.windDirection}
            style={{ width: 12, height: 12,marginHorizontal:5 }}
            resizeMode={"contain"}
          />
          <Text style={styles.timeText}>{item.wind_speed} km/h</Text>
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
