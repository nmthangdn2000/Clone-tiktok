import { Dimensions, StatusBar, StyleSheet, Text } from 'react-native';
import React from 'react';
import VerticalSecction from './VerticalSecction';
import BottomSecction from './BottomSecction';
import Video from 'react-native-video';
import { Container } from '../../../components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HEIGHT } from '../../../configs/constant';

const { width, height } = Dimensions.get('window');

const VideoItem = ({ isActive }) => {
  const bottomHeight = useBottomTabBarHeight();

  return (
    <Container
      width={width}
      height={HEIGHT - bottomHeight - StatusBar.currentHeight}>
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.video}
        resizeMode="cover"
        paused={!isActive}
        repeat
      />

      {/* container bottom */}
      <BottomSecction />

      {/* container vertical */}
      <VerticalSecction />
    </Container>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    width: width,
    height: height,
  },
});
