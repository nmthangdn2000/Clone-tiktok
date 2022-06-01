import { View, Image, StyleSheet, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { LOGO_IMG } from '../../configs/source';
import { COLOR } from '../../configs/styles/index';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainScreen');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="black" hidden={true} />
      <Image source={LOGO_IMG} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
});
