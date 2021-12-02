import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
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
import Shadow from "../../Components/Shadow/Shadow";
import Search from "../../Components/Search/Search";
import url from "../../globalStyles/cms-url";
import Spacing from "../../globalStyles/Spacing";

const Home = ({
  weatherDetails,
  weatherLoading,
  navigation,
  weatherDegree,
  windDegree,
  pollutionDetails,
}: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [news, setNews] = useState<Array<any>>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
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
      } catch (err: any) {
        console.log(err.message);
      }
    })();
  }, []);

  const renderNews = (data: any) => {
    return data?.map((item: any, index: any) => {
      return (
        <View key={index} style={styles.newsContainer}>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() =>
              navigation.navigate(navigationStrings.NEWS, { data: item })
            }
          >
            <Text style={styles.cardTitle}>{"News"}</Text>
            <Right />
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <Image
              source={{ uri: `${url}${item?.image?.url}` }}
              style={styles.newsImg}
            />
          </View>
          <View style={styles.newsTtile}>
            <Text style={styles.newsHeadline} numberOfLines={2}>
              {item.Title}
            </Text>
          </View>
        </View>
      );
    });
  };

  const handleModalVisible = (val: boolean) => {
    setModalVisible(val);
  };

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <SafeAreaView style={styles.mainContainer}>
        {/* Header Start */}
        <Header
          title={weatherDetails[0]?.locationDetails?.city}
          backButton={false}
          tab={false}
          onPress={() => setModalVisible(true)}
        />

        {weatherLoading || loading ? (
          <Loader />
        ) : (
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            {/* hero component */}
            <View style={{ margin: Spacing.MARGIN_20 }}>
              <HeroSection
                weatherData={weatherDetails}
                weatherDegree={weatherDegree}
                navigation={navigation}
                firstColor={colors.darkBlue}
                secondColor={colors.white}
              />
            </View>

            {/* Today's Details component  */}
            <View style={styles.componentStyle}>
              <TodayDetail
                weatherDetails={weatherDetails}
                navigation={navigation}
                windDegree={windDegree}
              />
            </View>

            {/* 7 day forecast component */}
            <View style={styles.componentStyle}>
              <Forecast
                data={weatherDetails[0]?.weatherDetails?.daily}
                title="7 Days Forecast"
                backgroundColor={true}
                weatherDegree={weatherDegree}
                navigation={navigation}
              />
            </View>

            {/* Air Pollution */}
            <View style={styles.componentStyle}>
              <AirQuality
                navigation={navigation}
                background={true}
                val={pollutionDetails[0]?.pollutionDetails?.components.pm2_5?.toFixed(
                  0
                )}
              />
            </View>

            {/* News Section */}
            <View style={Shadow.shadowStyle}>
              <Swiper
                pagingEnabled={true}
                loop={true}
                key={news.length}
                style={{ height: (deviceHeight / 7) * 3.1 }}
              >
                {renderNews(news)}
              </Swiper>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>

      <Modal
        statusBarTranslucent={Platform.OS === "ios" ? true : false}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        {/* <SafeAreaView style={{ flex: 1 }}> */}
        <StatusBar
          translucent={false}
          barStyle={"light-content"}
          backgroundColor={colors.black}
        />
        <View
          style={{
            backgroundColor: colors.black,
          }}
        >
          <Search
            ModalVisible={handleModalVisible}
            weatherDetail={weatherDetails}
          />
        </View>
        <TouchableWithoutFeedback
          onPressOut={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}></View>
        </TouchableWithoutFeedback>
        {/* </SafeAreaView> */}
      </Modal>
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
