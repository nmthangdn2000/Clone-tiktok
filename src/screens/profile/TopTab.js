import { View, Text, Image } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyVideo from './tab/MyVideo';
import Wishlish from './tab/Wishlish';
import VideoPrivate from './tab/VideoPrivate';
import { COLOR } from '../../configs/styles';
import { ListIcon_IMG, HeartIcon_IMG } from '../../configs/source';

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ scrollHandle }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR.BLACK,
        tabBarInactiveTintColor: COLOR.GRAY,
        tabBarStyle: { elevation: 1 },
      }}>
      <Tab.Screen
        name="MyVideo"
        options={{
          tabBarShowLabel: false,
          tabBarPressColor: COLOR.LIGHT_GRAY,
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={ListIcon_IMG} tintColor={color} />
          ),
        }}>
        {props => <MyVideo {...props} scrollHandle={scrollHandle} />}
      </Tab.Screen>
      <Tab.Screen
        name="Wishlish"
        options={{
          tabBarShowLabel: false,
          tabBarPressColor: COLOR.LIGHT_GRAY,
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={HeartIcon_IMG} tintColor={color} />
          ),
        }}>
        {props => <Wishlish {...props} scrollHandle={scrollHandle} />}
      </Tab.Screen>
      <Tab.Screen
        name="VideoPrivate"
        options={{
          tabBarShowLabel: false,
          tabBarPressColor: COLOR.LIGHT_GRAY,
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={ListIcon_IMG} tintColor={color} />
          ),
        }}>
        {props => <VideoPrivate {...props} scrollHandle={scrollHandle} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TopTab;
