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
import ProfileScreen from './src/screens/profile/ProfileScreen';
import PostVideoScreen from './src/screens/newVideo/PostVideoScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '931371691595-qlna3n3pn58rf49btdee65rdk4vevd6l.apps.googleusercontent.com',
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ animation: 'none' }}>
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
            options={{ headerShown: false, animationEnabled: false }}
          />

          <Stack.Screen name="AudioScreen" component={AudioScreen} />
          <Stack.Screen name="PostVideoScreen" component={PostVideoScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
