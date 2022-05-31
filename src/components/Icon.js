import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLOR } from '../configs/styles';

const Icon = ({
  source,
  height = 24,
  width = 24,
  color = COLOR.WHITE,
  style,
}) => {
  const styles = StyleSheet.create({
    icon: {
      height,
      width,
      tintColor: color,
      ...style,
    },
  });

  return <Image source={source} style={styles.icon} />;
};

export default Icon;
