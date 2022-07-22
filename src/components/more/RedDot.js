import React from 'react';
import Container from '../Container';
import { BORDER, COLOR, SPACING } from '../../configs/styles';

const RedDot = () => {
  return (
    <Container
      width={SPACING.S2}
      height={SPACING.S2}
      backgroundColor={COLOR.DANGER}
      borderRadius={BORDER.PILL}
    />
  );
};

export default React.memo(RedDot);
