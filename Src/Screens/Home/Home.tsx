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
} from "react-native";
import Swiper from "react-native-swiper";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TodayDetail from "../../Components/TodayDetail/TodayDetail";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Back, Right } from "../../../assets/svg";
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
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  const renderNews = (data: any) => {
    return data?.map((item: any, index: any) => {
      return (
        <View
          style={{
            paddingHorizontal: 20,
            height: (deviceHeight * 38) / 100,
            ...Shadow.shadowStyle,
          }}
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
              source={{ uri: `${url}${item?.image?.url}` }}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              ...Shadow.shadowStyle,
            }}
          >
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
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.appBackground }}>
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
          <ScrollView
            bounces={false}
            // style={{ marginHorizontal: 20 }}
            showsVerticalScrollIndicator={false}
          >
            {/* hero component */}
            <View style={{ margin: 20 }}>
              <HeroSection
                weatherData={weatherDetails}
                weatherDegree={weatherDegree}
                navigation={navigation}
                firstColor={colors.darkBlue}
                secondColor={colors.white}
              />
            </View>

            {/* Today's Details component  */}
            <View style={{ marginBottom: 20, marginHorizontal: 20 }}>
              <TodayDetail
                weatherDetails={weatherDetails}
                navigation={navigation}
                windDegree={windDegree}
              />
            </View>
            {/* 7 day forecast component */}
            <View style={{ marginBottom: 20, marginHorizontal: 20 }}>
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
                marginHorizontal: 20,
              }}
            >
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
                style={{ height: (deviceHeight * 50) / 100 }}
              >
                {renderNews(news)}
              </Swiper>
            </View>
            {/* </View> */}
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
          backgroundColor="rgba(0,0,0,0.6)"
        />
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <Search ModalVisible={handleModalVisible} />
        </View>
        <TouchableWithoutFeedback
          onPressOut={() => {
            setModalVisible(false);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          ></View>
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
