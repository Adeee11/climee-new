import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import {
  Dew,
  Humidity,
  Pressure,
  Right,
  Sunrise,
  Sunset,
  UV,
  Wind,
} from "../../../assets/svg";
import navigationStrings from "../../constants/navigationStrings";
import Spacing from "../../globalStyles/Spacing";
import styles from "./styles";

const TodayDetail = ({ weatherDetails, navigation, windDegree }: any) => {
  const details = [
    {
      id: "1",
      icon: <Wind width={18} height={18} />,
      title: "Wind",
    },
    {
      id: "2",
      icon: <Humidity width={18} height={18} />,
      title: "Humidity",
    },
    {
      id: "3",
      icon: <Dew width={18} height={18} />,
      title: "Dew Point",
    },
    {
      id: "4",
      icon: <Pressure width={18} height={18} />,
      title: "Pressure",
    },
 
  ];

  const time = (time: number) => {
    const date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes: number | string = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return { strTime };
  };

  const renderItem = (item: any) => (
    <View style={{ paddingHorizontal: Spacing.PADDING_20 }}>
      <View style={styles.detailContainer}>
        <View style={styles.detailLeftWrapper}>
          <View>{item.icon}</View>
          <Text style={styles.detailText}>{item.title}</Text>
        </View>
        <View>
          {item?.id === "1" ? (
            <Text style={styles.detailText}>
              {windDegree == "mph"
                ? (
                    weatherDetails[0]?.weatherDetails?.current?.wind_speed *
                    2.237
                  )?.toFixed(2)
                : weatherDetails[0]?.weatherDetails?.current?.wind_speed?.toFixed(
                    2
                  )}
            </Text>
          ) : item?.id === "2" ? (
            <Text style={styles.detailText}>
              {weatherDetails[0]?.weatherDetails?.current?.humidity}%
            </Text>
          ) : item?.id === "3" ? (
            <Text style={styles.detailText}>
              {weatherDetails[0]?.weatherDetails?.current?.dew_point}&deg;
            </Text>
          ) : item?.id === "4" ? (
            <Text style={styles.detailText}>
              {weatherDetails[0]?.weatherDetails?.current?.pressure} MB
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.headingContainer}> */}
      <TouchableOpacity
        style={{
          ...styles.cardContainer,
        }}
        onPress={() => navigation.navigate(navigationStrings.TODAYSDETAILS)}
      >
        <Text style={styles.cardTitle}>Today&apos;s Detail</Text>
        <Right />
      </TouchableOpacity>
      <View>
        <FlatList
          data={details}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </View>
  );
};

export default TodayDetail;
