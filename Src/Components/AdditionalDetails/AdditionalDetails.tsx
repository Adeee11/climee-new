import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import assets from "../../../assets";
import Spacing from "../../globalStyles/Spacing";
import AdditionalElements from "../AdditionalElements/AdditionalElements";
import styles from "./styles";

const AdditionalDetails = (props: any) => {
  const {
    wind,
    humidity,
    UvIndex,
    DewPoint,
    Pressure,
    SunRise,
    SunSet,
    MoonRise,
    MoonSet,
  } = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Additional Details</Text>
      <View>
        <View style={styles.elementSection}>
          <View style={{ marginLeft: Spacing.MARGIN_12 }}>
            <AdditionalElements
              name={"Wind"}
              value={wind}
              img={assets.newWind}
            />
          </View>
          <AdditionalElements
            name={"Humidity"}
            value={humidity + "%"}
            img={assets.newHumidity}
          />
          <AdditionalElements
            name={"Uv Index"}
            value={UvIndex}
            img={assets.newUv}
          />
        </View>
        <View style={styles.elementSection}>
          <AdditionalElements
            name={"Dew Point"}
            value={DewPoint}
            img={assets.newDewPoint}
          />
          <AdditionalElements
            name={"Pressure"}
            value={Pressure}
            img={assets.newPressure}
          />
          <AdditionalElements
            name={"Sunrise"}
            value={SunRise}
            img={assets.newSunrise}
          />
        </View>
        <View style={styles.elementSection}>
          <AdditionalElements
            name={"Sunset"}
            value={SunSet}
            img={assets.newSunset}
          />
          <AdditionalElements
            name={"Moonrise"}
            value={MoonRise}
            img={assets.newMoonrise}
          />
          <AdditionalElements
            name={"Moonset"}
            value={MoonSet}
            img={assets.newMoonset}
          />
        </View>
      </View>
    </View>
  );
};
export default AdditionalDetails;
