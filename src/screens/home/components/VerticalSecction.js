import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useImperativeHandle } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Container, CText, Icon } from '../../../components';
import {
  AVATA_IMG,
  BOOKMARK_FILLED_IMG,
  COMMENT_ICON_IMG,
  HEART_IMG,
  HEART_TRUE_IMG,
  REPLY_FILLED_IMG,
} from '../../../configs/source';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';

const VerticalSecction = React.forwardRef(({}, ref) => {
  const navigation = useNavigation();

  const heartValue = useSharedValue(0);

  const heartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: heartValue.value }],
    };
  }, []);

  const handleClickHeart = useCallback(
    doubleTap => {
      if (doubleTap && heartValue.value !== 0) {
        return;
      } else {
        heartValue.value =
          heartValue.value === 0
            ? withTiming(1, {
                duration: 800,
                easing: Easing.elastic(2),
              })
            : withTiming(0, {
                duration: 200,
                easing: Easing.linear,
              });
      }
    },
    [heartValue],
  );

  useImperativeHandle(ref, () => ({
    handleClickHeart: doubleTap => {
      handleClickHeart(doubleTap);
    },
  }));

  const ItemVertical = ({ source, text, tinColor, onPress = null }) => {
    return (
      <Container marginBottom={SPACING.S4} alignItems="center">
        <Icon
          source={source}
          width={32}
          height={32}
          tintColor={tinColor}
          onPress={onPress}
        />
        <CText color={COLOR.WHITE}>{text}</CText>
      </Container>
    );
  };

  const handleClickAvatar = () => {
    navigation.navigate('ProfileScreenTab');
  };

  return (
    <Container position="absolute" right={SPACING.S2} bottom={72}>
      <Container marginBottom={SPACING.S5} alignItems="center">
        <Icon
          source={AVATA_IMG}
          width={48}
          height={48}
          borderRadius={BORDER.PILL}
          borderColor={COLOR.WHITE}
          borderWidth={1}
          onPress={handleClickAvatar}
        />
        <Container
          position="absolute"
          bottom={-11}
          backgroundColor={COLOR.DANGER2}
          width={22}
          height={22}
          borderRadius={BORDER.PILL}
          justifyContent="center"
          alignItems="center">
          <CText color={COLOR.WHITE} fontSize={18}>
            +
          </CText>
        </Container>
      </Container>
      <Container alignItems="center">
        <ItemVertical
          source={HEART_IMG}
          text={25}
          onPress={() => handleClickHeart(false)}
        />
        <Animated.View style={[styles.iconHeart, heartStyle]}>
          <Icon
            source={HEART_TRUE_IMG}
            width={'100%'}
            height={'100%'}
            onPress={() => handleClickHeart(false)}
          />
        </Animated.View>
      </Container>
      <ItemVertical
        source={COMMENT_ICON_IMG}
        text={25}
        onPress={() => console.log('adadad')}
      />
      <ItemVertical
        source={BOOKMARK_FILLED_IMG}
        text={'25'}
        tinColor="#f7f7f7"
      />
      <ItemVertical source={REPLY_FILLED_IMG} text={'25'} tinColor="#f7f7f7" />
    </Container>
  );
});

export default VerticalSecction;

const styles = StyleSheet.create({
  iconHeart: {
    position: 'absolute',
    width: 33,
    height: 33,
    top: -1,
  },
});
