import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Container } from '../../components';
import { COLOR } from '../../configs/styles';
const statusbarHeight = StatusBar.currentHeight;

const InboxScreen = () => {
  const bottomHeight = useBottomTabBarHeight();
  return (
    <Container
      flex={1}
      paddingTop={statusbarHeight}
      paddingBottom={bottomHeight}
      backgroundColor={COLOR.WHITE}>
      <Text>InboxScreen</Text>
    </Container>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({});
