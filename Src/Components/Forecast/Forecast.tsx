import moment from "moment";
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Line, Line2, Right } from "../../../assets/svg";
import navigationStrings from "../../constants/navigationStrings";
import colors from "../../globalStyles/colors";
import Spacing from "../../globalStyles/Spacing";
import Shadow from "../Shadow/Shadow";
import WeatherImage from "../WeatherImage/WeatherImage";
import styles from "./style";



const Forecast = ({
  data,
  backgroundColor,
  title,
  weatherDegree,
  navigation,
  tab
}: any) => {


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
      <View key={item.dt} style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.dataContainer}>
          {backgroundColor ? (
            <Text style={styles.timeText}>
              {moment(new Date(item?.dt * 1000)).format("ddd")}
            </Text>
          ) : (
            <Text style={styles.timeText}>{time(item?.dt)?.strTime}</Text>
          )}
          {!backgroundColor ? (
            <Text style={[styles.tempText]}>
              {weatherDegree == "F"
                ? (parseInt(item?.temp) * 1.8 + 32)?.toFixed(0)
                : parseInt(item?.temp)?.toFixed(0)}
              &deg;
            </Text>
          ) : (
            <View style={styles.tempView}>
              <Text style={[styles.tempText, { color: colors.darkBlue }]}>
                {weatherDegree == "F"
                  ? (parseInt(item?.temp?.min) * 1.8 + 32)?.toFixed(0)
                  : item?.temp?.min?.toFixed(0)}
                &deg;
              </Text>
              <Text style={[styles.tempText, { color: colors.tempColor }]}>
                {weatherDegree == "F"
                  ? (parseInt(item?.temp?.max) * 1.8 + 32)?.toFixed(0)
                  : item?.temp?.max?.toFixed(0)}
                &deg;
              </Text>
            </View>
          )}
          <WeatherImage img={item?.weather[0]?.main} width={40} height={40} />
        </View>
        {backgroundColor ? <Line /> : <Line2 />}
      </View>
    );
  };

  return (
    <View
      style={
        backgroundColor
          ? {
              backgroundColor: backgroundColor ? colors.white : "transparent",
              borderRadius: 20,
              ...Shadow.shadowStyle,
            }
          : {
              backgroundColor: backgroundColor ? colors.white : "transparent",
              borderRadius: 20,
            }
      }
    >
      <TouchableOpacity
        style={{
          ...styles.cardContainer,
          backgroundColor: backgroundColor ? colors.darkBlue : "transparent",
          paddingHorizontal: backgroundColor ? Spacing.PADDING_15 : 0,
        }}
        onPress={backgroundColor?
        ()=>navigation.navigate(navigationStrings.WEEKLY,{tab:tab}):
        ()=>navigation.navigate(navigationStrings.HOURLY,{tab:tab})
        }
      >
        <Text style={styles.cardTitle}>{title}</Text>
        <Right />
      </TouchableOpacity>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item?.dt}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderItems(item)}
        />
      </View>
    </View>
  );
};

export default Forecast;
