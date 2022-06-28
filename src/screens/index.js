import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, Pressable, StyleSheet } from 'react-native';
import MainScreen from './main/MainScreen';
import ProfileScreen from './profile/ProfileScreen';
import { ADD_ACCOUNT_ICON_IMG, MORE_VERT_IMG } from '../configs/source';
import { useSelector } from 'react-redux';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const Index = () => {
  const currentBottomTab = useSelector(state => state.index.currentBottomTab);

  return (
    <Navigator tabBar={() => <></>} initialRouteName="MainScreen">
      <Screen name="MainScreen" component={MainScreen} />
      {currentBottomTab === 'Trang chủ' ? (
        <Screen
          name="ProfileScreenTab"
          component={ProfileScreen}
          initialParams={{ showHeader: true }}
        />
      ) : (
        <></>
      )}
    </Navigator>
  );
};

export default Index;
