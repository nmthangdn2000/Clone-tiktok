import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from '../../components';
import { COLOR, SPACING } from '../../configs/styles';
import Header from './components/Header';
import Introduce from './components/Introduce';
import Private from './components/Private';
import Social from './components/Social';

const SettingScreen = () => {
  return (
    <Container
      flex={1}
      backgroundColor={COLOR.WHITE}
      paddingHorizontal={SPACING.S4}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollToOverflowEnabled={true}>
        <Header data={null} />
        <Introduce />
        <Social />
        <Private />
      </ScrollView>
    </Container>
  );
};

export default SettingScreen;
