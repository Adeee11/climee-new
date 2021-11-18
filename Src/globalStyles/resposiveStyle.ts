import {Dimensions, PixelRatio, StatusBar, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: any) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: any) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: any, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const moderateScaleVertical = (size: any, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
const textScale = (percent: any) => {
  const screenHeight = Dimensions.get('window').height;
  //calculate absolute ratio for bigger screens 18.5:9 requiring smaller scaling
  const ratio =
    Dimensions.get('window').height / Dimensions.get('window').width;
  //Guideline sizes are based on standard ~5″ screen mobile device
  const deviceHeight = 375
    ? screenHeight * (ratio > 1.8 ? 0.14 : 0.15) //Set guideline depending on absolute ratio
    : Platform.OS === 'android'
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    ? screenHeight - StatusBar.currentHeight
    : screenHeight;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};

const isTablet = () => {
  let pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
  }
};

export {
  scale,
  verticalScale,
  textScale,
  moderateScale,
  moderateScaleVertical,
  width,
  height,
  isTablet,
};
