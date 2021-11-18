import React, { useEffect, useState } from "react";
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import App from "./App";
import strapi from "./Src/api/strapi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import store from "./Src/redux/store";
import NetInfo from "@react-native-community/netinfo";
import { Provider as LocationProvider } from "./Src/Context/locationContext";
import { RootSiblingParent } from "react-native-root-siblings";
import SplashScreen from "./Src/Screens/SplashScreen/SplashScreen";
import AppLoading from "expo-app-loading";
import InternetError from "./Src/Components/InternetError";

const AppWrapper = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [intConnection, setIntConnection] = useState<any>("");
  const [locations, setLocations] = useState<any>(null);

  useEffect(() => {
    strapi
      .post("/auth/local", {
        identifier: "anmolpreet@techhiedunia.com",
        password: "Iwebc0de",
      })
      .then((res: any) => {
        AsyncStorage.setItem("cmsAuthToken", res?.data?.jwt);
      });
    const unsubscribe = NetInfo.addEventListener((state) => {});
    unsubscribe();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  NetInfo.fetch().then((state) => {
    setIntConnection(state?.isConnected);
  });

  const [fontLoading] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
  });

  if (!fontLoading) {
    return <AppLoading />;
  } else {
    return (
      <>
        {loading ? (
          <SplashScreen />
        ) : !intConnection ? (
          <InternetError />
        ) : (
          <Provider store={store}>
            <LocationProvider>
              <RootSiblingParent>
                <App />
              </RootSiblingParent>
            </LocationProvider>
          </Provider>
        )}
      </>
    );
  }
};

export default registerRootComponent(AppWrapper);
