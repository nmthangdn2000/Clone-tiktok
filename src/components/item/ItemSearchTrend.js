import { StyleSheet, Pressable, View, Dimensions } from 'react-native';
import React from 'react';

import { FIRE_IMG } from '../../configs/source';
import Icon from '../Icon';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';

const { width } = Dimensions.get('window');

const ItemSearchTrend = ({ text, onPress, dotColor = COLOR.GRAY }) => {
  const color = { backgroundColor: dotColor };
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.containerDot}>
        <View style={[styles.dot, color]} />
      </View>
      <CText
        maxWidth={width - 22 * 2 - SPACING.S4 * 2}
        paddingHorizontal={SPACING.S2}
        text={TEXT.REGULAR}
        color={COLOR.setOpacity(COLOR.BLACK, 0.8)}
        numberOfLines={1}
        fontSize={16}
        textTransform="capitalize">
        {text}
      </CText>
      <Icon
        source={FIRE_IMG}
        tintColor={COLOR.DANGER2}
        height={16}
        width={16}
      />
    </Pressable>
  );
};

export default ItemSearchTrend;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.S1,
    alignItems: 'center',
  },
  containerDot: {
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: BORDER.PILL,
  },
});
