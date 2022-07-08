import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CText from '../CText';
import Container from '../Container';
import { COLOR, SPACING, TEXT, BORDER } from '../../configs/styles';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../constants/constants';

const BottomSheetSignIn = ({ handleClickClose }) => {
  const [txtEmail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClickLogin = () => {
    setShowModal(true);
    setTimeout(async () => {
      try {
        const result = await authApi.signIn(txtEmail, txtPassword);
        await AsyncStorage.setItem(KEY_STORAGE.TOKEN, result.data.token);
        await AsyncStorage.setItem(KEY_STORAGE.ID_USER, result.data._id);
        handleClickClose();
      } catch (error) {
        Alert.alert(error.message);
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

        <Container
          marginTop={SPACING.S5}
          borderRadius={BORDER.SMALL}
          padding={SPACING.S3}
          backgroundColor={COLOR.DANGER2}
          width="100%">
          <TouchableOpacity onPress={handleClickLogin}>
            <CText
              color={COLOR.WHITE}
              text={TEXT.STRONG}
              width="100%"
              textAlign="center"
              fontSize={16}>
              Đăng nhập
            </CText>
          </TouchableOpacity>
        </Container>
      </Container>
    </Animated.View>
  );
};

export default BottomSheetSignIn;

const styles = StyleSheet.create({});
