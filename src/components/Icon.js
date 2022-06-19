import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLOR } from '../configs/styles';

const Icon = ({
  source,
  height = 24,
  width = 24,
  color = COLOR.WHITE,
  style,
  onPress,
}) => {
  const styles = StyleSheet.create({
    icon: {
      height,
      width,
      tintColor: color,
      ...style,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Image source={source} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default Icon;
