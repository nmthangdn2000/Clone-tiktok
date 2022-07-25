import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container } from '../../components';
import { COLOR } from '../../configs/styles';
import { pushnotificationLocal } from '../../utils/pushnotification';

const Test = () => {
  return (
    <Container
      backgroundColor={COLOR.TRANSPARENT}
      flex={1}
      alignItems="center"
      justifyContent="center">
      <Text
        onPress={() => {
          console.log('kajsdjksakjdk');
          pushnotificationLocal();
        }}>
        Test
      </Text>
    </Container>
  );
};

export default Test;

const styles = StyleSheet.create({});
