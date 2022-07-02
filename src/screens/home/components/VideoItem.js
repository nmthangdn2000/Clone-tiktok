import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import React, { useImperativeHandle, useRef, useState } from 'react';
import VerticalSecction from './VerticalSecction';
import BottomSecction from './BottomSecction';
import Video from 'react-native-video';
import { Container } from '../../../components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HEIGHT } from '../../../configs/constant';
import PressContainer from './PressContainer';
import { SERVER_DOMAIN } from '../../../constants/constants';

const { width, height } = Dimensions.get('window');

const VideoItem = React.forwardRef(({ item }, ref) => {
  const { caption, url, author, audio, like, comment } = item;
  const verticalRef = useRef();
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
          uri: `${SERVER_DOMAIN}/${url}`,
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
        verticalRef={verticalRef}
      />

      {/* container bottom */}
      <BottomSecction
        isActive={isActive}
        caption={caption}
        authorName={author.name}
        audio={audio}
      />

      {/* container vertical */}
      <VerticalSecction
        ref={verticalRef}
        like={like}
        comment={comment}
        authorAvatar={author.avatar}
      />
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
