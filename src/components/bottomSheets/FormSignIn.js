import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CText from '../CText';
import Container from '../Container';
import { COLOR, SPACING, TEXT } from '../../configs/styles';
import CInput from '../CInput';
import {
  CLOSE_EYE_ICON,
  LOCK_OUTLINE_ICON,
  MAIL_OUTLINE_ICON_IMG,
  REMOVE_EYE_ICON,
} from '../../configs/source';
import * as authApi from '../../apis/auth.api';
import ModalLoading from '../modal/ModalLoading';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const BottomSheetSignIn = () => {
  const [txtEmail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClickLogin = async () => {
    try {
      setShowModal(false);
      const result = await authApi.signIn(txtEmail, txtPassword);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setShowModal(true);
    }
  };

  return (
    <Animated.View
      entering={FadeIn.duration(300).delay(300)}
      exiting={FadeOut.duration(300).delay(300)}>
      <Container
        backgroundColor={COLOR.WHITE}
        justifyContent="center"
        alignItems="center">
        {showModal && (
          <ModalLoading visible={showModal} setVisible={setShowModal} />
        )}
        <CText text={TEXT.H1} textAlign="center" marginVertical={SPACING.S2}>
          TikTok
        </CText>
        <CText
          text={TEXT.H3}
          textAlign="center"
          marginVertical={SPACING.S2}
          color={COLOR.GRAY}
          marginBottom={SPACING.S10}>
          Đăng nhập
        </CText>
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

        <TouchableOpacity onPress={handleClickLogin}>
          <Container padding={SPACING.S2} width="100%">
            <CText>Đăng nhập</CText>
          </Container>
        </TouchableOpacity>
      </Container>
    </Animated.View>
  );
};

export default BottomSheetSignIn;

const styles = StyleSheet.create({});
