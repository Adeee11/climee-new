import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import assets from "../../../assets";
import { Location, Rectangle } from "../../../assets/svg";
import AdditionalDetails from "../../Components/AdditionalDetails/AdditionalDetails";
import AirQuality from "../../Components/AirQuality/AirQuality";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import ShowMap from "../../Components/ShowMap/ShowMap";
import Spacing from "../../globalStyles/Spacing";
import styles from "./styles";

const NearBy = (navigation:any) => {
  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={"#7CA9FF"}
      />
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <Header title={"Nearby"} />
        <ShowMap
          latitude={30.7046}
          longitude={76.7179}
          // updatedCoordinates={getCoordinates}
        />

        {/* Location container */}
        <View style={styles.locationContainer}>
          <Location height={35} width={35} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.streetText}>Franco Road</Text>
            <Text style={styles.locationText}>
              Sahibzada Ajit Singh Nagar, India
            </Text>
          </View>
        </View>

        {/* Temperature Container */}
        <View style={styles.tempContainer}>
          <LinearGradient
            colors={["#3C6FD1", "#7CA9FF"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              flex: 0,
              borderRadius: 20,
            }}
            end={{ x: 0.5, y: 1.2 }}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.tempText}>24&deg;</Text>
            <Text style={styles.weatherText}>Sunny</Text>
          </View>
          <Image
            source={assets.sunny}
            style={{ height: 70, width: 70, resizeMode: "contain" }}
          />
        </View>

        {/* Additionals details */}
        <View style={styles.bottomContainer}>
          <View style={{ alignSelf: "center", paddingVertical: 20 }}>
            <Rectangle />
          </View>
          {/* Additional details container */}
          <ScrollView>
          <AdditionalDetails />
          <View style={{margin:Spacing.MARGIN_16}}>
          <AirQuality navigation={navigation}/>
          </View>
          
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};
export default NearBy;
