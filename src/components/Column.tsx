import { View, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { removeStyleUndefined } from '../utils/handleStyle';
import { FlexCustomType } from '../utils/interfaceStyles';

const Column = ({
  children,
  justifyContent,
  alignItems,
  flexWrap,
  reverse = false,
}: FlexCustomType) => {
  const initStyle = {
    flexDirection: reverse ? 'column-reverse' : 'column',
    justifyContent,
    alignItems,
    flexWrap,
  };

  const styles: StyleProp<ViewStyle> = removeStyleUndefined(initStyle);

  return <View style={styles}>{children}</View>;
};

export default Column;
