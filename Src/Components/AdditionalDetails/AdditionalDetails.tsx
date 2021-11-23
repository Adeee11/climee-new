import React from "react"
import { Text } from "react-native"
import { View } from "react-native"
import assets from "../../../assets"
import AdditionalElements from "../AdditionalElements/AdditionalElements"
import styles from "./styles"

const AdditionalDetails=(props:any)=>{
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Additional Details</Text>
            <View >
              <View style={styles.elementSection}>
                <AdditionalElements 
                name={"Wind"}
                value={"3 MPH"}
                img={assets.newWind}
                />
                 <AdditionalElements 
                name={"Humidity"}
                value={"54%"}
                img={assets.newHumidity}
                />
                 <AdditionalElements 
                name={"Uv Index"}
                value={"3.86"}
                img={assets.newUv}
                />
              </View>
              <View style={styles.elementSection}>
                <AdditionalElements 
                name={"Dew Point"}
                value={"3 MPH"}
                img={assets.newDewPoint}
                />
                 <AdditionalElements 
                name={"Pressure"}
                value={"1015 MB"}
                img={assets.newPressure}
                />
                 <AdditionalElements 
                name={"Sunrise"}
                value={"6:50 am"}
                img={assets.newSunrise}
                />
              </View>
              <View style={styles.elementSection}>
                <AdditionalElements 
                name={"Sunset"}
                value={"6:50 pm"}
                img={assets.newSunset}
                />
                 <AdditionalElements 
                name={"Moonrise"}
                value={"6:50 pm"}
                img={assets.newMoonrise}
                />
                 <AdditionalElements 
                name={"Moonset"}
                value={"4:50 am"}
                img={assets.newMoonset}
                />
              </View>
            </View>
        </View>
    )
}
export default AdditionalDetails;