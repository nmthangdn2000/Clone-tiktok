import { View, Text } from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const SplashScreen = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>SplashScreen</Text>
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
};

export default SplashScreen;
