import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TodayDetail from "../../Components/TodayDetail/TodayDetail";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Right } from "../../../assets/svg";
import Forecast from "../../Components/Forecast/Forecast";
import { connect } from "react-redux";
import strapi from "../../api/strapi";
import ShowMap from "../../Components/ShowMap/ShowMap";
import Loader from "../../Components/Loader";
import Header from "../../Components/Header/Header";
import navigationStrings from "../../constants/navigationStrings";


const Home = ({ weatherDetails, weatherLoading, navigation }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [news, setNews] = useState<Array<string>>([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const Token = await AsyncStorage.getItem("cmsAuthToken");
        const result: any = await strapi.get("/news", {
          headers: {
            Authorization: `Bearer ${Token}`,
          }
        });
        setNews(result?.data);        
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={"#7CA9FF"}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header Start */}
      <Header title="Mohali" backButton={false} onPress={() => navigation.navigate(navigationStrings.SEARCH)}/>
        {/* Header End */}
        {weatherLoading || loading ? (
          <Loader />
        ) : (
          <ScrollView
            bounces={false}
            style={{ marginHorizontal: 20 }}
            showsVerticalScrollIndicator={false}
          >
            {/* hero component */}
            <View style={{ marginVertical: 20 }}>
              <HeroSection weatherData={weatherDetails} />
            </View>
            {/* Today's Details component  */}
            <View style={{ marginBottom: 20 }}>
              <TodayDetail weatherDetails={weatherDetails} navigation={navigation} />
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
                {news[0]?.Title}
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
