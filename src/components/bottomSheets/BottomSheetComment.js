import { StyleSheet, Text, View } from 'react-native';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { BORDER, COLOR, SPACING } from '../../configs/styles';
import { HEIGHT } from '../../configs/constant';

import { Container, ListView } from '..';
import HeaderBottomSheet from './HeaderBottomSheet';
import FooterBottomSheet from './FooterBottomSheet';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import ItemComment from '../item/ItemComment';

const data = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '4' },
  { key: '5' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
  { key: '11' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
];

const CBottomSheet = React.forwardRef(({}, ref) => {
  const [heightLayout, setHeightLayout] = useState(0);

  const translateY = useSharedValue(0);
  const active = useSharedValue(false);
  const context = useSharedValue({ y: 0 });

  const scrollTo = useCallback(destination => {
    'worklet';
    active.value = destination !== 0;

    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);

  const gesture = Gesture.Pan()
    .onStart(e => {
      context.value = { y: translateY.value };
    })
    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -heightLayout);
      console.log(translateY.value);
    })
    .onEnd(() => {
      if (translateY.value > -heightLayout + 100) {
        scrollTo(0);
      } else {
        scrollTo(-heightLayout);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  }, []);

  const rBottomSheetContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateY.value,
        [-heightLayout, 0],
        ['#00000060', COLOR.TRANSPARENT],
      ),
      zIndex: active.value ? 100 : -1,
    };
  }, []);

  const getHeightLayout = useCallback(e => {
    const { height } = e.nativeEvent.layout;
    setHeightLayout(height);
  }, []);

  const handleClickClose = useCallback(() => {
    scrollTo(0);
  }, []);

  useEffect(() => {
    scrollTo(-heightLayout);
  }, [scrollTo, heightLayout]);

  return (
    <Animated.View style={[styles.container, rBottomSheetContainerStyle]}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View onLayout={getHeightLayout}>
          <GestureDetector gesture={gesture}>
            <HeaderBottomSheet handleClickClose={handleClickClose} />
          </GestureDetector>

          <Container padding={SPACING.S3} height={HEIGHT / 2} marginBottom={68}>
            <ListView
              data={data}
              renderItem={({ item, index }) => {
                return <ItemComment item={item} />;
              }}
            />
          </Container>

          <FooterBottomSheet />
        </View>
      </Animated.View>
    </Animated.View>
  );
});

export default CBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSheetContainer: {
    backgroundColor: COLOR.WHITE,
    borderTopLeftRadius: BORDER.MEDIUM,
    borderTopRightRadius: BORDER.MEDIUM,

    position: 'absolute',
    top: HEIGHT,
    left: 0,
    right: 0,
  },
  inputComment: {
    flexGrow: 1,
    paddingLeft: SPACING.S2,

    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: COLOR.TRANSPARENT,
  },
});
