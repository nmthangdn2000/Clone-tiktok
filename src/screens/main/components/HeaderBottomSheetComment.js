import React from 'react';
import { Container, CText, Icon } from '../../../components';
import { CLOSE_IMG } from '../../../configs/source';
import { COLOR, SPACING, TEXT } from '../../../configs/styles';

const HeaderBottomSheetComment = ({ handleClickClose }) => {
  return (
    <Container
      justifyContent="center"
      borderBottomWidth={0.2}
      borderBottomColor={COLOR.LIGHT_GRAY}>
      <Container padding={SPACING.S3} width={'100%'} alignItems="center">
        <Container />
        <CText text={TEXT.STRONG}>Bình luận</CText>
      </Container>
      <Container position="absolute" right={SPACING.S3}>
        <Icon source={CLOSE_IMG} onPress={handleClickClose} />
      </Container>
    </Container>
  );
};

export default HeaderBottomSheetComment;
