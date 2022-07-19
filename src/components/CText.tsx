import { Text } from 'react-native';
import React from 'react';
import { COLOR, TEXT } from '../configs/styles';
import { TextCustomType } from '../utils/interfaceStyles';

const CText = (props: TextCustomType) => {
  const {
    children,
    numberOfLines,
    color = COLOR.BLACK,
    text = TEXT.REGULAR,
    onPress,
    style = {},
  } = props;

  const initStyle = {
    color,
    ...text,
  };

  return (
    <Text
      style={[initStyle, style]}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {children}
    </Text>
  );
};

export default CText;
