import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { Container, CText, Icon, Row } from '../../../components';
import {
  AVATA_IMG,
  BOOKMARK_FILLED_IMG,
  COMMENT_ICON_IMG,
  DISC_IMG,
  HEART_IMG,
  MUSIC_ICON_IMG,
  REPLY_FILLED_IMG,
  REPLY_IMG,
} from '../../../configs/source';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';

const VerticalSecction = () => {
  const ItemVertical = ({ source, text, tinColor }) => {
    return (
      <Container marginBottom={SPACING.S4} alignItems="center">
        <Icon source={source} width={32} height={32} tintColor={tinColor} />
        <CText color={COLOR.WHITE}>{text}</CText>
      </Container>
    );
  };

  return (
    <Container position="absolute" right={SPACING.S2} bottom={72}>
      <Container marginBottom={SPACING.S5} alignItems="center">
        <Icon
          source={AVATA_IMG}
          width={48}
          height={48}
          borderRadius={BORDER.PILL}
          borderColor={COLOR.WHITE}
          borderWidth={1}
        />
        <Container
          position="absolute"
          bottom={-11}
          backgroundColor={COLOR.DANGER2}
          width={22}
          height={22}
          borderRadius={BORDER.PILL}
          justifyContent="center"
          alignItems="center">
          <CText color={COLOR.WHITE} fontSize={18}>
            +
          </CText>
        </Container>
      </Container>
      <ItemVertical source={HEART_IMG} text={25} />
      <ItemVertical source={COMMENT_ICON_IMG} text={25} />
      <ItemVertical
        source={BOOKMARK_FILLED_IMG}
        text={'25'}
        tinColor="#f7f7f7"
      />
      <ItemVertical source={REPLY_FILLED_IMG} text={'25'} tinColor="#f7f7f7" />
    </Container>
  );
};

export default VerticalSecction;
