import { Text } from 'react-native';
import React from 'react';
import { COLOR, TEXT } from '../configs/styles';

const CText = ({
  children,
  size,
  color = COLOR.BLACK,
  text = TEXT.REGULAR,
  textAlign = 'left',
}) => {
  const fontSize = size ? { fontSize: size } : {};
  const textStyles = {
    color,
    textAlign,
    ...text,
    fontSize: fontSize,
  };
  return <Text style={[textStyles, fontSize]}>{children}</Text>;
};

export default CText;
