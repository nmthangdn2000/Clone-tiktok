import { StyleSheet, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { BORDER, COLOR, TEXT } from '../../../configs/styles/index';
import { Illustration_IMG } from '../../../configs/source';
import { launchImageLibrary } from 'react-native-image-picker';

const Upload = () => {
  const handleClick = async () => {
    const options = { mediaType: 'video' };

    const result = await launchImageLibrary(options);
    console.log(result);
  };

  return (
    <Pressable onPress={handleClick} style={styles.container}>
      <Image source={Illustration_IMG} style={styles.icon} />
      <Text style={styles.text}>Tải lên</Text>
    </Pressable>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
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
