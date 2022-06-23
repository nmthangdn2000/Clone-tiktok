import { View } from 'react-native';
import React from 'react';
import { handleResProps, removeStyleUndefined } from '../utils/handleStyle';
import { PaddingCustomType } from '../utils/interfaceStyles';

const Padding = ({
  children,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingHorizontal,
  paddingVertical,
  paddingEnd,
  paddingStart,
  ...restProps
}: PaddingCustomType) => {
  const initStyles = {
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingHorizontal,
    paddingVertical,
    paddingEnd,
    paddingStart,
  };

  let styles = handleResProps(restProps, initStyles);

  styles = removeStyleUndefined(styles);

  return <View style={styles}>{children}</View>;
};

export default Padding;
