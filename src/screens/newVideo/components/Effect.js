import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { BORDER, COLOR, TEXT } from '../../../configs/styles/index';
import { Effects_Illustration_IMG } from '../../../configs/source';

const Effect = () => {
  return (
    <View style={styles.container}>
      <Image source={Effects_Illustration_IMG} style={styles.icon} />
      <Text style={styles.text}>Hiệu ứng</Text>
    </View>
  );
};

export default Effect;

const styles = StyleSheet.create({
  container: {
    // borderRadius: BORDER.NORMAL,
    // borderColor: COLOR.BLACK,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 41,
    height: 41,
  },
  text: {
    ...TEXT.SMALL,
    color: COLOR.WHITE,
  },
});
