import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import { removeStyleUndefined } from '../utils/handleStyle';
import { FlexCustomType } from '../utils/interfaceStyles';

const Padding = ({
  children,
  justifyContent,
  alignItems,
  flexWrap,
  reverse = false,
}: FlexCustomType) => {
  const initStyle = {
    flexDirection: reverse ? 'row-reverse' : 'row',
    justifyContent,
    alignItems,
    flexWrap,
  };

  const styles: StyleProp<ViewStyle> = removeStyleUndefined(initStyle);

  return <View style={styles}>{children}</View>;
};

export default Padding;
