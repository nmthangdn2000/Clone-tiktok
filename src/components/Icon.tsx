import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconCustomType } from '../utils/interfaceStyles';

const Icon = (props: IconCustomType) => {
  const { source, height = 24, width = 24, onPress, style, ...styles } = props;
  const initStyles = StyleSheet.create({
    icon: {
      height,
      width,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Image source={source} style={[initStyles.icon, style, styles]} />
    </TouchableOpacity>
  );
};

export default Icon;
