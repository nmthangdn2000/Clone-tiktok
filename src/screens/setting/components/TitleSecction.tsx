import React from 'react';
import { Container, CText } from '../../../components';
import { COLOR, SPACING } from '../../../configs/styles';

const TitleSecction = ({ title }) => {
  return (
    <Container paddingVertical={SPACING.S2}>
      <CText color={COLOR.GRAY} fontSize={14}>
        {title}
      </CText>
    </Container>
  );
};

export default React.memo(TitleSecction);
