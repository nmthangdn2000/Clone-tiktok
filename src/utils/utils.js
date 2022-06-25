import { interpolate } from 'react-native-reanimated';
import React from 'react';

const getTranslateX = () => {
  const range = 1;
  const snapshot = 50;
  const radius = 30;
  /// translateX
  const inputRangeX = [];
  const outputRangeX = [];
  for (let i = 0; i <= snapshot; ++i) {
    const value = i / snapshot;
    const move = -Math.sin((value * Math.PI) / 2) * radius;
    inputRangeX.push(value);
    outputRangeX.push(move);
  }

  return [inputRangeX, outputRangeX];
};

const getTranslateY = () => {
  const range = 1;
  const snapshot = 50;
  const radius = 100;
  /// translateX
  const inputRangeY = [];
  const outputRangeY = [];
  for (let i = 0; i <= snapshot; ++i) {
    const value = i / snapshot;
    const move = -Math.cos(value * Math.PI * 2) * radius;
    inputRangeY.push(value);
    outputRangeY.push(move);
  }

  return [inputRangeY, outputRangeY];
};

const getMusicAnimated = (value, inputRange, outputRange) => {
  return {
    transform: [
      {
        translateX: interpolate(value, inputRange, outputRange),
      },
      {
        translateY: interpolate(value, [0, 1], [0, -48]),
      },
      {
        rotate: `${interpolate(value, [0, 1], [0, 45])}deg`,
      },
      {
        scale: interpolate(value, [0, 1], [0.5, 1]),
      },
    ],
    opacity: interpolate(value, [0, 0.8, 1], [0, 1, 0]),
  };
};

export { getTranslateX, getTranslateY, getMusicAnimated };
