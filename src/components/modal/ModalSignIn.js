import { Modal, Pressable } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Container, Icon, CText } from '../';
import { CLOSE_IMG, TIKTOK_ICON_IMG } from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setBottomSheetSignIn, setModalSignIn } from '../../store/indexSlice';

const ModalSignIn = () => {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.index.modalSignIn);
  const handleClickClose = () => {
    dispatch(setModalSignIn(false));
  };

  const handleShowBottomSheetSignIn = useCallback(() => {
    dispatch(setModalSignIn(false));
    dispatch(setBottomSheetSignIn(true));
  }, [dispatch]);

  return (
    <Modal visible={visible} transparent={true}>
      <Container
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor={COLOR.setOpacity(COLOR.BLACK, 0.6)}>
        <Container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          backgroundColor={COLOR.WHITE}
          padding={SPACING.S3}
          borderRadius={BORDER.MEDIUM}
          width={'80%'}>
          <Container alignSelf="flex-end">
            <Icon source={CLOSE_IMG} onPress={handleClickClose} />
          </Container>
          <Icon
            source={TIKTOK_ICON_IMG}
            width={80}
            height={80}
            marginBottom={SPACING.S3}
          />
          <CText
            text={TEXT.H3}
            color={COLOR.BLACK}
            marginVertical={SPACING.S1}
            textAlign="center">
            Đăng nhập để follow tài khoản {'\n'} và thích hoặc bình luận về
            {'\n'}
            video
          </CText>
          <CText
            text={TEXT.SUBTITLE}
            color={COLOR.GRAY}
            marginVertical={SPACING.S1}
            textAlign="center"
            fontSize={13}>
            Trải nghiệm TikTok sẽ thú vị hơn khi bạn {'\n'} follow và tương tác
            với bạn bè
          </CText>
          <Container
            width={'100%'}
            borderRadius={BORDER.SMALL}
            backgroundColor={COLOR.DANGER2}
            padding={SPACING.S2}
            justifyContent="center"
            alignItems="center"
            marginTop={SPACING.S3}>
            <Pressable onPress={handleShowBottomSheetSignIn}>
              <CText color={COLOR.WHITE}>Đăng nhập hoặc đăng ký</CText>
            </Pressable>
          </Container>
        </Container>
      </Container>
    </Modal>
  );
};

export default ModalSignIn;
