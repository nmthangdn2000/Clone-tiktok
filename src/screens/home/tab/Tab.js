import { StyleSheet, Text, View, Animated } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Animated, {
//   interpolate,
//   useAnimatedStyle,
// } from 'react-native-reanimated';
import { STATUSBAR_HEIGHT } from '../../../constants/constants';
import { COLOR, SPACING, TEXT } from '../../../configs/styles';

const Tab = React.forwardRef(
  ({ state, route, descriptors, navigation, index, position }, ref) => {
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: route.name, merge: true });
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    const inputRange = state.routes.map((_, i) => i);
    const outputRange = inputRange.map(i => (i === index ? 1 : 0.5));

    const opacity = position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <View ref={ref} style={styles.container}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}>
          <Animated.View style={{ opacity }}>
            <Text style={styles.label}>{label}</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  },
);

export default Tab;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.S3,
  },
  label: {
    textTransform: 'capitalize',
    ...TEXT.STRONG,
    fontSize: 15,
    color: COLOR.WHITE,
  },
});
