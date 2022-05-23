import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useCallback } from 'react';
import { COLOR } from '../../../configs/styles';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';

const BACKGROUND_COLOR = COLOR.BLACK;
const BACKGROUND_STROKE_COLOR = COLOR.LIGHT;
const STROKE_COLOR = COLOR.DANGER;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = ({ widthButton = 100 }) => {
  const R = (widthButton * 2) / (2 * Math.PI) + 10;

  const [isRecord, setIsRecord] = useState(true);
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    //   2 * Math.PI * (R + 10) is 2PI*R
    strokeDashoffset: 2 * Math.PI * (R + 10) * (1 - progress.value),
  }));

  const handleClick = useCallback(() => {
    if (isRecord) {
      progress.value = withTiming(1, {
        duration: (1 - progress.value) * 3000,
        easing: Easing.linear,
      });
    } else {
      cancelAnimation(progress);
    }
    setIsRecord(!isRecord);
  }, [isRecord]);

  const styles = StyleSheet.create({
    container: {
      width: widthButton,
      height: widthButton,
      backgroundColor: 'red',
    },
    containerButton: {
      position: 'absolute',
      width: widthButton,
      height: widthButton,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: widthButton - 30,
      height: widthButton - 30,
      borderRadius: 50,
      //   backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Svg style={{ transform: [{ rotate: '-90deg' }] }}>
        <Circle
          cx={widthButton / 2}
          cy={widthButton / 2}
          r={R}
          stroke={BACKGROUND_COLOR}
          strokeWidth={10}
        />
        <AnimatedCircle
          cx={widthButton / 2}
          cy={widthButton / 2}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={6}
          strokeDasharray={2 * Math.PI * (R + 10)}
          animatedProps={animatedProps}
        />
      </Svg>
      <View style={styles.containerButton}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={handleClick}>
          <Animated.Text>{Math.floor(progress.value * 15000)}</Animated.Text>
          <Text>adadad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CircularProgress;
