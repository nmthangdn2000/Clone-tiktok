import { View } from 'react-native';
import React from 'react';
import { ContainerType } from '../utils/interfaceStyles';

const Container = (props: ContainerType) => {
  const { children, ...styles } = props;

  return <View style={styles}>{children}</View>;
};

export default Container;
