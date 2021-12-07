import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Dew, Humidity, Pressure, Right, Wind } from "../../../assets/svg";
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

  const renderItem = (item: any, index: string) => (
    <View key={index} style={{ paddingHorizontal: Spacing.PADDING_20 }}>
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
                  )}{" "}
              {windDegree == "null" ? "m/s" : windDegree}
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
      <View>{details.map((item, index) => renderItem(item, item.id))}</View>
    </View>
  );
};

export default TodayDetail;
