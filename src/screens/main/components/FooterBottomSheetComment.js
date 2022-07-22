import { View, StyleSheet, Keyboard } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Container from '../../../components/Container';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';
import Icon from '../../../components/Icon';
import {
  AVATA_IMG,
  A_CONG_ICON_IMG,
  BUTTON_POST_COMMENT_ICON,
  EMOJI_ICON_IMG,
} from '../../../configs/source';
import CInput from '../../../components/CInput';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import * as commentApi from '../../../apis/comment.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../../constants/constants';

const FooterBottomSheetComment = ({ idVideo, fetchData }) => {
  const [txtComment, setTxtComment] = useState('');
  const marginRightInputValue = useSharedValue(0);
  const scaleButtonValue = useSharedValue(0);

  const marginRightInputStyle = useAnimatedStyle(() => {
    return { marginRight: withTiming(marginRightInputValue.value) };
  }, []);

  const scaleButtonStyle = useAnimatedStyle(() => {
    return { transform: [{ scale: withTiming(scaleButtonValue.value) }] };
  }, []);

  const [heightKeyboardStatus, setHeightKeyboardStatus] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => {
      setHeightKeyboardStatus(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', e => {
      setHeightKeyboardStatus(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [heightKeyboardStatus]);

  useEffect(() => {
    if (txtComment?.length > 0) {
      marginRightInputValue.value = SPACING.S6;
      scaleButtonValue.value = 1;
    } else {
      marginRightInputValue.value = 0;
      scaleButtonValue.value = 0;
    }
  }, [txtComment, marginRightInputValue, scaleButtonValue]);

  const handleClickPostComment = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem(KEY_STORAGE.TOKEN);
      const result = await commentApi.postComment(idVideo, txtComment, token);
      console.log(result);
      setTxtComment('');
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [txtComment, idVideo, fetchData]);

  return (
    <Container
      padding={SPACING.S3}
      position="absolute"
      bottom={heightKeyboardStatus}
      right={0}
      left={0}
      flexDirection="row"
      flex={1}
      width={'100%'}
      alignItems="center"
      borderTopWidth={0.2}
      borderTopColor={COLOR.LIGHT_GRAY}
      backgroundColor={COLOR.WHITE}>
      <Icon
        source={AVATA_IMG}
        borderRadius={BORDER.PILL}
        width={34}
        height={34}
      />
      <Animated.View style={[styles.inputComment, marginRightInputStyle]}>
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
      </Animated.View>
      <Container right={SPACING.S2} position="absolute">
        <Animated.View style={scaleButtonStyle}>
          <Icon
            source={BUTTON_POST_COMMENT_ICON}
            width={30}
            height={30}
            onPress={handleClickPostComment}
          />
        </Animated.View>
      </Container>
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
