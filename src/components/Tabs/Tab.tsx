import { View } from 'react-native';
import React from 'react';
import Container from '../Container';
import CText from '../CText';
import { BORDER, COLOR, SPACING } from '../../configs/styles';

const Tab = React.forwardRef<View, any>(({ item, redDot, focusTab }, ref) => {
  return (
    <View ref={ref}>
      <Container alignItems="center">
        <CText
          // color={focusTab ? COLOR.WHITE : COLOR.GRAY}
          textTransform="capitalize"
          fontSize={16}
          paddingHorizontal={SPACING.S2}>
          {item.title}
        </CText>
        {redDot && (
          <Container
            width={8}
            height={8}
            backgroundColor={COLOR.DANGER}
            position="absolute"
            borderRadius={BORDER.PILL}
            right={0}
          />
        )}
      </Container>
    </View>
  );
});

export default Tab;
