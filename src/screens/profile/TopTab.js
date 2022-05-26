import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyVideo from './tab/MyVideo';
import Wishlish from './tab/Wishlish';
import VideoPrivate from './tab/VideoPrivate';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyVideo" component={MyVideo} />
      <Tab.Screen name="Wishlish" component={Wishlish} />
      <Tab.Screen name="VideoPrivate" component={VideoPrivate} />
    </Tab.Navigator>
  );
};

export default TopTab;
