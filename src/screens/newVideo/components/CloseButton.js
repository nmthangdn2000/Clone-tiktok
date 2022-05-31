import { StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { CLOSE_IMG } from '../../../configs/source';
import { COLOR, SPACING } from '../../../configs/styles';

const CloseButton = ({ navigation }) => {
  const handleClick = () => navigation.goBack();
  return (
    <Pressable onPress={handleClick} style={styles.container}>
      <Image source={CLOSE_IMG} style={styles.icon} />
    </Pressable>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: SPACING.S4,
    left: SPACING.S2,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: COLOR.WHITE,
  },
});
