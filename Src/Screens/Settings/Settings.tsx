import React, { createRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  Share,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActionSheetIOS,
  Linking,
  ScrollView,
} from "react-native";
import colors from "../../globalStyles/colors";
import { Ionicons, MaterialIcons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
import fontFamily from "../../globalStyles/fontFamily";
import {
  switchTempDegree,
  switchWind,
  toggleNotification,
} from "../../redux/actions/switchAction";
import navigationStrings from "../../constants/navigationStrings";
import ActionSheet from "react-native-actions-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import assets from "../../../assets";
import { Platform } from "react-native";
import Spacing from "../../globalStyles/Spacing";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";
import Shadow from "../../Components/Shadow/Shadow";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import typography from "../../globalStyles/typography";
import * as StoreReview from "expo-store-review";
import { showMessage } from "react-native-flash-message";

const Setting = (props: any) => {
  const actionSheetRef = createRef<any>();
  const [openIOSModal, setOpenIOSModal] = useState<boolean>(false);
  const [notifyValue, setNotifyValue] = useState<any>("ON");

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Download the Climee app from https://play.google.com/store/apps/details?id=com.iwebcode.climee",
      });
      if (result.action === Share.sharedAction) {
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (e) {}
  };
  const changeWeatherDegree = (degree: string) => {
    switchTempDegree(degree);
  };
  const changeWind = (wind: string) => {
    switchWind(wind);
  };

  useEffect(() => {
    AsyncStorage.getItem("ClimeeNotifications").then((res) => {
      if (res === null) {
        setNotifyValue("ON");
        return;
      } else {
        setNotifyValue(res);
        return;
      }
    });
  }, []);

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

  const handleNotifications = (value: string) => {
    toggleNotification(value);
  };

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Header title={"Settings"} />
        <View style={{ flex: 0.98 }}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View
              style={{
                flex: 0.2,
                alignItems: "center",
                marginVertical: Spacing.MARGIN_10,
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  fontSize: typography.FONT_SIZE_30,
                  fontFamily: fontFamily.bold,
                  color: colors.textColor,
                  lineHeight: 44,
                }}
              >
                Climee
              </Text>
              <View
                style={{
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://fb.me/climee01")}
                >
                  <Image
                    source={assets.facebook}
                    resizeMode={"cover"}
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://play.google.com/store/apps/details?id=com.iwebcode.climee"
                    )
                  }
                >
                  <Image
                    source={
                      Platform.OS === "ios"
                        ? assets.appStore
                        : assets.googlePlay
                    }
                    resizeMode={"cover"}
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://twitter.com/BClimee")}
                >
                  <Image
                    source={assets.twitter}
                    resizeMode={"cover"}
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL("https://www.instagram.com/climee__")
                  }
                >
                  <Image
                    resizeMode={"cover"}
                    source={assets.instagram}
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.UnitsView}>
              <Text style={styles.heading}>{"Units"}</Text>
              <View style={[styles.UnitSubContainer, Shadow.shadowStyle]}>
                <View style={styles.flexRow}>
                  <Text style={styles.textColor14}>{"Weather"}</Text>
                  <ToggleButton
                    selectionMode={"C"}
                    roundCorner={true}
                    option1={"C"}
                    option2={"F"}
                    onSelectSwitch={changeWeatherDegree}
                  />
                </View>
                <View style={styles.flexRow}>
                  <Text style={styles.textColor14}>Wind</Text>
                  <ToggleButton
                    selectionMode={"m/s"}
                    roundCorner={true}
                    option1={"m/s"}
                    option2={"mph"}
                    onSelectSwitch={changeWind}
                  />
                </View>
              </View>
            </View>

            <View style={styles.UnitsView}>
              <Text style={styles.heading}>Notifications</Text>
              <View style={[styles.UnitSubContainer, Shadow.shadowStyle]}>
                <View style={styles.flexRow}>
                  <Text style={styles.textColor14}>Show Notifications</Text>
                  <ToggleButton
                    selectionMode={notifyValue}
                    roundCorner={true}
                    option1={"ON"}
                    option2={"OFF"}
                    onSelectSwitch={handleNotifications}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.UnitsView]}>
              <Text style={styles.heading}>{"Apps"}</Text>
              <View style={[styles.UnitSubContainer]}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(navigationStrings.ABOUT)
                  }
                >
                  <View style={styles.flexRow}>
                    <View style={styles.rowEnd}>
                      <Ionicons
                        name="ios-information-circle-outline"
                        size={24}
                        color={colors.textColor}
                      />
                      <Text
                        style={{
                          ...styles.textColor14,
                          fontFamily: fontFamily.regular,
                          marginHorizontal: Spacing.MARGIN_5,
                        }}
                      >
                        {"About Climee App"}
                      </Text>
                    </View>
                    <MaterialIcons
                      name="navigate-next"
                      size={24}
                      color={colors.textColor}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleShare}>
                  <View style={styles.flexRow}>
                    <View style={styles.rowStart}>
                      <EvilIcons
                        name="share-google"
                        size={24}
                        color={colors.textColor}
                      />
                      <Text
                        style={{
                          ...styles.textColor14,
                          fontFamily: fontFamily.regular,
                          marginHorizontal: Spacing.MARGIN_5,
                        }}
                      >
                        Share
                      </Text>
                    </View>
                    <MaterialIcons
                      name="navigate-next"
                      size={24}
                      color={colors.textColor}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.UnitsView}>
              <View style={[styles.UnitSubContainer]}>
                <TouchableOpacity
                  onPress={async () => {
                    if (await StoreReview.hasAction()) {
                      if (await StoreReview.isAvailableAsync()) {
                        StoreReview.requestReview()
                          .then(() => {
                            const url = `https://play.google.com/store/apps/details?id=com.iwebcode.climee&showAllReviews=true`;
                            Linking.openURL(url);
                          })
                          .catch(() => {
                            showMessage({
                              message: "Some error occured",
                              type: "danger",
                            });
                          });
                      }
                    }
                  }}
                >
                  <View style={styles.flexRow}>
                    <View style={styles.rowEnd}>
                      <Image
                        source={assets.review}
                        style={{
                          height: 22,
                          width: 22,
                          resizeMode: "contain",
                          tintColor: colors.textColor,
                        }}
                      />
                      <Text
                        style={{
                          ...styles.textColor14,
                          fontFamily: fontFamily.regular,
                          marginHorizontal: Spacing.MARGIN_5,
                        }}
                      >
                        Review
                      </Text>
                    </View>
                    <MaterialIcons
                      name="navigate-next"
                      size={24}
                      color={colors.textColor}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleActionSheet}>
                  <View style={styles.flexRow}>
                    <View style={styles.rowStart}>
                      <Image
                        source={assets.feedback}
                        style={{
                          height: 22,
                          width: 22,
                          resizeMode: "contain",
                          tintColor: colors.textColor,
                        }}
                      />
                      <Text
                        style={{
                          ...styles.textColor14,
                          fontFamily: fontFamily.regular,
                          marginHorizontal: Spacing.MARGIN_5,
                        }}
                      >
                        Feedback
                      </Text>
                    </View>
                    <MaterialIcons
                      name="navigate-next"
                      size={24}
                      color={colors.textColor}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 0.08,
            backgroundColor: colors.appBackground,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.bottomWrapper}>
            <Text style={styles.grey12}>
              Made with ??? by
              <Text
                onPress={() =>
                  Linking.openURL("https://iwebcode.design/").catch((err) => {
                    console.log(err);
                  })
                }
                style={{ color: colors.darkBlue }}
              >
                {" "}
                IWEBCODE
              </Text>{" "}
              team
            </Text>
          </View>
        </View>
        {openIOSModal ? (
          ActionSheetIOS.showActionSheetWithOptions(
            {
              options: ["Cancel", "Send Feedback"],
              cancelButtonIndex: 0,
            },
            (buttonIndex) => {
              if (buttonIndex === 0) {
                setOpenIOSModal(false);
              } else {
                Linking.openURL("mailto: Climee.app@gmail.com").catch((err) => {
                  console.log(err);
                });
              }
            }
          )
        ) : (
          <ActionSheet ref={actionSheetRef} headerAlwaysVisible={true}>
            <View
              style={{
                height: 80,
                overflow: "scroll",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: Spacing.PADDING_20,
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "mailto: Climee.app@gmail.com?subject=Customer support feedback ??? Climee"
                    ).catch((err) => {
                      console.log(err);
                    })
                  }
                >
                  <View
                    style={{
                      alignItems: "center",
                      paddingVertical: Spacing.PADDING_10,
                    }}
                  >
                    <Text
                      style={[
                        styles.actionsheetTextStyle,
                        { color: colors.textColor },
                      ]}
                    >
                      {" Send Feedback"}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClose}>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={[styles.actionsheetTextStyle, { color: "red" }]}
                    >
                      Cancel
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ActionSheet>
        )}
      </SafeAreaView>
    </>
  );
};

export default Setting;
