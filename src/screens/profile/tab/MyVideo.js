import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR } from '../../../configs/styles';

const MyVideo = () => {
  return (
    <View style={styles.container}>
      <Text>MyVideo</Text>
    </View>
  );
};

export default MyVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
});
