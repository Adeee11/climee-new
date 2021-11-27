import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../globalStyles/colors";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import styles from "./styles";
import url from "../../globalStyles/cms-url";
import Spacing from "../../globalStyles/Spacing";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import navigationStrings from "../../constants/navigationStrings";

const News = ({ navigation, route }: any) => {
  const { data } = route.params;

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: "Download the Climee app",
      });
      if (result.action === Share.sharedAction) {
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (e) {}
  };

  return (
    <>
     <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <Header title={"News"} onPress={() => navigation.goBack()} />
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: `${url}${data?.image?.url}` }}
            style={{
              borderRadius: 20,
              height: 170,
              width: "90%",
              resizeMode: "cover",
            }}
          />
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.grey12}>{moment(data?.updatedAt).fromNow()}</Text>
        </View>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 0.52,
            paddingHorizontal: Spacing.PADDING_8,
            marginHorizontal: Spacing.MARGIN_10,
            // marginBottom: Spacing.MARGIN_10,
          }}
        >
          <View style={styles.newsHeadingView}>
            <Text style={styles.textColor20}>{data.Title}</Text>
          </View>

          <Text style={styles.textColor14}>{data.Content}</Text>
        </ScrollView>
      </SafeAreaView>
      {/* <View style={styles.newsView}>
        <View>
          <Text style={styles.headingStyle}>Weather News</Text>
        </View>
        <TouchableOpacity onPress={handleShare}>
          <View style={styles.bottomTextWrapper}>
            <Entypo name="share" size={24} color={colors.grey} />
            <Text style={styles.shareStyle}>Share it</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </>
  );
};

export default News;
