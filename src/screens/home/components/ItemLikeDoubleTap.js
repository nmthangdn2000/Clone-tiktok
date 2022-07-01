import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Icon } from '../../../components';
import { HEART_TRUE_IMG } from '../../../configs/source';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  interpolate,
  withDelay,
} from 'react-native-reanimated';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const rotates = ['10deg', '0deg', '-10deg'];

const ItemLikeDoubleTap = ({ item }) => {
  const bottomHeight = useBottomTabBarHeight();
  const { x, y } = item;
  const zoomValue = useSharedValue(1);
  const rotateValue = useSharedValue(
    rotates[Math.floor(Math.random() * rotates.length)],
  );

  const zoomStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: zoomValue.value },
        { translateY: interpolate(zoomValue.value, [0.6, 1.5], [0, -30]) },
        { rotate: rotateValue.value },
      ],
      opacity: interpolate(zoomValue.value, [0.6, 1.5], [1, 0]),
    };
  }, []);

  useEffect(() => {
    zoomValue.value = withTiming(
      0.6,
      { duration: 250, easing: Easing.bounce },
      () => {
        zoomValue.value = withDelay(
          300,
          withTiming(2, {
            duration: 500,
            easing: Easing.linear,
          }),
        );
      },
    );
  }, [zoomValue]);

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      left: x - 100,
      top: y - 100 - bottomHeight,
    },
  });

  return (
    <Animated.View style={[styles.container, zoomStyle]}>
      <Icon source={HEART_TRUE_IMG} width={200} height={200} />
    </Animated.View>
  );
};

export default ItemLikeDoubleTap;
