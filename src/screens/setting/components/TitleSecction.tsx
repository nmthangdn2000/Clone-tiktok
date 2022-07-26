import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container, CText } from '../../../components';
import { COLOR, SPACING } from '../../../configs/styles';

const TitleSecction = ({ title }) => {
  return (
    <Container paddingVertical={SPACING.S2}>
      <CText color={COLOR.GRAY} fontSize={13}>
        {title}
      </CText>
    </Container>
  );
};

export default React.memo(TitleSecction);

const styles = StyleSheet.create({});
