import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CText from '../CText';
import Container from '../Container';
import { COLOR, SPACING } from '../../configs/styles';
import CInput from '../CInput';
import { HEART_IMG, SEARCH_IMG } from '../../configs/source';
import * as authApi from '../../apis/auth.api';
import ModalLoading from '../modal/ModalLoading';

const BottomSheetSignIn = () => {
  const [txtName, setTxtName] = useState('');
  const [txtEmail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');

  const [showModal, setShowModal] = useState(true);

  const handleClickLogin = async () => {
    try {
      const result = await authApi.signUp(txtName, txtEmail, txtPassword);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setShowModal(true);
    }
  };

  return (
    <Container
      flex={1}
      backgroundColor={COLOR.WHITE}
      justifyContent="center"
      alignItems="center">
      {showModal && <ModalLoading visible={showModal} />}
      <CText>Login</CText>
      <CInput iconLeft={HEART_IMG} onChangeText={text => setTxtName(text)} />
      <CInput
        iconLeft={HEART_IMG}
        onChangeText={text => setTxtEmail(text)}
        keyboardType="email"
      />
      <CInput
        keyboardType="password"
        iconLeft={HEART_IMG}
        onChangeText={text => setTxtPassword(text)}
        iconRight={SEARCH_IMG}
        onPressIconRight={() => console.log('password eye')}
      />

      <TouchableOpacity onPress={handleClickLogin}>
        <Container padding={SPACING.S2} width="100%">
          <CText>Đăng nhập</CText>
        </Container>
      </TouchableOpacity>
    </Container>
  );
};

export default BottomSheetSignIn;

const styles = StyleSheet.create({});
