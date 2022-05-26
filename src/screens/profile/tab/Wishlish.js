import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR } from '../../../configs/styles';

const Wishlish = () => {
  return (
    <View style={styles.container}>
      <Text>Wishlish</Text>
    </View>
  );
};

export default Wishlish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
});
