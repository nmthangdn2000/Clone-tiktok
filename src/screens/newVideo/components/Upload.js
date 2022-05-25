import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { BORDER, COLOR, TEXT } from '../../../configs/styles/index';
import { Illustration_IMG } from '../../../configs/source';

const Upload = () => {
  return (
    <View style={styles.container}>
      <Image source={Illustration_IMG} style={styles.icon} />
      <Text style={styles.text}>Tải lên</Text>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    borderRadius: BORDER.SMALL,
    borderWidth: 2,
    borderColor: COLOR.WHITE,
    width: 40,
    height: 40,
  },
  text: {
    ...TEXT.SMALL,
    color: COLOR.WHITE,
    marginTop: 5,
  },
});
