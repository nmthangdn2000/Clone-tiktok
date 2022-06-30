import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Container from '../../../components/Container';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';
import Icon from '../../../components/Icon';
import {
  AVATA_IMG,
  A_CONG_ICON_IMG,
  EMOJI_ICON_IMG,
} from '../../../configs/source';
import CInput from '../../../components/CInput';

const FooterBottomSheetComment = () => {
  const [txtComment, setTxtComment] = useState('');
  return (
    <Container
      padding={SPACING.S3}
      position="absolute"
      bottom={0}
      right={0}
      left={0}
      flexDirection="row"
      flex={1}
      width={'100%'}
      alignItems="center"
      borderTopWidth={0.2}
      borderTopColor={COLOR.LIGHT_GRAY}>
      <Icon
        source={AVATA_IMG}
        borderRadius={BORDER.PILL}
        width={34}
        height={34}
      />
      <View style={[styles.inputComment]}>
        <Container
          flexDirection="row"
          alignItems="center"
          backgroundColor={COLOR.setOpacity(COLOR.GRAY, 0.15)}
          borderRadius={BORDER.SMALL}>
          <Container flexGrow={1} marginRight={SPACING.S3}>
            <CInput
              placeholder={'Bình luận'}
              value={txtComment}
              onChangeText={text => setTxtComment(text)}
              style={styles.input}
            />
          </Container>
          <Container flexDirection="row" right={SPACING.S3}>
            <Icon
              source={A_CONG_ICON_IMG}
              borderRadius={BORDER.PILL}
              width={24}
              height={24}
            />
            <Icon
              source={EMOJI_ICON_IMG}
              borderRadius={BORDER.PILL}
              width={26}
              height={26}
              marginLeft={SPACING.S2}
            />
          </Container>
        </Container>
      </View>
    </Container>
  );
};

export default FooterBottomSheetComment;

const styles = StyleSheet.create({
  inputComment: {
    flexGrow: 1,
    paddingLeft: SPACING.S2,

    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
  },
});
