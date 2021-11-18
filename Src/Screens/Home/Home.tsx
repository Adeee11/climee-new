import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../globalStyles/colors";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import assets from "../../../assets";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TodayDetail from "../../Components/TodayDetail/TodayDetail";
import { Right } from "../../../assets/svg";
import Forecast from "../../Components/Forecast/Forecast";
import { connect } from "react-redux";
import ShowMap from "../../Components/ShowMap/ShowMap";
import Loader from "../../Components/Loader";

const Home = ({ weatherDetails, weatherLoading }: any) => {
  const temp = [
    { id: "1", min: "17", max: "30", time: "Wed", img: assets.rainy },
    { id: "2", min: "17", max: "30", time: "Thu", img: assets.rainy },
    { id: "3", min: "17", max: "30", time: "Fri", img: assets.rainy },
    { id: "4", min: "17", max: "30", time: "Sat", img: assets.rainy },
    { id: "5", min: "17", max: "30", time: "Sun", img: assets.rainy },
    { id: "6", min: "17", max: "30", time: "Mon", img: assets.rainy },
    { id: "7", min: "17", max: "30", time: "Tue", img: assets.rainy },
  ];

  useEffect(() => {
    console.log("weatherDetails", weatherDetails[0]?.weatherDetails?.current?.temp);
    console.log(weatherLoading);
  }, [weatherDetails]);

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={"#7CA9FF"}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header Start */}
        <View style={styles.headerContainer}>
          <AntDesign name="search1" size={30} color={colors.white} />
          <Text style={styles.headerText}>Mohali, India</Text>
        </View>
        {/* Header End */}
        {weatherLoading ? (
          <Loader />
        ) : (
          <ScrollView
            bounces={false}
            style={{ marginHorizontal: 20 }}
            showsVerticalScrollIndicator={false}
          >
            {/* hero component */}
            <View style={{ marginVertical: 20 }}>
              <HeroSection weatherData={weatherDetails}/>
            </View>
            {/* Today's Details component  */}
            <View style={{ marginBottom: 20 }}>
              <TodayDetail weatherDetails={weatherDetails}/>
            </View>
            {/* 7 day forecast component */}
            <View style={{ marginBottom: 20 }}>
              <Forecast
                data={weatherDetails[0]?.weatherDetails?.daily}
                title="7 Days Forecast"
                backgroundColor={true}
              />
            </View>

            {/* nearby locations view */}
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>Near by Location</Text>
                <Right />
              </View>
              <View
                style={{
                  height: 200,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                <ShowMap
                  latitude={30.7046}
                  longitude={76.7179}
                  customStyles={{
                    height: "99%",
                    borderRadius: 20,
                  }}
                  // updatedCoordinates={getCoordinates}
                />
              </View>
            </View>

            {/* News view */}
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <TouchableOpacity style={styles.cardContainer}>
                <Text style={styles.cardTitle}>News</Text>
                <Right />
              </TouchableOpacity>
              <View
                style={{
                  height: 200,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CVi919KotpE7FuciwqIeMDhhJNokHpbV1w&usqp=CAU",
                  }}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              </View>
              <View
                style={{
                  padding: 20,
                  backgroundColor: "white",
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
              >
                <Text style={styles.newsHeadline}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
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

export default connect(mapStateToProps)(Home);
