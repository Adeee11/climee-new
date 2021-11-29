import React from "react";
import {
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../globalStyles/colors";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import Shadow from "../../Components/Shadow/Shadow";
import Spacing from "../../globalStyles/Spacing";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";

const AboutApp = (props: any) => {
  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <SafeAreaView style={styles.mainWrapper}>
        <Header title={"About Us"} onPress={() => props.navigation.goBack()} tab={false} />

        <View style={[styles.UnitsView, Shadow.shadowStyle]}>
          <View style={[styles.UnitSubContainer, Shadow.shadowStyle]}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://climee.netlify.app/privacy-policy")
              }
            >
              <View style={styles.flexRow}>
                <View style={styles.rowEnd}>
                  <Text style={styles.textColor14}>{"Privacy Policy"}</Text>
                </View>
                <MaterialIcons
                  name="navigate-next"
                  size={24}
                  color={colors.textColor}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL("http://climee.netlify.com/terms-of-use")
              }
            >
              <View style={styles.flexRow}>
                <View style={styles.rowStart}>
                  <Text style={styles.textColor14}>
                    {"Terms and conditions"}
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
        <View style={{ flex: 0.7, marginHorizontal: Spacing.MARGIN_16 }}>
          <View style={[styles.UnitSubContainer, Shadow.shadowStyle]}>
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
              <Text style={styles.text2}>
                Weather app is the most helping app for the people who are
                mostly on travel and here we built this app for your ease. It
                provides you the best and accurate forecast prediction globally.
                Here you will get the 7 days forecast in just few minutes. Along
                with it, you can check it on hourly basis too. Another reliable
                option is providing the accurate timing of Sun rise and sun set.
                Humidity air quality, UV index and quick temperature check are
                also measured by this app. Prior warnings of weather also pop-up
                as news in this app.
              </Text>
            </ScrollView>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.grey12}>
            Made with ❤ by
            <Text
              onPress={() =>
                Linking.openURL("https://iwebcode.design/").catch((err) => {
                  console.log(err);
                })
              }
              style={{ color: colors.blueTheme }}
            >
              {" "}
              IWEBCODE
            </Text>{" "}
            team
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AboutApp;
