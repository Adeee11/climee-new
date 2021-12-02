import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import assets from "../../../assets";
import { Location } from "../../../assets/svg";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import api from "../../globalStyles/api";
import weatherApi from "../../api/axios";
import WeatherImage from "../WeatherImage/WeatherImage";
import Loader from "../Loader";

const LocationCard = ({
  current,
  city,
  street,
  country,
  removeLocation,
  latitude,
  longitude,
  showDetails,
}: any) => {
  const [currentDetails, setCurrentDetails] = useState();
  const [temperature, setTemperature] = useState<number>(0);
  const [weatherMain, setWeatherMain] = useState();
  const [loading, setLoading] = useState(false);

  const handleRemoveLocation = () => {
    const locationObject = {
      city: city,
      street: street,
      country: country,
      latitude: latitude,
      longitude: longitude,
    };
    removeLocation(locationObject);
  };

  const handleDetails = () => {
    const locationObject = {
      city: city,
      street: street,
      country: country,
      latitude: latitude,
      longitude: longitude,
    };
    showDetails(current ? currentDetails : locationObject);
  };

  useEffect(() => {
    (async () => {
      try {
        const data: any = await AsyncStorage.getItem("climeeCurrentLocation");
        setCurrentDetails(JSON.parse(data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [current]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response: any = await weatherApi.get(
          `/weather?lat=${current ? currentDetails?.latitude : latitude}&lon=${
            current ? currentDetails?.longitude : longitude
          }&appid=${api}&units=metric`
        );
        setTemperature(response?.data?.main?.temp);
        setWeatherMain(response?.data?.weather[0]?.main);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [currentDetails?.latitude]);

  return (
    <>
      <TouchableOpacity
        style={styles.currentLocationContainer}
        onPress={handleDetails}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                paddingRight: 40,
                alignItems: "center",
              }}
            >
              <View style={{ marginHorizontal: 10 }}>
                <WeatherImage img={weatherMain} height={40} width={40} />
              </View>
              <Text
                style={[
                  styles.tempText,
                  { color: !current ? "#9B9B9B" : "#363B64" },
                ]}
              >
                {temperature?.toFixed(0)}&deg;
              </Text>
            </View>
          </>
        )}
        <View style={{ alignItems: "flex-start", flex: 0.7 }}>
          {current ? (
            <>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location height={18} width={18} />
                <Text style={styles.currentLocationText}>Current Location</Text>
              </View>
              <Text style={styles.locationText}>
                {currentDetails?.city}, {currentDetails?.country}
              </Text>
            </>
          ) : (
            <>
              {street === null ? null : (
                <Text style={styles.currentLocationText}>{street}</Text>
              )}
              <Text style={styles.locationText}>
                {city}, {country}
              </Text>
            </>
          )}
        </View>
        {current ? null : (
          <TouchableOpacity
            onPress={handleRemoveLocation}
            style={{ flex: 0.1 }}
          >
            <AntDesign name="star" size={24} color="#F5CA04" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </>
  );
};

export default LocationCard;
