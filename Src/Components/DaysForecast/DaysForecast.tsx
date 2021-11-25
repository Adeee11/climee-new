import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import assets from "../../../assets";
import { Line, Right } from "../../../assets/svg";
import colors from "../../globalStyles/colors";
import Spacing from "../../globalStyles/Spacing";
import WeatherImage from "../WeatherImage/WeatherImage";
import styles from "./styles";

const DaysForecast = ({
  data,
  backgroundColor,
  weatherDegree,
  selectedDay,
}: any) => {
  const [selected, setSelected] = useState<number>(0)

  const handleSelectedDay = (item: any) => {
    selectedDay(item);
  };

  const renderItems = (item: any) => {    
    return (
      <>
      <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => [setSelected(item?.dt), handleSelectedDay(item)]}>
          <View
            style={{
              ...styles.dataContainer,
              marginHorizontal: 2,
            }}
          >
            <Text style={styles.timeText}>
              {moment(new Date(item?.dt * 1000)).format("ddd")}
            </Text>
            <View
              style={{
                paddingVertical: Spacing.PADDING_10,
                alignItems: "center",
              }}
            >
              <Text style={[styles.tempText, { color: colors.darkBlue }]}>
                {weatherDegree == "F"
                  ? (parseInt(item?.temp?.max) * 1.8 + 32)?.toFixed(0)
                  : item?.temp?.max?.toFixed(0)}
                &deg;
              </Text>
              <Text style={[styles.tempText, { color: colors.blueTheme }]}>
                {weatherDegree == "F"
                  ? (parseInt(item?.temp?.min) * 1.8 + 32)?.toFixed(0)
                  : item?.temp?.min?.toFixed(0)}
                &deg;
              </Text>
            </View>
            <WeatherImage img={item?.weather[0]?.main} height={40} width={40} />
          </View>
        </TouchableOpacity>
        <Line />
      </View>
      {selected === item?.dt ?
      <View style={{ borderBottomWidth: 3, borderColor: '#3C6FD1', width: '100%' }} /> : null }
      </View>
      </>
    );
  };

  return (
    <View
      style={{
        backgroundColor: backgroundColor ? colors.white : "transparent",
      }}
    >
      <View>
        <FlatList
          data={data}
          extraData={selected}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => renderItems(item)}
        
          bounces={false}
        />
        {selected === 0 ? <View style={{ borderBottomWidth: 3, width: '20%', borderColor: '#3C6FD1'}} /> : null}
      </View>
    </View>
  );
};

export default DaysForecast;
