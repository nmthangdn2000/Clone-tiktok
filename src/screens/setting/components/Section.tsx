import React from 'react';
import { Container } from '../../../components';
import { COLOR, SPACING } from '../../../configs/styles';

const Section = ({ children }) => {
  return (
    <Container
      paddingVertical={SPACING.S2}
      borderBottomColor={COLOR.LIGHT_GRAY}
      borderBottomWidth={0.2}>
      {children}
    </Container>
  );
};

export default Section;
