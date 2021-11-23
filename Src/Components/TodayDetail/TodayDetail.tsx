import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import {
  Dew,
  Humidity,
  Pressure,
  Sunrise,
  Sunset,
  UV,
  Wind,
} from "../../../assets/svg";
import styles from "./styles";

const TodayDetail = ({ weatherDetails }: any) => {
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
    {
      id: "5",
      icon: <UV width={18} height={18} />,
      title: "UV Index",
    },
    {
      id: "6",
      icon: <Sunrise width={18} height={18} />,
      title: "Sunrise",
    },
    {
      id: "7",
      icon: <Sunset width={18} height={18} />,
      title: "Sunset",
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
    <View>
      <View style={styles.detailContainer}>
        <View style={styles.detailLeftWrapper}>
          <View>{item.icon}</View>
          <Text style={styles.detailText}>{item.title}</Text>
        </View>
        <View>
          {item?.id === "1" ? (
            <Text style={styles.detailText}>
              {weatherDetails[0]?.weatherDetails?.current?.wind_speed}
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
          ) : item?.id === "5" ? (
            <Text style={styles.detailText}>
              {weatherDetails[0]?.weatherDetails?.current?.uvi}
            </Text>
          ) : item?.id === "6" ? (
            <Text style={styles.detailText}>
              {
                time(weatherDetails[0]?.weatherDetails?.current?.sunrise)
                  ?.strTime
              }
            </Text>
          ) : item?.id === "7" ? (
            <Text style={styles.detailText}>
              {
                time(weatherDetails[0]?.weatherDetails?.current?.sunset)
                  ?.strTime
              }
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Today&apos;s Detail</Text>
      </View>
      <View>
        <FlatList
          data={details}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem(item)}
        />
        <TouchableOpacity
          style={{
            marginVertical: 20,
            alignSelf: "center",
            padding: 10,
            backgroundColor: "#3C6FD1",
            width: "30%",
            borderRadius: 10,
          }}
        >
          <Text style={styles.buttonText}>See More</Text>
        </TouchableOpacity>
        {/* <View style={styles.detailContainer}>
            <View style={styles.detailLeftWrapper}>
              <Wind height={15} width={15}/>
            <Text style={styles.detailText}>Wind</Text>
            </View>
            <View>
                <Text style={styles.detailText}>3 MPH</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.detailLeftWrapper}>
              <Humidity height={15} width={15}/>
            <Text style={styles.detailText}>Humidity</Text>
            </View>
            <View>
                <Text style={styles.detailText}>54 %</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.detailLeftWrapper}>
              <Dew height={15} width={15}/>
            <Text style={styles.detailText}>Dew Point</Text>
            </View>
            <View>
                <Text style={styles.detailText}>12 &deg;</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.detailLeftWrapper}>
              <Pressure height={15} width={15}/>
            <Text style={styles.detailText}>Pressure</Text>
            </View>
            <View>
                <Text style={styles.detailText}>1014 MB</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.detailLeftWrapper}>
              <UV height={15} width={15}/>
            <Text style={styles.detailText}>UV Index</Text>
            </View>
            <View>
                <Text style={styles.detailText}>3.86</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.detailLeftWrapper}>
              <Sunrise height={15} width={15}/>
            <Text style={styles.detailText}>Sunrise</Text>
            </View>
            <View>
                <Text style={styles.detailText}>6:00 AM</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.detailLeftWrapper}>
              <Sunset />
            <Text style={styles.detailText}>Sunset</Text>
            </View>
            <View>
                <Text style={styles.detailText}>7:00 PM</Text>
            </View>
          </View> */}
      </View>
    </View>
  );
};

export default TodayDetail;
