import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import assets from "../../../assets";
import Spacing from "../../globalStyles/Spacing";
import AdditionalElements from "../AdditionalElements/AdditionalElements";
import styles from "./styles";

const AdditionalDetails = ({ details, windDegree }: any) => {
  const time = (time: number) => {
    const date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes: number | string = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return { strTime };
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Additional Details</Text>
      <View>
        <View style={styles.elementSection}>
          <View style={{ marginLeft: Spacing.MARGIN_12 }}>
            <AdditionalElements
              name={"Wind"}
              value={
                details?.wind_speed
                  ? windDegree == "mph"
                    ? (details?.wind_speed * 2.237)?.toFixed(2)
                    : details?.wind_speed?.toFixed(2)
                  : "NA"
              }
              img={assets.newWind}
            />
          </View>
          <AdditionalElements
            name={"Humidity"}
            value={details?.humidity ? details?.humidity + "%" : "NA"}
            img={assets.newHumidity}
          />
          <AdditionalElements
            name={"Uv Index"}
            value={details?.uvi ? details?.uvi : "NA"}
            img={assets.newUv}
          />
        </View>
        <View style={styles.elementSection}>
          <AdditionalElements
            name={"Dew Point"}
            value={details?.dew_point ? details?.dew_point+ "°" : "NA"}
            img={assets.newDewPoint}
          />
          <AdditionalElements
            name={"Pressure"}
            value={details?.pressure ? details?.pressure : "NA"}
            img={assets.newPressure}
          />
          <AdditionalElements
            name={"Sunrise"}
            value={details?.sunrise ? time(details?.sunrise)?.strTime : "NA"}
            img={assets.newSunrise}
          />
        </View>
        <View style={styles.elementSection}>
          <AdditionalElements
            name={"Sunset"}
            value={details?.sunset ? time(details?.sunset)?.strTime : "NA"}
            img={assets.newSunset}
          />
          {/* <AdditionalElements
            name={"Moonrise"}
            value={details?.moonrise ? time(details?.moonrise)?.strTime : "NA"}
            img={assets.newMoonrise}
          />
          <AdditionalElements
            name={"Moonset"}
            value={details?.moonset ? time(details?.moonset)?.strTime : "NA"}
            img={assets.newMoonset}
          /> */}
        </View>
      </View>
    </View>
  );
};
export default AdditionalDetails;
