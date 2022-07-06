import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'react-native';
import MainScreen from './main/MainScreen';
import ProfileScreen from './profile/ProfileScreen';
import { useSelector } from 'react-redux';
import ModalSignIn from '../components/modal/ModalSignIn';
import BottomSheetSignIn from '../components/bottomSheets/BottomSheetSocialAuth';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const Index = () => {
  const currentBottomTab = useSelector(state => state.index.currentBottomTab);
  const currentUser = useSelector(state => state.index.currentUser);

  return (
    <>
      <Navigator tabBar={() => <></>} initialRouteName="MainScreen">
        <Screen name="MainScreen" component={MainScreen} />
        {currentBottomTab === 'Trang chủ' ? (
          <Screen
            name="ProfileScreenTab"
            component={ProfileScreen}
            initialParams={{ showHeader: true, id: currentUser }}
            listeners={{
              focus: () => {
                StatusBar.setBarStyle('dark-content');
              },
            }}
          />
        ) : (
          <></>
        )}
      </Navigator>
      <ModalSignIn isShow={true} />
      <BottomSheetSignIn />
    </>
  );
};

export default Index;
