import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Container } from '../../components';
import { COLOR, SPACING } from '../../configs/styles';
import Header from './components/Header';
import Introduce from './components/Introduce';
import Private from './components/Private';
import Social from './components/Social';
import * as userApi from '../../apis/user.api';
import { UserModel } from '../../models/User.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../constants/constants';

const SettingScreen = () => {
  const [user, setUser] = useState<UserModel>();
  const fetchData = useCallback(async () => {
    try {
      const id = await AsyncStorage.getItem(KEY_STORAGE.ID_USER);
      const res = await userApi.getUserById(id);
      console.log(res);

      setUser(res);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      flex={1}
      backgroundColor={COLOR.WHITE}
      paddingHorizontal={SPACING.S4}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollToOverflowEnabled={true}>
        <Header data={user} />
        <Introduce />
        <Social />
        <Private data={user} />
      </ScrollView>
    </Container>
  );
};

export default SettingScreen;
