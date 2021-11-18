import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const heightLessNum = deviceHeight < 750;
export const heightGreaterNum = deviceHeight > 750;
