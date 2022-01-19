import React from "react";
import { Image } from "react-native";
import assets from "../../../assets";

const WeatherImage = ({ img, height, width, time = true }: any) => {
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
      ? time
        ? { img: assets.sunny }
        : { img: assets.moon }
      : item === "Clouds"
      ? { img: assets.cloudy }
      : { img: assets.haze };
  };

  return (
    <>
      <Image
        source={showImage(img)?.img}
        style={{
          resizeMode: "contain",
          height: height,
          width: width,
        }}
        resizeMode="contain"
      />
    </>
  );
};

export default WeatherImage;
