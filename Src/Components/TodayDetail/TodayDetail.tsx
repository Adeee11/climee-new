import React from "react";
import { View, Text, FlatList } from "react-native";
import { Dew, Humidity, Pressure, Sunrise, Sunset, UV, Wind } from "../../../assets/svg";

import styles from "./styles";

const TodayDetail = () => {
  const details = [
    { id: "1", icon: <Wind />, title: "Wind", value: "32 MPH" },
    { id: "2", icon: <Humidity />, title: "Humidity", value: "54 %" },
    { id: "3", icon: <Dew />, title: "Dew Point", value: `12 &deg;` },
    { id: "4", icon: <Pressure />, title: "Pressure", value: "1014 MB" },
    { id: "5", icon: <UV />, title: "UV Index", value: "3.86" },
    { id: "6", icon: <Sunrise />, title: "Sunrise", value: "6:00 AM" },
    { id: "7", icon: <Sunset />, title: "Sunset", value: "7:00 PM" },
  ];

  const renderItem = (item: any) => (
    <View>
     <View style={styles.detailContainer}>
            <View style={styles.detailLeftWrapper}>
              <View>{item.icon}</View>
            <Text style={styles.detailText}>{item.title}</Text>
            </View>
            <View>
                <Text style={styles.detailText}>{item.value}</Text>
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
            renderItem={({ item}) => renderItem(item)}
            />
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
