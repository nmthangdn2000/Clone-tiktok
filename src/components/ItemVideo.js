import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { LOGO_IMG } from '../configs/source';

const ItemVideo = ({ url }) => {
  return (
    <ImageBackground source={LOGO_IMG} style={styles.container}>
      <Text>ItemVideo</Text>
    </ImageBackground>
  );
};

export default ItemVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
