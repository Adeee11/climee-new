import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
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
import Loader from "../../Components/Loader";
import navigationStrings from "../../constants/navigationStrings";
import { deviceHeight } from "../../constants/dimensions";
import Header from "../../Components/Header/Header";
import AirQuality from "../../Components/AirQuality/AirQuality";
import colors from "../../globalStyles/colors";

const Home = ({
  weatherDetails,
  weatherLoading,
  navigation,
  weatherDegree,
  windDegree,
  pollutionDetails,
  firstColor,
  secondColor,
}: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [news, setNews] = useState<Array<any>>([]);

  useEffect(() => {
    console.log(weatherDetails[0].weatherDetails.hourly);

    (async () => {
      try {
        setLoading(true);
        const Token = await AsyncStorage.getItem("cmsAuthToken");
        const result: any = await strapi.get("/news", {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        setNews(result?.data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  const renderNews = (data: any) => {
    return data?.map((item: any, index: any) => {
      return (
        <>
          <View
            style={{ paddingHorizontal: 5, height: (deviceHeight * 38) / 100 }}
          >
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() =>
                navigation.navigate(navigationStrings.NEWS, { data: item })
              }
            >
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
              <Text style={styles.newsHeadline} numberOfLines={2}>
                {item.Title}
              </Text>
            </View>
          </View>
        </>
      );
    });
  };

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"dark-content"}
        backgroundColor={"#3C6FD1"}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.appBackground }}>
        {/* Header Start */}
        <Header
          title={weatherDetails[0]?.locationDetails?.city}
          backButton={false}
          onPress={() => navigation.navigate(navigationStrings.SEARCH)}
        />

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
              <HeroSection
                weatherData={weatherDetails}
                weatherDegree={weatherDegree}
                navigation={navigation}
                firstColor={colors.blueTheme}
                secondColor={colors.white}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Forecast
                data={weatherDetails[0]?.weatherDetails?.hourly}
                title="Hourly Forecast"
                weatherDegree={weatherDegree}
                navigation={navigation}
                // backgroundColor={true}
                // hourly={true}
              />
            </View>
            {/* Today's Details component  */}
            <View style={{ marginBottom: 20 }}>
              <TodayDetail
                weatherDetails={weatherDetails}
                navigation={navigation}
                windDegree={windDegree}
              />
            </View>
            {/* 7 day forecast component */}
            <View style={{ marginBottom: 20 }}>
              <Forecast
                data={weatherDetails[0]?.weatherDetails?.daily}
                title="7 Days Forecast"
                backgroundColor={true}
                weatherDegree={weatherDegree}
                navigation={navigation}
              />
            </View>
            {/* Air Pollution */}
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <AirQuality
                navigation={navigation}
                background={true}
                val={pollutionDetails[0]?.pollutionDetails?.components.pm2_5?.toFixed(
                  2
                )}
              />
            </View>
            {/* News Section */}
            <View style={{}}>
              <Swiper
                pagingEnabled={true}
                loop={true}
                key={news.length}
                style={{ height: (deviceHeight * 50) / 100 }}
              >
                {renderNews(news)}
              </Swiper>
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
    pollutionDetails: state?.WeatherDetailsReducer?.pollutionDetails,
    firstColor: state?.colorThemeReducer?.firstColor,
    secondColor: state?.colorThemeReducer?.secondColor,
  };
};

export default connect(mapStateToProps)(Home);
