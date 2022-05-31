import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { Illustrations_BG_IMG } from '../../../configs/source';
import {
  COLOR,
  TEXT,
  BORDER,
  SPACING,
  SHADOW,
} from '../../../configs/styles/index';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const BoxCreateVideo = () => {
  const translateY = useSharedValue(200);

  const slideStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  }, []);

  useEffect(() => {
    const a = setTimeout(() => {
      translateY.value = withSpring(0);
    }, 15000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  const handleClick = () => {
    translateY.value = withSpring(200);
  };

  return (
    <Animated.View style={[styles.area, slideStyle]}>
      <Pressable onPress={handleClick} style={styles.container}>
        <Image source={Illustrations_BG_IMG} style={styles.imageBG} />
        <View style={styles.rhombus} />
        <View style={styles.content}>
          <Text style={styles.title}>Chạm để quay</Text>
          <Text style={styles.subtitle}>một video mới</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default BoxCreateVideo;

const styles = StyleSheet.create({
  area: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 130,
    height: 100,
    borderRadius: BORDER.MEDIUM,
    alignItems: 'center',
    backgroundColor: COLOR.WHITE,
    ...SHADOW.REGULAR,
  },
  imageBG: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'contain',
  },
  content: {
    width: '100%',
    height: '100%',
    paddingTop: SPACING.S6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...TEXT.STRONG,
    fontSize: 16,
    color: COLOR.BLACK,
  },
  subtitle: {
    ...TEXT.SUBTITLE,
    color: COLOR.BLACK,
    fontSize: 15,
  },
  rhombus: {
    position: 'absolute',
    bottom: 0,
    width: 20,
    height: 20,
    transform: [{ rotate: '45deg' }, { translateX: 5 }, { translateY: 5 }],
    backgroundColor: COLOR.WHITE,
  },
});
