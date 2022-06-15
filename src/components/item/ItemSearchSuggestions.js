import { StyleSheet, Text, Pressable, Image } from 'react-native';
import React from 'react';

import { AVATA_IMG, CALL_RECEIVED_IMG, SEARCH_IMG } from '../../configs/source';
import Icon from '../Icon';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';

const ItemSearchSuggestions = ({ text, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon
        source={SEARCH_IMG}
        color={COLOR.setOpacity(COLOR.BLACK, 0.6)}
        height={22}
        width={22}
      />
      <CText
        style={styles.txt}
        text={TEXT.REGULAR}
        color={COLOR.setOpacity(COLOR.BLACK, 0.8)}
        size={16}
        numberOfLines={1}>
        {text}
      </CText>
      <Image source={AVATA_IMG} style={styles.avatar} />
      <Icon
        source={CALL_RECEIVED_IMG}
        color={COLOR.setOpacity(COLOR.BLACK, 0.6)}
        height={22}
        width={22}
      />
    </Pressable>
  );
};

export default ItemSearchSuggestions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.S1,
    alignItems: 'center',
  },
  txt: {
    flex: 1,
    marginLeft: SPACING.S2,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: BORDER.PILL,
    marginRight: SPACING.S4,
  },
});
