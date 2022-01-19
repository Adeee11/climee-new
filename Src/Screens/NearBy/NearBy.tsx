import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState, createRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
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
import AirQuality from "../../Components/AirQuality/AirQuality";
import colors from "../../globalStyles/colors";
import Loader from "../../Components/Loader";
import Spacing from "../../globalStyles/Spacing";
import navigationStrings from "../../constants/navigationStrings";
import assets from "../../../assets";

const NearBy = ({
  weatherDetails,
  navigation,
  weatherDegree,
  windDegree,
}: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openIOSModal, setOpenIOSModal] = useState<boolean>(false);
  const actionSheetRef = createRef<any>();
  const [airQuality, setAirQuality] = useState();
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

  useEffect(() => {
    setCoordinates({
      latitude: weatherDetails[0]?.locationDetails?.latitude,
      longitude: weatherDetails[0]?.locationDetails?.longitude,
    });
  }, [weatherDetails]);

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
        getCoordinates;
      } catch (err: any) {
        console.log(err.message);
      }
    })();
  }, [coordinates]);

  const headerComponent = () => {
    return (
      <View style={styles.headerComponent}>
        <View style={styles.subHeaderComponent} />
      </View>
    );
  };
  const handleActionSheet = () => {
    Platform.OS === "ios"
      ? setOpenIOSModal(true)
      : actionSheetRef.current?.setModalVisible();
  };

  const handleClose = () => {
    Platform.OS === "ios"
      ? setOpenIOSModal(false)
      : actionSheetRef.current?.setModalVisible(false);
  };

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Header title={"Nearby"} />
        <ShowMap
          latitude={coordinates?.latitude}
          longitude={coordinates?.longitude}
          updatedCoordinates={getCoordinates}
        />

        {/* Location container */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.locationContainer} pointerEvents="none">
              <Location height={35} width={35} />
              <View style={{ marginLeft: 15 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.streetText}>
                    {currLocation?.street === null
                      ? "unnamed"
                      : currLocation?.street}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      setCoordinates({
                        latitude: weatherDetails[0]?.locationDetails?.latitude,
                        longitude:
                          weatherDetails[0]?.locationDetails?.longitude,
                      })
                    }
                  >
                    <Image
                      source={assets.windDirection}
                      style={{
                        width: 15,
                        height: 15,
                        marginHorizontal: 5,
                        marginTop: -5,
                        transform: [{ rotate: "320deg" }],
                      }}
                      resizeMode={"contain"}
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.locationText}>
                  {currLocation?.city === null ? "unnamed" : currLocation?.city}
                  , {currLocation?.country}
                </Text>
              </View>
            </View>

            {/* Temperature Container */}
            <View style={styles.tempContainer} pointerEvents="none">
              <LinearGradient
                // Background Linear Gradient
                colors={[colors.darkBlue, colors.white]}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  top: 0,
                  flex: 0,
                  borderRadius: 20,
                }}
                end={{ x: 0.2, y: 2.5 }}
              />
              <View style={{ alignItems: "center", flex: 0.7 }}>
                <Text style={styles.tempText}>
                  {weatherDegree == "F"
                    ? (parseInt(weather?.current?.temp) * 1.8 + 32)?.toFixed(0)
                    : weather?.current?.temp?.toFixed(0)}
                  &deg;
                </Text>
                <Text style={styles.weatherText}>
                  {weather?.current?.weather[0]?.description}
                </Text>
              </View>
              <View style={{ flex: 0.5, alignItems: "center" }}>
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
                // Background Linear Gradient
                colors={[colors.darkBlue, colors.white]}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  top: 0,
                  flex: 0,
                  borderRadius: 20,
                }}
                end={{ x: 0.2, y: 5 }}
              />
              <View style={styles.seemore}>
                <Text style={styles.seemoreText}>See More Details</Text>
                <SeeMoreArrow />
              </View>
            </TouchableOpacity>
          </>
        )}
      </SafeAreaView>

      <ActionSheet
        bounceOnOpen
        bounciness={15}
        ref={actionSheetRef}
        headerAlwaysVisible={true}
        CustomHeaderComponent={headerComponent()}
      >
        <View style={{ backgroundColor: colors.appBackground }}>
          <View style={{ marginTop: Spacing.MARGIN_10 }}>
            <AdditionalDetails
              details={weather?.current}
              windDegree={windDegree}
            />
          </View>
          <View
            style={{
              marginHorizontal: Spacing.MARGIN_16,
              marginBottom: Spacing.MARGIN_20,
            }}
          >
            <AirQuality
              onPressSeeMore={() => {
                actionSheetRef.current?.setModalVisible(false);
                navigation.navigate(navigationStrings.AIRPOLLUTION);
              }}
              val={airQuality}
            />
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
