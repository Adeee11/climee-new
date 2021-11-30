import moment from "moment";
import React from "react";
import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Line } from "../../../assets/svg";
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
  const [selected, setSelected] = useState<number>(0);
  const handleSelectedDay = (item: any) => {
    selectedDay(item);
  };

  const renderItems = (item: any) => {
    return (
      <>
        <View>
          <View style={styles.mainContainer}>
            <TouchableOpacity
              onPress={() => [setSelected(item?.dt), handleSelectedDay(item)]}
            >
              <View
                style={{
                  ...styles.dataContainer,
                  marginHorizontal: Spacing.MARGIN_2,
                }}
              >
                <Text style={styles.timeText}>
                  {moment(new Date(item?.dt * 1000)).format("ddd")}
                </Text>
                <View style={styles.tempView}>
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
                <WeatherImage
                  img={item?.weather[0]?.main}
                  height={40}
                  width={40}
                />
              </View>
            </TouchableOpacity>
            <Line />
          </View>
          {selected === item?.dt ? <View style={styles.selectedLine} /> : null}
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
        {selected === 0 ? (
          <View
            style={{
              ...styles.selectedLine,
              width: "20%",
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

export default DaysForecast;
