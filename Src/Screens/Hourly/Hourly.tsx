import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import HourlyInformation from "../../Components/HourlyInformation/HourlyInformation";
import colors from "../../globalStyles/colors";
import { connect } from "react-redux";
import moment from "moment";
import { useState } from "react";
import Loader from "../../Components/Loader";
import { useFocusEffect } from "@react-navigation/native";
import { hourlyTab } from "../../redux/actions/tabColorAction";

const Hourly = ({
  weatherDetails,
  weatherDegree,
  windDegree,
  route,
  navigation,
}: any) => {
  const [todayHourly, setTodayHourly] = useState<any>();
  const [tomorrowHourly, setTomorrowHourly] = useState<any>();
  const [loader, setLoader] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      hourlyTab(true);
      return () => hourlyTab(false);
    }, [])
  );
  useEffect(() => {
    setLoader(true);
    const today = new Date()?.toISOString()?.split("T")[0];
    const tomorrow = new Date(new Date()?.getTime() + 24 * 60 * 60 * 1000)
      ?.toISOString()
      ?.split("T")[0];

    const r = weatherDetails[0]?.weatherDetails?.hourly?.filter((e: any) => {
      return new Date(e?.dt * 1000)?.toISOString()?.split("T")[0] == today;
    });
    setTodayHourly(r);

    const filt = weatherDetails[0]?.weatherDetails?.hourly?.filter((e: any) => {
      return new Date(e?.dt * 1000)?.toISOString()?.split("T")[0] == tomorrow;
    });
    setTomorrowHourly(filt);
    setLoader(false);
  }, [weatherDetails]);

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <Header
        title={"Hourly"}
        tab={route?.params?.tab}
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      {loader ? (
        <Loader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{ backgroundColor: colors.appBackground }}
        >
          <HourlyInformation
            data={todayHourly}
            date={moment(new Date())?.format("dddd, D MMMM")}
            weatherDegree={weatherDegree}
            windDegree={windDegree}
            sunset={weatherDetails[0]?.weatherDetails?.current.sunset}
          />
          <HourlyInformation
            data={tomorrowHourly}
            date={moment().add(1, "days").format("dddd, D MMMM").toString()}
            weatherDegree={weatherDegree}
            windDegree={windDegree}
            sunset={weatherDetails[0]?.weatherDetails?.current.sunset}
          />
        </ScrollView>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weatherDegree: state?.switchReducer?.weatherDegree,
    windDegree: state?.switchReducer?.windDegree,
    weatherDetails: state?.WeatherDetailsReducer?.weatherDetails,
    weatherLoading: state?.WeatherDetailsReducer?.loading,
  };
};

export default connect(mapStateToProps)(Hourly);
