import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CText from '../CText';
import Container from '../Container';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import CInput from '../CInput';
import {
  CLOSE_EYE_ICON,
  LOCK_OUTLINE_ICON,
  MAIL_OUTLINE_ICON_IMG,
  REMOVE_EYE_ICON,
  USER_IMG,
} from '../../configs/source';
import * as authApi from '../../apis/auth.api';
import ModalLoading from '../modal/ModalLoading';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const BottomSheetSignUp = ({ setCurrentForm, backToScreenSocial }) => {
  const [txtName, setTxtName] = useState('');
  const [txtEmail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleClickSignUp = () => {
    setIsEmpty(false);
    setIsFailure(false);
    setShowModal(true);

    setTimeout(async () => {
      try {
        if (!txtName || !txtEmail || !txtPassword) {
          return setIsEmpty(true);
        }
        const result = await authApi.signUp(txtName, txtEmail, txtPassword);
        console.log(result);
        setCurrentForm(1);
      } catch (error) {
        console.log(error);
        setIsFailure(true);
      } finally {
        setShowModal(false);
      }
    }, 2000);
  };

  return (
    <Animated.View
      entering={FadeIn.duration(300).delay(300)}
      exiting={FadeOut.duration(300).delay(300)}>
      <Container
        backgroundColor={COLOR.WHITE}
        justifyContent="center"
        alignItems="center">
        {showModal && <ModalLoading visible={showModal} />}
        <CText text={TEXT.H1} textAlign="center" marginVertical={SPACING.S2}>
          TikTok
        </CText>
        <CText
          text={TEXT.H3}
          textAlign="center"
          marginVertical={SPACING.S2}
          color={COLOR.GRAY}
          marginBottom={SPACING.S10}>
          Đăng ký
        </CText>
        <CInput
          placeholder="Name"
          iconLeft={USER_IMG}
          onChangeText={text => setTxtName(text)}
        />
        <Container marginVertical={SPACING.S2} width="100%">
          <CInput
            iconLeft={MAIL_OUTLINE_ICON_IMG}
            placeholder="Email"
            onChangeText={text => setTxtEmail(text)}
            keyboardType="email-address"
          />
        </Container>
        <Container marginVertical={SPACING.S2} width="100%">
          <CInput
            secureTextEntry={secureTextEntry}
            placeholder="Password"
            iconLeft={LOCK_OUTLINE_ICON}
            onChangeText={text => setTxtPassword(text)}
            iconRight={secureTextEntry ? REMOVE_EYE_ICON : CLOSE_EYE_ICON}
            onPressIconRight={() => setSecureTextEntry(!secureTextEntry)}
          />
        </Container>
        <Container padding={SPACING.S3}>
          <CText color={COLOR.DANGER}>
            {isEmpty
              ? 'Bạn phải nhập đầy đủ các trường'
              : isFailure
              ? 'Email đã tồn tại'
              : ''}
          </CText>
        </Container>
        <Container
          marginTop={SPACING.S5}
          borderRadius={BORDER.SMALL}
          padding={SPACING.S3}
          backgroundColor={COLOR.DANGER2}
          width="100%">
          <TouchableOpacity onPress={handleClickSignUp}>
            <CText
              color={COLOR.WHITE}
              text={TEXT.STRONG}
              width="100%"
              textAlign="center"
              fontSize={16}>
              Đăng ký
            </CText>
          </TouchableOpacity>
        </Container>
        <Container padding={SPACING.S2} width="100%" paddingTop={SPACING.S10}>
          <CText
            textAlign="center"
            onPress={() => {
              setCurrentForm(0);
              backToScreenSocial();
            }}>
            Đăng nhập bằng cách khác
          </CText>
        </Container>
      </Container>
    </Animated.View>
  );
};

export default BottomSheetSignUp;

const styles = StyleSheet.create({});
