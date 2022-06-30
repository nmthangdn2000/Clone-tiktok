import React from 'react';
import Container from '../Container';
import Icon from '../Icon';
import { AVATA_IMG, HEART_OUTLINE_IMG } from '../../configs/source';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';

const ItemComment = () => {
  return (
    <Container
      flexDirection="row"
      alignItems="flex-start"
      marginVertical={SPACING.S1}>
      <Icon
        source={AVATA_IMG}
        width={32}
        height={32}
        borderRadius={BORDER.PILL}
      />
      <Container
        flexDirection="column"
        marginHorizontal={SPACING.S3}
        flex={1}
        flexGrow={1}>
        <CText
          text={TEXT.SMALL_STRONG}
          color={COLOR.GRAY}
          fontSize={13}
          lineHeight={13}>
          nmthang
        </CText>
        <CText numberOfLines={2} color={COLOR.BLACK} fontSize={15}>
          akldj ksajdkl jaskljd lkasjdkl jqwklje klqwjkljas kldjklas jkldj
          aklsdj klasjkld jaskld jklasd qwe qwe qweqw e
        </CText>
        <Container flexDirection="row" alignItems="center">
          <CText color={COLOR.GRAY} fontSize={13} marginRight={SPACING.S2}>
            5h
          </CText>
          <CText text={TEXT.SMALL_STRONG} color={COLOR.GRAY} fontSize={12}>
            Reply
          </CText>
        </Container>
      </Container>
      <Container flexDirection="column" alignItems="center">
        <Icon source={HEART_OUTLINE_IMG} height={18} width={18} />
        <CText color={COLOR.GRAY} fontSize={13}>
          0
        </CText>
      </Container>
    </Container>
  );
};

export default ItemComment;
