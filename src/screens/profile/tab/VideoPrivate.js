import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR } from '../../../configs/styles';

const VideoPrivate = () => {
  return (
    <View style={styles.container}>
      <Text>VideoPrivate</Text>
    </View>
  );
};

export default VideoPrivate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
});
