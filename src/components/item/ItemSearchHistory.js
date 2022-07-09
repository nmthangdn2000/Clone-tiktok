import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

import { TIME_IMG, CLOSE_IMG } from '../../configs/source';
import Icon from '../../components/Icon';
import CText from '../../components/CText';
import { COLOR, SPACING, TEXT } from '../../configs/styles';

const ItemSearchHistory = ({ text, onPress, handleRemoveSearchHis }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon
        source={TIME_IMG}
        tintColor={COLOR.setOpacity(COLOR.BLACK, 0.6)}
        height={22}
        width={22}
      />
      <CText
        flex={1}
        marginLeft={SPACING.S2}
        text={TEXT.REGULAR}
        color={COLOR.setOpacity(COLOR.BLACK, 0.8)}
        fontSize={16}>
        {text}
      </CText>
      <Icon
        source={CLOSE_IMG}
        tintColor={COLOR.setOpacity(COLOR.BLACK, 0.6)}
        height={22}
        width={22}
        onPress={handleRemoveSearchHis}
      />
    </Pressable>
  );
};

export default ItemSearchHistory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.S1,
    alignItems: 'center',
  },
});
