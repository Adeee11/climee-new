import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import assets from "../../../assets";
import { Line, Right } from "../../../assets/svg";
import colors from "../../globalStyles/colors";
import Spacing from "../../globalStyles/Spacing";
import styles from "./styles";

const DaysForecast = ({ data, backgroundColor,weatherDegree }: any) => {
 
  const selectedDay = (index: string) => {
    let val = data.map((val: any) => {
      if (val.id == index) {
        return val.selected = true;
        // console.log(val.selected+"s"+val.time);
      } else {
       return val.selected = false;
      }
    });
  };
  const showImage = (item: string) => {
    return item === "Thunderstorm"
      ? { img: assets.thunder }
      : item === "Drizzle"
      ? { img: assets.sunnyRainy }
      : item === "Rain"
      ? { img: assets.rainy }
      : item === "Snow"
      ? { img: assets.snow }
      : item === "Atmosphere"
      ? { img: assets.haze }
      : item === "Haze"
      ? { img: assets.haze }
      : item === "Clear"
      ? { img: assets.sunny }
      : item === "Clouds"
      ? { img: assets.cloudy }
      : { img: assets.partlyCloudy };
  };

  useEffect(() => {
    console.log(data);
    
  }, [data]);
  const renderItems = (item: any) =>{
    // console.log(item.index);
    
    return(
      <View style={{ flexDirection: "row", alignItems: "center" }}>
    <TouchableOpacity onPress={()=>selectedDay(item.id)}>
      <View
        style={{
          ...styles.dataContainer,
          marginHorizontal: 2,
          // backgroundColor: "red",
          borderBottomColor: colors.blueTheme,
          borderBottomWidth:  0,
        }}
      >
        <Text style={styles.timeText}>{moment(new Date(item?.dt * 1000)).format("ddd")}</Text>
        {/* {item?.temp ? (
          <Text
            style={[
              styles.tempText,
              {
                paddingVertical: Spacing.PADDING_10,
              },
            ]}
          >
             {item?.temp?.day}&deg;
          </Text>
        ) : ( */}
          <View
            style={{
              paddingVertical: Spacing.PADDING_10,
              alignItems:"center",
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
        {/* )} */}
        <Image
          source={showImage(item?.weather[0]?.main)?.img}
          style={{ width: 40, height: 40, resizeMode: "contain" }}
        />
        
      </View>
     
    </TouchableOpacity>
    <Line/>
    </View>
  );}

  return (
    <View
      style={{
        backgroundColor: backgroundColor ? colors.white : "transparent",
        // borderRadius: 20,
      }}
    >
      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => renderItems(item)}
          bounces={false}
        />
      </View>
    </View>
  );
};

export default DaysForecast;
