import React, { useEffect, useState, useRef, useContext } from "react";
import Routes from "./Src/navigation/Routes";
import strapi from "./Src/api/strapi";
// import * as Sentry from "sentry-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { Context as LocationContext } from "./Src/Context/locationContext"
import Constants from "expo-constants";
// import LogRocket from "@logrocket/react-native";
import { connect } from "react-redux";
import { Platform } from "react-native";
const BACKGROUND_NOTIFICATION_TASK = "BACKGROUND-NOTIFICATION-TASK";
//logrocket
// LogRocket.init("z8yv7b/climee");
// //Sentry
// Sentry.init({
//   dsn: "https://6d027a142809449094af9dd701fd642f@o1050950.ingest.sentry.io/6033743",
//   enableInExpoDevelopment: true,
//   debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
// });
const App = ({ notify, alert }: any) => {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>("");
  const notificationListener = useRef<any>();
  const { getLocation }: any = useContext(LocationContext);
  const responseListener = useRef<any>();
  
  useEffect(() => {
    schedulePushNotification(alert);
  }, [alert]);

  async function schedulePushNotification(alert: any) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: alert[0].event,
        body: alert[0].description,
      },
      trigger: { seconds: 2 },
    });
  }

  //Handle Show notification functionality
  useEffect(() => {
    AsyncStorage.getItem("ClimeeNotifications").then(() => {
      notify === "ON"
        ? Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldShowAlert: true,
              shouldPlaySound: false,
              shouldSetBadge: false,
            }),
          })
        : Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldShowAlert: false,
              shouldPlaySound: false,
              shouldSetBadge: false,
            }),
          });
    });
   console.log('n', notify);
       
  }, [notify]);
  useEffect(() => {
    getLocationPermission();
    Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK);
  }, [expoPushToken]);

  const getLocationPermission = async () => {
    try {
      const Token = await AsyncStorage.getItem("cmsAuthToken");
      const currentCity: any = await AsyncStorage.getItem("ClimeeCurrentLocation")
      await strapi.post(
        "/deviceinfos",
        {
          city: JSON.parse(currentCity)?.city,
          deviceId: expoPushToken,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
    } catch (err:any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getLocation();
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
    });
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {});
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
      });
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        // alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      // console.log('token', token);
    } else {
      // alert('Must use physical device for Push Notifications');
    }
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    return token;
  }
  return (
    <>
      <Routes />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    notify: state.switchReducer.toggleNotifications,
    alert: state.alertReducer.alertNotification,
  };
};
export default connect(mapStateToProps)(App);