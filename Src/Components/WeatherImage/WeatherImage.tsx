import React from "react";
import { Image } from "react-native";
import assets from "../../../assets";

const WeatherImage = ({ img, height, width }: any) => {
  const showImage = (item: string) => {
    return item === "Thunderstorm"
      ? { img: assets.thunder }
      : item === "Drizzle"
      ? { img: assets.sunnyRainy }
      : item === "Rain"
      ? { img: assets.rainy }
      : item === "Snow"
      ? { img: assets.snow }
      : item === "Clear"
      ? { img: assets.sunny }
      : item === "Clouds"
      ? { img: assets.cloudy }
      : { img: assets.haze };
  };

  return (
    <>
      <Image
        source={showImage(img)?.img}
        style={{ resizeMode: "contain", height: height, width: width }}
      />
    </>
  );
};

export default WeatherImage;
