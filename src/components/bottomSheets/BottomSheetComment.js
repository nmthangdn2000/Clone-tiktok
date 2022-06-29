import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import { HEIGHT } from '../../configs/constant';
import CText from '../CText';
import Icon from '../Icon';
import {
  AVATA_IMG,
  A_CONG_ICON_IMG,
  CLOSE_IMG,
  EMOJI_ICON_IMG,
} from '../../configs/source';
import { Row, Container, CInput } from '..';

const CBottomSheet = () => {
  const [txtComment, setTxtComment] = useState('');

  return (
    <Container
      flex={1}
      position="absolute"
      width={'100%'}
      height={'100%'}
      zIndex={100}>
      <View style={[styles.bottomSheetContainer]}>
        <Container
          justifyContent="center"
          borderBottomWidth={0.2}
          borderBottomColor={COLOR.LIGHT_GRAY}>
          <Container padding={SPACING.S3} width={'100%'} alignItems="center">
            <Container />
            <CText text={TEXT.STRONG}>Bình luận</CText>
          </Container>
          <Container position="absolute" right={SPACING.S3}>
            <Icon source={CLOSE_IMG} />
          </Container>
        </Container>

        <Container padding={SPACING.S3} height={HEIGHT / 2} marginBottom={68}>
          <Text>adadad</Text>
        </Container>

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
      </View>
    </Container>
  );
};

export default CBottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: COLOR.WHITE,
    borderTopLeftRadius: BORDER.MEDIUM,
    borderTopRightRadius: BORDER.MEDIUM,

    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
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
