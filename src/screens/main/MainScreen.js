import { Image, StyleSheet, Pressable, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR, TEXT } from '../../configs/styles';

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
  HOME_FILLED_IMG,
  MESSAGE_FILLED_IMG,
  USER_FILLED_IMG,
  USER_IMG,
} from '../../configs/source';
import BoxCreateVideo from './components/BoxCreateVideo';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentBottomTab } from '../../store/indexSlice';
import BottomSheetComment from './components/BottomSheetComment';

const Bottom = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentBottomTab = useSelector(state => state.index.currentBottomTab);

  const [theme, setTheme] = useState('dart');

  const handleButtonBack = () => navigation.goBack();

  const handleTapPress = myTheme => {
    if (theme !== myTheme) {
      setTheme(myTheme);
    }
  };

  const handleCurrentBottomTab = tabName => {
    if (currentBottomTab !== tabName) {
      dispatch(setCurrentBottomTab({ currentBottomTab: tabName }));
    }
  };
  return (
    <>
      <StatusBar backgroundColor={COLOR.TRANSPARENT} translucent={true} />

      <Bottom.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: COLOR.TRANSPARENT,
            position: 'absolute',
            elevation: 0,
          },
          tabBarLabelStyle: {
            marginTop: -10,
            ...TEXT.SMALL_STRONG,
            fontSize: 10,
            marginBottom: 5,
          },

          headerShown: false,
          tabBarActiveTintColor: theme === 'dart' ? COLOR.WHITE : COLOR.BLACK,
          tabBarInactiveTintColor: COLOR.GRAY,
        }}>
        <Bottom.Screen
          name="Trang chủ"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Image
                  source={focused ? HOME_FILLED_IMG : HOME_IMG}
                  tintColor={color}
                  style={styles.bottomTabIcon}
                />
              );
            },
          }}
          listeners={{
            focus: () => {
              handleTapPress('dart');
              StatusBar.setBarStyle('light-content');
            },
            tabPress: e => {
              handleTapPress('dart');
              handleCurrentBottomTab('Trang chủ');
            },
          }}
        />
        <Bottom.Screen
          name="Tìm kiếm"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ color, focused }) => {
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
            focus: () => {
              StatusBar.setBarStyle('dark-content');
            },
            tabPress: e => {
              handleTapPress('light');
              handleCurrentBottomTab();
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
            focus: () => {
              StatusBar.setBarStyle('dark-content');
            },
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('NewVideo');
              handleCurrentBottomTab();
            },
          }}
        />
        <Bottom.Screen
          name="Hộp thư"
          component={InboxScreen}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Image
                  source={focused ? MESSAGE_FILLED_IMG : MESSAGE_IMG}
                  tintColor={color}
                  style={styles.bottomTabIcon}
                />
              );
            },
          }}
          listeners={{
            focus: () => {
              StatusBar.setBarStyle('dark-content');
            },
            tabPress: e => {
              handleTapPress('light');
              handleCurrentBottomTab();
            },
          }}
        />
        <Bottom.Screen
          name="Hồ sơ"
          component={ProfileScreen}
          initialParams={{ showHeader: false }}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Image
                  source={focused ? USER_FILLED_IMG : USER_IMG}
                  tintColor={color}
                  style={styles.bottomTabIcon}
                />
              );
            },
          }}
          listeners={{
            focus: () => {
              StatusBar.setBarStyle('dark-content');
            },
            tabPress: e => {
              handleTapPress('light');
              handleCurrentBottomTab();
            },
          }}
        />
      </Bottom.Navigator>
      <BottomSheetComment />
      <BoxCreateVideo />
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 28,
    height: 28,
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
