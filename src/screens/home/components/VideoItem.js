import { Dimensions, Pressable, StatusBar, StyleSheet } from 'react-native';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import VerticalSecction from './VerticalSecction';
import BottomSecction from './BottomSecction';
import Video from 'react-native-video';
import { Container, Icon } from '../../../components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HEIGHT } from '../../../configs/constant';
import { PLAY_ICON_IMG } from '../../../configs/source';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const VideoItem = React.forwardRef(({ index }, ref) => {
  const bottomHeight = useBottomTabBarHeight();

  const [isActive, setIsActive] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const iconPlayVideoValue = useSharedValue(1);
  const iconPlayVideoStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withSpring(iconPlayVideoValue.value, { damping: 50 }) },
      ],
    };
  }, []);
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
    setShowIcon(true);
    iconPlayVideoValue.value = 0.3333333333;
  };

  const playVideo = () => {
    setIsActive(true);
    setShowIcon(false);
    cancelAnimation(iconPlayVideoValue);
  };

  useEffect(() => {
    if (isActive) {
      iconPlayVideoValue.value = 1;
    }
  }, [isActive, iconPlayVideoValue]);

  const handleClick = () => {
    if (isActive) {
      pauseVideo();
    } else {
      playVideo();
    }
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
      <Pressable onPress={handleClick}>
        <Container height="100%" justifyContent="center" alignItems="center">
          {showIcon && (
            <Animated.View style={[styles.iconPlay, iconPlayVideoStyle]}>
              <Icon
                source={PLAY_ICON_IMG}
                width={'100%'}
                height={'100%'}
                activeOpacity={0}
                onPress={handleClick}
              />
            </Animated.View>
          )}
        </Container>
      </Pressable>
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
  iconPlay: {
    width: 120,
    height: 120,
  },
});
