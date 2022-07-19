import { StyleSheet, Animated } from 'react-native';
import React from 'react';
import { BORDER, COLOR, SPACING } from '../../configs/styles';

const Indicator = ({ measures, width, position }) => {
  const inputRange = Array(measures.length)
    .fill(0)
    .map((_, i) => i);
  const ouputRangeTranslateX = measures.map(
    meausre => meausre.x + (meausre.width - width) / 2,
  );

  const translateX = position.interpolate({
    inputRange,
    outputRange: ouputRangeTranslateX,
  });

  return (
    <Animated.View
      style={[styles.indicator, { width, transform: [{ translateX }] }]}
    />
  );
};

export default Indicator;

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    bottom: 0,
    width: 40,
    height: 4,
    left: 0,
    backgroundColor: COLOR.WHITE,
    borderRadius: BORDER.PILL,
  },
});
