import { StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Video from 'react-native-video';
import { SERVER_DOMAIN } from '../../../constants/constants';
import { HEIGHT, WIDTH } from '../../../configs/constant';
import { COLOR, SPACING } from '../../../configs/styles';
import { Container } from '../../../components';
import Slider from '@react-native-community/slider';

const CVideo = ({ videoRef, url, isActive }) => {
  const sliderRef = useRef();

  const [duration, setDuration] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [seek, setSeek] = useState(0);
  return (
    <>
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
    </>
  );
};

export default React.memo(CVideo);

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
  },
});
