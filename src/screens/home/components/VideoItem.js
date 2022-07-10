import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import VerticalSecction from './VerticalSecction';
import BottomSecction from './BottomSecction';
import Video from 'react-native-video';
import { Container, CText } from '../../../components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HEIGHT, WIDTH } from '../../../configs/constant';
import PressContainer from './PressContainer';
import { SERVER_DOMAIN } from '../../../constants/constants';
import Slider from '@react-native-community/slider';
import { COLOR, SPACING } from '../../../configs/styles';

const { width, height } = Dimensions.get('window');

const VideoItem = React.forwardRef(({ item }, ref) => {
  const { _id, caption, url, author, audio, like, comment } = item;
  const verticalRef = useRef();
  const videoRef = useRef();
  const sliderRef = useRef();

  const bottomHeight = useBottomTabBarHeight();

  const [isActive, setIsActive] = useState(false);
  const [duration, setDuration] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [seek, setSeek] = useState(0);

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
      width={width}
      height={HEIGHT - bottomHeight - StatusBar.currentHeight}
      backgroundColor="black">
      <Video
        ref={videoRef}
        source={{
          uri: `${SERVER_DOMAIN}/${url}`,
        }}
        style={styles.video}
        resizeMode="cover"
        paused={!isActive}
        repeat
        onLoad={data => setDuration(data.duration)}
        onProgress={data => {
          setSliderValue(data.currentTime / duration);
        }}
        seek={seek}
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

      <Container
        width={WIDTH}
        padding={0}
        position="absolute"
        bottom={-SPACING.S1 - 4}
        elevation={100}>
        <Slider
          ref={sliderRef}
          style={{
            left: -SPACING.S2 * 2 + SPACING.S1,
            width: WIDTH + SPACING.S3 * 2,
          }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={COLOR.WHITE}
          maximumTrackTintColor={COLOR.WHITE}
          thumbTintColor={COLOR.WHITE}
          value={sliderValue}
          onSlidingComplete={value => {
            setSeek(value * duration);
            setSliderValue(value);
          }}
        />
      </Container>
    </Container>
  );
});

export default React.memo(VideoItem);

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    width: width,
    height: height,
  },
});
