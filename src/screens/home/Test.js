import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container } from '../../components';
import { COLOR } from '../../configs/styles';

const Test = () => {
  return (
    <Container backgroundColor={COLOR.TRANSPARENT}>
      <Text>Test</Text>
    </Container>
  );
};

export default Test;

const styles = StyleSheet.create({});
