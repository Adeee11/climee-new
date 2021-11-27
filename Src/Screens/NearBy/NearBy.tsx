import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import * as location from "expo-location";
import { Location, SeeMoreArrow } from "../../../assets/svg";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import ShowMap from "../../Components/ShowMap/ShowMap";
import axios from "../../api/axios";
import styles from "./styles";
import api from "../../globalStyles/api";
import WeatherImage from "../../Components/WeatherImage/WeatherImage";

const NearBy = ({ weatherDetails, navigation }: any) => {
  const [changedDeviceHeight, setChangedDeviceHeight] = useState<number>(300);
  const [height2] = useState(new Animated.Value(300));
  const [deviceHeight] = useState(Dimensions.get("window").height);
  const [coordinates, setCoordinates] = useState<any>({
    latitude: weatherDetails[0]?.locationDetails?.latitude,
    longitude: weatherDetails[0]?.locationDetails?.longitude,
  });
  const [weather, setWeather] = useState<any>([]);
  const [currLocation, setCurrLocation] = useState({
    street: "",
    city: "",
    country: "",
  });

  // useEffect(() => {
  //   panResponder;
  // }, []);

  const getCoordinates = (val: any) => {
    setCoordinates(val);
  };

  // const panResponder = PanResponder.create({
  //   onMoveShouldSetPanResponderCapture: () => true,
  //   onMoveShouldSetPanResponder: () => true,

  //   onPanResponderMove: (e, gestureState) => {
  //     gestureState.moveY < deviceHeight - changedDeviceHeight
  //       ? Animated.timing(height2, {
  //           toValue: deviceHeight - 480,
  //           duration: 1000,
  //           useNativeDriver: false,
  //         }).start(() => setChangedDeviceHeight(500))
  //       : Animated.timing(height2, {
  //           toValue: 300,
  //           duration: 1000,
  //           useNativeDriver: false,
  //         }).start(() => setChangedDeviceHeight(300));
  //   },
  // });

  useEffect(() => {
    (async () => {
      try {
        // setLoading(true);
        const result: any = await axios.get(
          `/onecall?lat=${coordinates?.latitude}&lon=${coordinates?.longitude}&appid=${api}&units=metric`
        );

        setWeather(result?.data);
        const r: any = await location.reverseGeocodeAsync({
          latitude: coordinates?.latitude,
          longitude: coordinates?.longitude,
        });
        setCurrLocation({
          street: r[0]?.street,
          city: r[0]?.city,
          country: r[0]?.country,
        });
        // setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [coordinates]);

  useEffect(() => {
    (async () => {
      try {
        // setLoading(true);
        const response: any = await axios.get(
          `/air_pollution?lat=${coordinates?.latitude}&lon=${coordinates?.longitude}&appid=${api}`
        );
        console.log("pollution", response?.data);

        // setAirQuality(response?.data?.list[0]?.components?.pm2_5);
        // setCondition(response?.data?.list[0]?.main?.aqi);
        // setLoading(false);
      } catch (Err) {
        console.log(Err);

        // setError(true);
        // setTimeout(() => {
        //   setError(false);
        // }, 2000);
      }
    })();
  }, [coordinates]);

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={"#7CA9FF"}
      />
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <Header title={"Nearby"} />
        <ShowMap
          latitude={weatherDetails[0]?.locationDetails?.latitude}
          longitude={weatherDetails[0]?.locationDetails?.longitude}
          updatedCoordinates={getCoordinates}
        />

        {/* Location container */}
        <View style={styles.locationContainer}>
          <Location height={35} width={35} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.streetText}>{currLocation?.street}</Text>
            <Text style={styles.locationText}>
              {currLocation?.city}, {currLocation?.country}
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
          <View style={{ alignItems: "flex-start", flex: 0.7, }}>
            <Text style={styles.tempText}>{parseInt(weather?.current?.temp)}&deg;</Text>
            <Text style={styles.weatherText}>
              {weather?.current?.weather[0]?.description}
            </Text>
          </View>
          <View style={{flex: 0.3, alignItems: "center"}}>
          <WeatherImage
            img={weather?.current?.weather[0]?.main}
            height={70}
            width={70}
          />
          </View>
        </View>

        {/* Additionals details */}
        {/* <Animated.View
          {...panResponder.panHandlers}
          style={[styles.bottomContainer, { height: height2 }]}
        >
          <View style={{ alignSelf: "center", paddingVertical: 20 }}>
            <Rectangle />
          </View>

          {/* Additional details container */}
          {/* <ScrollView bounces={false} showsVerticalScrollIndicator={false}> */}
            {/* <AdditionalDetails details={weather?.current} /> */}
            {/* <View style={{ margin: Spacing.MARGIN_16 }}>
              <AirQuality navigation={navigation} />
            </View> */}
          {/* </ScrollView> */}
        {/* </Animated.View> */} 

        <TouchableOpacity style={styles.bottomContainer}>
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
          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <Text style={styles.seemoreText}>See More Details</Text>
          <SeeMoreArrow />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weatherDegree: state?.switchReducer?.weatherDegree,
    windDegree: state?.switchReducer?.windDegree,
    notify: state?.switchReducer?.notify,
    weatherDetails: state?.WeatherDetailsReducer?.weatherDetails,
    weatherLoading: state?.WeatherDetailsReducer?.loading,
  };
};

export default connect(mapStateToProps)(NearBy);
