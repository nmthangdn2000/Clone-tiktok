import React from 'react';
import Container from '../Container';
import Icon from '../Icon';
import { HEART_OUTLINE_IMG } from '../../configs/source';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import { urlSourceMedia } from '../../utils/utils';
import moment from 'moment';
import 'moment/locale/vi';

const ItemComment = ({ item }) => {
  const { _id, comment, user, updatedAt } = item;

  return (
    <Container
      flexDirection="row"
      alignItems="flex-start"
      marginVertical={SPACING.S1}>
      <Icon
        source={{ uri: urlSourceMedia(user.avatar) }}
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
          {user.name}
        </CText>
        <CText numberOfLines={2} color={COLOR.BLACK} fontSize={15}>
          {comment}
        </CText>
        <Container flexDirection="row" alignItems="center">
          <CText color={COLOR.GRAY} fontSize={13} marginRight={SPACING.S2}>
            {moment(updatedAt).fromNow()}
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
