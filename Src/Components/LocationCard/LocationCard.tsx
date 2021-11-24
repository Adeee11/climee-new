import React from "react";
import { View, Image, Text } from "react-native";
import assets from "../../../assets";
import { Location } from "../../../assets/svg";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const LocationCard = ({ current, city, state, country }: any) => {
  return (
    <>
      <View style={styles.currentLocationContainer}>
        <Image
          source={assets.sunnyRainy}
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
            marginHorizontal: 10,
          }}
        />
        <Text
          style={[styles.tempText, { color: !current ? "#9B9B9B" : "#363B64" }]}
        >
          24&deg;
        </Text>
        <View
          style={{ alignItems: "flex-start", width: current ? "100%" : "57%" }}
        >
          {current ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Location height={18} width={18} />
              <Text style={styles.currentLocationText}>Current Location</Text>
            </View>
          ) : (
            <Text style={styles.currentLocationText}>{city}</Text>
          )}
          <Text style={styles.locationText}>
            {state}, {country}
          </Text>
        </View>
        {current ? null : <AntDesign name="star" size={24} color="#F5CA04" />}
      </View>
    </>
  );
};

export default LocationCard;
