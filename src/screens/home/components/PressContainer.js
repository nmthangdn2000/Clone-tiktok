import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Container, Icon } from '../../../components';
import { PLAY_ICON_IMG } from '../../../configs/source';
import { TapGestureHandler } from 'react-native-gesture-handler';

const PressContainer = ({ isActive, pauseVideo, playVideo }) => {
  const [showIcon, setShowIcon] = useState(false);
  //   const doubleTapRef = useRef();

  const iconPlayVideoValue = useSharedValue(1);
  const iconPlayVideoStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withSpring(iconPlayVideoValue.value, { damping: 50 }) },
      ],
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      iconPlayVideoValue.value = 1;
    }
  }, [isActive, iconPlayVideoValue]);

  const onSingleTap = () => {
    console.log('onSingleTap');
  };

  const onDoubleTap = () => {
    console.log('onDoubleTap');
  };

  const handleClick = () => {
    if (isActive) {
      pauseVideo();
      setShowIcon(true);
      iconPlayVideoValue.value = 0.3333333333;
    } else {
      playVideo();
      setShowIcon(false);
      cancelAnimation(iconPlayVideoValue);
    }
  };

  return (
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
  );
};

export default PressContainer;

const styles = StyleSheet.create({
  iconPlay: {
    width: 120,
    height: 120,
  },
});
