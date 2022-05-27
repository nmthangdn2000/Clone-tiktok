import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR } from '../../configs/styles';

import HomeScreen from '../home/HomeScreen';
import DiscoverScreen from '../discover/DiscoverScreen';
import NewVideoScreen from '../newVideo/NewVideoScreen';
import InboxScreen from '../inbox/InboxScreen';
import ProfileScreen from '../profile/ProfileScreen';

import {
  HOME_IMG,
  MESSAGE_IMG,
  NEW_VIDEO_IMG,
  SEARCH_IMG,
  USER_IMG,
} from '../../configs/source';

const Bottom = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: COLOR.BLACK },
        headerShown: false,
        tabBarActiveTintColor: COLOR.WHITE,
        tabBarInactiveTintColor: COLOR.GRAY,
      }}>
      <Bottom.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={HOME_IMG}
                tintColor={color}
                style={styles.bottomTabIcon}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Tìm kiếm"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={SEARCH_IMG}
                tintColor={color}
                style={styles.bottomTabIcon}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="NewVideo"
        component={NewVideoScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return (
              <Image source={NEW_VIDEO_IMG} style={styles.newVideoTabIcon} />
            );
          },
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('NewVideo');
          },
        }}
      />
      <Bottom.Screen
        name="Hộp thư"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={MESSAGE_IMG}
                tintColor={color}
                style={styles.bottomTabIcon}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Hồ sơ"
        component={ProfileScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={USER_IMG}
                tintColor={color}
                style={styles.bottomTabIcon}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
  },
  newVideoTabIcon: {
    width: 48,
    height: 28,
  },
});
