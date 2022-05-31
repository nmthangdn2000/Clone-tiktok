import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash/SplashScreen';
import MainScreen from './src/screens/main/MainScreen';
import NewVideoScreen from './src/screens/newVideo/NewVideoScreen';
import PreviewVideoScreen from './src/screens/newVideo/PreviewVideoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewVideo"
          component={NewVideoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreviewVideoScreen"
          component={PreviewVideoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
