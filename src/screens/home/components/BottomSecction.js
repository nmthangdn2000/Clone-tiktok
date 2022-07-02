import React, { useCallback, useEffect } from 'react';
import { Container, CText, Icon, Row } from '../../../components';
import {
  DISC_IMG,
  FLOATING_MUSIC_1_IMG,
  FLOATING_MUSIC_2_IMG,
  MUSIC_ICON_IMG,
} from '../../../configs/source';
import { COLOR, SPACING, TEXT } from '../../../configs/styles';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
  withDelay,
  cancelAnimation,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { getTranslateX } from '../../../utils/utils';

const BottomSecction = ({ isActive, caption, authorName, audio }) => {
  const discAnimatedValue = useSharedValue(0);
  const musicNote1AnimatedValue = useSharedValue(0);
  const musicNote2AnimatedValue = useSharedValue(0);

  const discAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${discAnimatedValue.value}deg`,
        },
      ],
    };
  }, []);
  const [inputRangeX, outputRangeX] = getTranslateX();

  const musicNote1AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            musicNote1AnimatedValue.value,
            inputRangeX,
            outputRangeX,
          ),
        },
        {
          translateY: interpolate(
            musicNote1AnimatedValue.value,
            [0, 1],
            [0, -48],
          ),
        },
        {
          rotate: `${interpolate(
            musicNote1AnimatedValue.value,
            [0, 1],
            [0, 45],
          )}deg`,
        },
        {
          scale: interpolate(musicNote1AnimatedValue.value, [0, 1], [0.5, 1]),
        },
      ],
      opacity: interpolate(
        musicNote1AnimatedValue.value,
        [0, 0.8, 1],
        [0, 1, 0],
      ),
    };
  }, []);

  const musicNote2AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            musicNote2AnimatedValue.value,
            inputRangeX,
            outputRangeX,
          ),
        },
        {
          translateY: interpolate(
            musicNote2AnimatedValue.value,
            [0, 1],
            [0, -48],
          ),
        },
        {
          rotate: `${interpolate(
            musicNote2AnimatedValue.value,
            [0, 1],
            [0, 45],
          )}deg`,
        },
        {
          scale: interpolate(musicNote2AnimatedValue.value, [0, 1], [0.5, 1]),
        },
      ],
      opacity: interpolate(
        musicNote2AnimatedValue.value,
        [0, 0.8, 1],
        [0, 1, 0],
      ),
    };
  }, []);

  const triggerAnimation = useCallback(() => {
    discAnimatedValue.value = withRepeat(
      withTiming(360, {
        duration: 3000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );

    musicNote1AnimatedValue.value = withRepeat(
      withTiming(1, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );

    musicNote2AnimatedValue.value = withDelay(
      1000,
      withRepeat(
        withTiming(1, {
          duration: 2000,
          easing: Easing.linear,
        }),
        -1,
        false,
      ),
    );
  }, [discAnimatedValue, musicNote1AnimatedValue, musicNote2AnimatedValue]);

  const CaptionView = () => {
    const listText = caption.split(' ');

    return (
      <CText color={COLOR.LIGHT_GRAY2}>
        {listText.map((item, index) => {
          if (item.trim()[0] === '#') {
            return (
              <CText key={index} color={COLOR.LIGHT_GRAY2} text={TEXT.STRONG}>
                {item.trim()}{' '}
              </CText>
            );
          }
          return item.trim() + ' ';
        })}
      </CText>
    );
  };

  useEffect(() => {
    if (isActive) {
      triggerAnimation();
    } else {
      cancelAnimation(discAnimatedValue);
      cancelAnimation(musicNote1AnimatedValue);
      cancelAnimation(musicNote2AnimatedValue);

      discAnimatedValue.value = 0;
      musicNote1AnimatedValue.value = 0;
      musicNote2AnimatedValue.value = 0;
    }
  }, [
    isActive,
    triggerAnimation,
    discAnimatedValue,
    musicNote1AnimatedValue,
    musicNote2AnimatedValue,
  ]);

  return (
    <Container
      position="absolute"
      bottom={0}
      width="100%"
      paddingHorizontal={SPACING.S2}
      paddingBottom={SPACING.S4}>
      <Row>
        <Container flex={4}>
          <CText text={TEXT.STRONG} color={COLOR.WHITE} fontSize={16}>
            @{authorName}
          </CText>
          <CaptionView />
          <Container width="100%">
            <Row alignItems="center">
              <Icon
                source={MUSIC_ICON_IMG}
                width={12}
                height={12}
                marginRight={SPACING.S2}
              />
              <CText color={COLOR.WHITE} numberOfLines={1}>
                {audio.name}
              </CText>
            </Row>
          </Container>
        </Container>
        <Container flex={2} justifyContent="flex-end" alignItems="flex-end">
          <Animated.View
            style={[styles.floatingMusicNote, musicNote1AnimatedStyle]}>
            <Icon
              source={FLOATING_MUSIC_1_IMG}
              width={40}
              height={40}
              tintColor={COLOR.WHITE}
            />
          </Animated.View>
          <Animated.View
            style={[styles.floatingMusicNote, musicNote2AnimatedStyle]}>
            <Icon
              source={FLOATING_MUSIC_2_IMG}
              tintColor={COLOR.WHITE}
              width={30}
              height={30}
            />
          </Animated.View>
          <Animated.View style={discAnimatedStyle}>
            <Icon source={DISC_IMG} width={40} height={40} />
          </Animated.View>
        </Container>
      </Row>
    </Container>
  );
};

export default BottomSecction;

const styles = StyleSheet.create({
  floatingMusicNote: {
    position: 'absolute',
    right: SPACING.S5,
    bottom: SPACING.S1,
  },
});
