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
                windDegree == "mph"
                  ? (details?.wind_speed * 2.237)?.toFixed(2)
                  : details?.wind_speed?.toFixed(2)
              }
              img={assets.newWind}
            />
          </View>
          <AdditionalElements
            name={"Humidity"}
            value={details?.humidity + "%"}
            img={assets.newHumidity}
          />
          <AdditionalElements
            name={"Uv Index"}
            value={details?.uvi}
            img={assets.newUv}
          />
        </View>
        <View style={styles.elementSection}>
          <AdditionalElements
            name={"Dew Point"}
            value={details?.dew_point}
            img={assets.newDewPoint}
          />
          <AdditionalElements
            name={"Pressure"}
            value={details?.pressure}
            img={assets.newPressure}
          />
          <AdditionalElements
            name={"Sunrise"}
            value={time(details?.sunrise)?.strTime}
            img={assets.newSunrise}
          />
        </View>
        <View style={styles.elementSection}>
          <AdditionalElements
            name={"Sunset"}
            value={time(details?.sunset)?.strTime}
            img={assets.newSunset}
          />
          <AdditionalElements
            name={"Moonrise"}
            value={time(details?.moonrise)?.strTime}
            img={assets.newMoonrise}
          />
          <AdditionalElements
            name={"Moonset"}
            value={time(details?.moonset)?.strTime}
            img={assets.newMoonset}
          />
        </View>
      </View>
    </View>
  );
};
export default AdditionalDetails;
