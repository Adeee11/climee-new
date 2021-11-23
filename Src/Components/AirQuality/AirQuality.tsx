import React from "react";
import ProgressCircle from "react-native-progress-circle";
import { Text, TouchableOpacity, View } from "react-native";
import Spacing from "../../globalStyles/Spacing";
import colors from "../../globalStyles/colors";
import fontFamily from "../../globalStyles/fontFamily";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
const AirQuality=(props:any)=>{
    const{navigation}=props
    return(
        <View style={styles.AirPollutionView}>
        <Text style={styles.pollutionHeading}>Air Pollution</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: Spacing.PADDING_10,
          }}
        >
          <ProgressCircle
            percent={85}
            radius={40}
            borderWidth={5}
            color="#FFDE00"
            shadowColor={colors.grey}
            bgColor="#fff"
          >
            <Text style={styles.pollutionHeading}>{"193"}</Text>
          </ProgressCircle>
          <View style={{ paddingHorizontal: Spacing.PADDING_20 }}>
            <Text style={styles.pollutionHeading}>{"Moderate"}</Text>
            <Text
              style={{ ...styles.headingText, fontFamily: fontFamily.light }}
            >
              {"Fine particles / PM2.5"}
            </Text>
            <TouchableOpacity
              onPress={() =>
               navigation.navigate(navigationStrings.AIRPOLLUTION)
              }
              style={{
                marginVertical: 5,
                padding: 10,
                backgroundColor: "#3C6FD1",
                width: "80%",
                borderRadius: 10,
              }}
            >
              <Text style={styles.buttonText}>See More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}
export default AirQuality;