import React from 'react';
import FollowTab from './FollowTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabBar from './tab/MyTabBar';
import Test from './Test';
import { Container } from '../../components';
import { COLOR } from '../../configs/styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Container backgroundColor={COLOR.BACKGROUND_LOADING} flex={1}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <FollowTab /> */}
        <Tab.Navigator
          tabBar={props => <MyTabBar {...props} />}
          initialRouteName="Dành cho bạn">
          <Tab.Screen name="Đang follow" component={Test} />
          <Tab.Screen name="Dành cho bạn" component={FollowTab} />
        </Tab.Navigator>
      </GestureHandlerRootView>
    </Container>
  );
};

export default HomeScreen;
