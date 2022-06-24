import { StyleSheet } from 'react-native';
import React from 'react';
import { Container, CText, Icon, Row } from '../../../components';
import { DISC_IMG, MUSIC_ICON_IMG } from '../../../configs/source';
import { COLOR, SPACING, TEXT } from '../../../configs/styles';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const BottomSecction = () => {
  return (
    <Container
      position="absolute"
      bottom={0}
      width="100%"
      paddingHorizontal={SPACING.S2}
      paddingBottom={SPACING.S4}>
      <Row>
        <Container flex={4}>
          <CText text={TEXT.STRONG} color={COLOR.WHITE} fontSize={16}>
            @Thang
          </CText>
          <CText color={COLOR.LIGHT_GRAY2}>Video này méc cười quá ae</CText>
          <Container backgroundColor={'red'} width="100%">
            <Row alignItems="center">
              <Icon
                source={MUSIC_ICON_IMG}
                width={12}
                height={12}
                marginRight={SPACING.S2}
              />
              <CText color={COLOR.WHITE} numberOfLines={1}>
                Chờ yêu chill - Dế Choắc - Tiên Tiên
              </CText>
            </Row>
          </Container>
        </Container>
        <Container flex={2} justifyContent="flex-end" alignItems="flex-end">
          <Icon source={DISC_IMG} width={40} height={40} />
        </Container>
      </Row>
    </Container>
  );
};

export default BottomSecction;
