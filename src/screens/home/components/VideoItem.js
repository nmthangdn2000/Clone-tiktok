import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import React, { useImperativeHandle, useState } from 'react';
import VerticalSecction from './VerticalSecction';
import BottomSecction from './BottomSecction';
import Video from 'react-native-video';
import { Container } from '../../../components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HEIGHT } from '../../../configs/constant';
import PressContainer from './PressContainer';

const { width, height } = Dimensions.get('window');

const VideoItem = React.forwardRef(({ index }, ref) => {
  const bottomHeight = useBottomTabBarHeight();

  const [isActive, setIsActive] = useState(false);

  useImperativeHandle(ref, () => ({
    pauseVideo: () => {
      pauseVideo();
    },
    playVideo: () => {
      playVideo();
    },
  }));

  const pauseVideo = () => {
    setIsActive(false);
  };

  const playVideo = () => {
    setIsActive(true);
  };

  return (
    <Container
      width={width}
      height={HEIGHT - bottomHeight - StatusBar.currentHeight}
      backgroundColor="black">
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.video}
        resizeMode="cover"
        paused={!isActive}
        repeat
      />

      <PressContainer
        isActive={isActive}
        pauseVideo={pauseVideo}
        playVideo={playVideo}
      />

      {/* container bottom */}
      <BottomSecction isActive={isActive} />

      {/* container vertical */}
      <VerticalSecction />
    </Container>
  );
});

export default VideoItem;

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    width: width,
    height: height,
  },
});
