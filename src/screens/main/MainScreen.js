import { Image, StyleSheet, Pressable, StatusBar } from 'react-native';
import React, { useState } from 'react';
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
  NEW_VIDEO_DART_IMG,
  SEARCH_IMG,
  USER_IMG,
  ARROW_BACK_IMG,
  ADD_ACCOUNT_ICON_IMG,
  MORE_VERT_IMG,
} from '../../configs/source';

const Bottom = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  const [theme, setTheme] = useState('dart');

  const handleButtonBack = () => navigation.goBack();
  return (
    <>
      <StatusBar
        barStyle={theme === 'dart' ? 'light-content' : 'dark-content'}
        animated={true}
        backgroundColor={theme === 'dart' ? 'black' : 'white'}
      />
      <Bottom.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme === 'dart' ? COLOR.BLACK : COLOR.WHITE,
          },
          headerShown: false,
          tabBarActiveTintColor: theme === 'dart' ? COLOR.WHITE : COLOR.BLACK,
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
          listeners={{
            tabPress: e => {
              setTheme('dart');
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
          listeners={{
            tabPress: e => {
              setTheme('dart');
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
                <Image
                  source={theme === 'dart' ? NEW_VIDEO_IMG : NEW_VIDEO_DART_IMG}
                  style={styles.newVideoTabIcon}
                />
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
          listeners={{
            tabPress: e => {
              setTheme('light');
            },
          }}
        />
        <Bottom.Screen
          name="Hồ sơ"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Pressable style={styles.buttonLeft} onPress={handleButtonBack}>
                <Image source={ADD_ACCOUNT_ICON_IMG} />
              </Pressable>
            ),
            headerRight: () => (
              <Pressable style={styles.buttonRight} onPress={null}>
                <Image source={MORE_VERT_IMG} />
              </Pressable>
            ),
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
          listeners={{
            tabPress: e => {
              setTheme('light');
            },
          }}
        />
      </Bottom.Navigator>
    </>
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
    height: 30,
    resizeMode: 'contain',
  },
  buttonLeft: {
    marginLeft: 10,
  },
  buttonRight: {
    marginRight: 10,
  },
});
