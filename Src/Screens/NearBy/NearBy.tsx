import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState, createRef } from "react";
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
import ActionSheet from "react-native-actions-sheet";
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
import AdditionalDetails from "../../Components/AdditionalDetails/AdditionalDetails";
import Spacing from "../../globalStyles/Spacing";
import AirQuality from "../../Components/AirQuality/AirQuality";
import colors from "../../globalStyles/colors";
import Loader from "../../Components/Loader";

const NearBy = ({ weatherDetails, navigation }: any) => {
  const [airQuality, setAirQuality] = useState<number>(0);
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
  const [loading, setLoading] = useState<boolean>(false);
  const actionSheetRef = createRef<any>();

  const getCoordinates = (val: any) => {
    setCoordinates(val);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result: any = await axios.get(
          `/onecall?lat=${coordinates?.latitude}&lon=${coordinates?.longitude}&appid=${api}&units=metric`
        );
        const response: any = await axios.get(
          `/air_pollution?lat=${coordinates?.latitude}&lon=${coordinates?.longitude}&appid=${api}`
        );
        setAirQuality(response?.data?.list[0]?.components?.pm2_5);

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
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [coordinates]);

  const headerComponent = () => {
    return (
      <View
        style={{
          height: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.appBackground,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <View style={{ borderBottomWidth: 3, width: "20%" }} />
      </View>
    );
  };

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={"#3C6FD1"}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Header title={"Nearby"} />
        <ShowMap
          latitude={weatherDetails[0]?.locationDetails?.latitude}
          longitude={weatherDetails[0]?.locationDetails?.longitude}
          updatedCoordinates={getCoordinates}
        />

        {/* Location container */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.locationContainer}>
              <Location height={35} width={35} />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.streetText}>
                  {currLocation?.street === null
                    ? "unnamed"
                    : currLocation?.street}
                </Text>
                <Text style={styles.locationText}>
                  {currLocation?.city === null ? "unnamed" : currLocation?.city}
                  , {currLocation?.country}
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
              <View style={{ alignItems: "center", flex: 0.7 }}>
                <Text style={styles.tempText}>
                  {parseInt(weather?.current?.temp)}&deg;
                </Text>
                <Text style={styles.weatherText}>
                  {weather?.current?.weather[0]?.description}
                </Text>
              </View>
              <View style={{ flex: 0.3, alignItems: "center" }}>
                <WeatherImage
                  img={weather?.current?.weather[0]?.main}
                  height={70}
                  width={70}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.bottomContainer}
              onPress={() => actionSheetRef.current?.setModalVisible()}
            >
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
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.seemoreText}>See More Details</Text>
                <SeeMoreArrow />
              </View>
            </TouchableOpacity>
          </>
        )}
      </SafeAreaView>

      <ActionSheet
        ref={actionSheetRef}
        headerAlwaysVisible={true}
        CustomHeaderComponent={headerComponent()}
      >
        <View style={{ backgroundColor: colors.appBackground }}>
          <View style={{ marginTop: 10 }}>
            <AdditionalDetails details={weather?.current} />
          </View>
          <View
            style={{ marginHorizontal: Spacing.MARGIN_16, marginBottom: 20 }}
          >
            <AirQuality navigation={navigation} val={airQuality} />
          </View>
        </View>
      </ActionSheet>
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
