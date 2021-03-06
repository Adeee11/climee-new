import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Share,
  Text,
  View,
} from "react-native";
import colors from "../../globalStyles/colors";
import moment from "moment";
import styles from "./styles";
import url from "../../globalStyles/cms-url";
import Spacing from "../../globalStyles/Spacing";
import GeneralStatusBarColor from "../../Components/generateStatusBarColor/GenerateStatusBarColor";
import Header from "../../Components/Header/Header";
import { deviceHeight } from "../../constants/dimensions";

const News = ({ navigation, route }: any) => {
  const { data } = route.params;

  return (
    <>
      <GeneralStatusBarColor
        barStyle={"light-content"}
        backgroundColor={colors.darkBlue}
      />
      <Header title={"News"} onPress={() => navigation.goBack()} tab={false} />
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: `${url}${data?.image?.url}` }}
            style={{
              borderRadius: Spacing.RADIUS_20,
              height: deviceHeight/7*2,
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
          }}
        >
          <View style={styles.newsHeadingView}>
            <Text style={styles.textColor20}>{data.Title}</Text>
          </View>

          <Text style={styles.textColor14}>{data.Content}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default News;
