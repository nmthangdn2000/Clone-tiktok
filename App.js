import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash/SplashScreen';
import NewVideoScreen from './src/screens/newVideo/NewVideoScreen';
import PreviewVideoScreen from './src/screens/newVideo/PreviewVideoScreen';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import AudioScreen from './src/screens/audio/AudioScreen';
import Index from './src/screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import PostVideoScreen from './src/screens/newVideo/PostVideoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Index"
              component={Index}
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

            <Stack.Screen name="AudioScreen" component={AudioScreen} />
            <Stack.Screen name="PostVideoScreen" component={PostVideoScreen} />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
