import {
  ColorValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { urlSourceMedia } from '../utils/utils';
import { BORDER } from '../configs/styles';

interface StyleAvatar {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | undefined;
  borderColor?: ColorValue | undefined;
  borderWidth?: number | undefined;
  backgroundColor?: ColorValue | undefined;
}

interface Props extends StyleAvatar {
  uri: ImageSourcePropType;
}

const Avatar = ({
  uri,
  width = 96,
  height = 96,
  borderRadius,
  backgroundColor,
  borderColor,
  borderWidth,
}: Props) => {
  const styleProps: StyleAvatar = {
    width,
    height,
    borderRadius: borderRadius ? borderRadius : BORDER.PILL,
  };

  if (borderColor) styleProps.borderColor = borderColor;
  if (backgroundColor) styleProps.backgroundColor = backgroundColor;
  if (borderWidth) styleProps.borderWidth = borderWidth;

  return (
    <Image
      // source={{ uri: urlSourceMedia(uri) }}
      source={uri}
      style={styleProps}
    />
  );
};

export default Avatar;
