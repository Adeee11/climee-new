import React from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar} from 'react-native';
import colors from '../../globalStyles/colors';
import styles from './style';

const Loader = () => {
  return (
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <StatusBar backgroundColor={colors.themeColor} hidden={false} barStyle="light-content" />
      <ActivityIndicator size={50} color={colors.themeColor} />
    </SafeAreaView>
  );
};

export default Loader;
  