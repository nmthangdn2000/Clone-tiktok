import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import VerticalSecction from './VerticalSecction';
import BottomSecction from './BottomSecction';
import { Container } from '../../../components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import PressContainer from './PressContainer';
import {
  BOTTOM_NAVIGATOR_HEIGHT,
  STATUSBAR_HEIGHT,
  HEIGHT,
  WIDTH,
} from '../../../constants/constants';
import CVideo from './CVideo';

const { height } = Dimensions.get('window');

const VideoItem = React.forwardRef(({ item, index }, ref) => {
  const { _id, caption, url, author, audio, like, comment } = item;
  const verticalRef = useRef();
  const videoRef = useRef();

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

  const pauseVideo = useCallback(() => {
    setIsActive(false);
  }, []);

  const playVideo = useCallback(() => {
    setIsActive(true);
  }, []);

  return (
    <Container
      width={WIDTH}
      height={HEIGHT - bottomHeight - STATUSBAR_HEIGHT}
      backgroundColor="black">
      <CVideo
        isActive={isActive}
        url={url}
        videoRef={videoRef}
        bottomHeight={bottomHeight}
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
        author={author}
        idVideo={_id}
      />
    </Container>
  );
});

export default React.memo(VideoItem);
