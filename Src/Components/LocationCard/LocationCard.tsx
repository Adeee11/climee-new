import React, {useEffect, useState} from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import assets from "../../../assets";
import { Location } from "../../../assets/svg";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

const LocationCard = ({
  current,
  city,
  street,
  country,
  removeLocation,
  latitude,
  longitude,
  showDetails
}: any) => {
  const [currentDetails, setCurrentDetails] = useState()

  const handleRemoveLocation = () => {
    const locationObject = {
      city: city,
      street: street,
      country: country,
      latitude: latitude,
      longitude: longitude
    };
    removeLocation(locationObject);
  };

  const handleDetails = () => {
    const locationObject = {
      city: city,
      street: street,
      country: country,
      latitude: latitude,
      longitude: longitude
    };
    showDetails(current ? currentDetails : locationObject)
  }

  useEffect(() => {
   (async () => {
     try {
       const data = await AsyncStorage.getItem("climeeCurrentLocation");
       setCurrentDetails(JSON.parse(data))
     } catch (err) {    
       console.log(err);
     }
   })()
  }, [current])

  return (
    <>
      <TouchableOpacity style={styles.currentLocationContainer} onPress={handleDetails}>
        <Image
          source={assets.sunnyRainy}
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
            marginHorizontal: 10,
          }} />
        <Text
          style={[styles.tempText, { color: !current ? "#9B9B9B" : "#363B64" }]}>
          24&deg;
        </Text>
        <View
          style={{ alignItems: "flex-start", width: current ? "100%" : "61%" }}>
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
              <Text style={styles.currentLocationText}>{street}</Text>
              <Text style={styles.locationText}>
                {city}, {country}
              </Text>
            </>
          )}
          {/* <Text style={styles.currentLocationText}>{street}</Text> */}
        </View>
        {current ? null : (
          <TouchableOpacity onPress={handleRemoveLocation}>
            <AntDesign name="star" size={24} color="#F5CA04" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </>
  );
};

export default LocationCard;
