import React from 'react';
import { Container } from '../../components';
import { COLOR, SPACING } from '../../configs/styles';
import Header from './components/Header';
import Introduce from './components/Introduce';
import Social from './components/Social';

const SettingScreen = () => {
  return (
    <Container
      flex={1}
      backgroundColor={COLOR.WHITE}
      paddingHorizontal={SPACING.S4}>
      <Header uri={null} />
      <Introduce />
      <Social />
    </Container>
  );
};

export default SettingScreen;
